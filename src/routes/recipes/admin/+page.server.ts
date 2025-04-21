import prisma from '$lib/server/prisma';
import { fail, redirect, error } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'


function checkLocal(request)
{
    const isLocal = request.headers.get('host')?.startsWith('localhost');
	if (!isLocal) {
        throw error(404, 'Page not found');
	}
}


export const load: PageServerLoad = async ({ request }) => {
    checkLocal(request);
	const recipes = await prisma.recipe.findMany({
		orderBy: { createdat: 'desc' }
	});

	return { recipes };
};


function getIngredients(formData)
{
    const ingredients: { name: string; quantity: string; unit: string }[] = [];
    const ingredientPattern = /^ingredient\[(\d+)\]_(name|qty|unit)$/;
    
    const temp: Record<number, { name?: string; quantity?: string; unit?: string }> = {};
    
    for (const [key, value] of formData.entries()) {
        const match = key.match(ingredientPattern);
        if (match) {
            const index = parseInt(match[1]);
            const field = match[2];
    
            if (!temp[index]) temp[index] = {};
    
            if (field === 'name') temp[index].name = value.toString();
            if (field === 'qty') temp[index].quantity = value.toString();
            if (field === 'unit') temp[index].unit = value.toString();
        }
    }
    
    // Filter out any incomplete or empty ingredient entries
    for (const index of Object.keys(temp).map(Number).sort()) {
        const { name, quantity, unit } = temp[index];
        if (name && quantity && unit) {
            ingredients.push({ name, quantity, unit });
        }
    }
    return ingredients;
}

const deleteRecipe: Action = async({request}) => {
    checkLocal(request);
    const formData = await request.formData();
    const id = Number(formData.get('id'));

    if (!id || isNaN(id)) {
        return { error: 'Invalid recipe ID' };
    }

    try {
        await prisma.recipe.delete({ where: { id } });
    } catch (err) {
        console.error('Failed to delete recipe:', err);
        return { error: 'Failed to delete' };
    }

    // Redirect or return success
    redirect(303, '/recipes/admin');
}


function parseForm(formData) {
    const name = formData.get('name')?.toString() ?? '';
    const source = formData.get('source')?.toString() ?? '';
    const steps = formData.get("steps"); //?.split('\n').map((line) => line.trim()).filter(Boolean);
    const tags = formData.get("tags");
    const tools = formData.get("tools");
    const image = formData.get("image");
    const portions = parseInt(formData.get("portions") || 1);
    const preptime = parseInt(formData.get("preptime") || 0);
    const cooktime = parseInt(formData.get("cookingTime") || 0);
    const rating = parseInt(formData.get("rating") || 0);

    const calories = parseInt(formData.get("calories") || 0);
    const proteins = parseInt(formData.get("proteins")  || 0);
    const carbs = parseInt(formData.get("carbs")  || 0);
    const fats = parseInt(formData.get("fats")  || 0);

    let ingredients = JSON.stringify(getIngredients(formData));

    return {
        name,
        source,
        steps,
        ingredients,
        tags,
        image,
        portions,
        preptime,
        cooktime,
        rating,
        tools,
        proteins,
        calories,
        carbs,
        fats
    }
}


const edit: Action = async({request}) => {
    checkLocal(request);
    const formData = await request.formData();

    const id = Number(formData.get('id'));
    let data = parseForm(formData);


    if (!id) return { error: 'Missing required fields' };

    try {
        await prisma.recipe.update({
            where: { id },
            data: {
                ...data
            }
        });
    } catch (err) {
        console.error('Edit failed:', err);
        return { error: 'Failed to update recipe' };
    }

    redirect(303, `/recipes/admin}`);
}

const add: Action = async({request}) => {
    checkLocal(request);
    const formData = await request.formData()

    const data = parseForm(formData);

    try {
        // Insert the new recipe into the database using Prisma
        const createdRecipe = await prisma.recipe.create({
            data: data
        });

        // Redirect to the recipe list or some success page after creation
        redirect(303, '/recipes/admin');
    } catch (err) {
        // Handle any errors
        console.error('Error adding recipe:', err);
        throw error(500, 'Could not add recipe');
    }
  }

  export const actions: Actions = { add, deleteRecipe, edit }