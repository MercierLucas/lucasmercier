import prisma from '$lib/database/prisma';
import { redirect } from '@sveltejs/kit';


export async function load({params})
{
	const id = Number(params.slug);
	if (isNaN(id)) {
		throw redirect(302, '/recipes');
	}

	const recipe = await prisma.recipe.findUnique({
		where: { id }
	});

	if (!recipe) {
		throw new Error('Recipe not found');
	}

	recipe.ingredients = JSON.parse(recipe.ingredients);
	if(recipe.steps)
	{
		recipe.steps = JSON.parse(recipe.steps);
	}
    console.log(recipe)
	return { recipe };
}