import prisma from '$lib/server/prisma';


export async function load({params})
{
	const id = Number(params.slug);
	if (isNaN(id)) {
		throw new Error('Invalid recipe ID');
	}

	const recipe = await prisma.recipe.findUnique({
		where: { id }
	});

	if (!recipe) {
		throw new Error('Recipe not found');
	}

	recipe.ingredients = JSON.parse(recipe.ingredients);
	recipe.steps = recipe.steps.replace("\r","").replace("\\r","").split("\\n");
    console.log(recipe)
	return { recipe };
}