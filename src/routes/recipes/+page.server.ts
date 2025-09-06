import type { Action, Actions, PageServerLoad } from './$types'
import prisma from '$lib/database/prisma';



export const load: PageServerLoad = async ({parent}) => {
	const recipes = await prisma.recipe.findMany({
		orderBy: { createdat: 'desc' }
	});

	let parentData = await parent()

	if(!recipes)
		return {};

    recipes.forEach(rec => {
        rec.tags = rec.tags.split(",");
		rec.ingredients = JSON.parse(rec.ingredients);
    });

	return { ...parentData, recipes };
}