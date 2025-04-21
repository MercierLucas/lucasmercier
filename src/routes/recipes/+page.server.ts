import type { Action, Actions, PageServerLoad } from './$types'
import prisma from '$lib/server/prisma';



export const load: PageServerLoad = async () => {
	const recipes = await prisma.recipe.findMany({
		orderBy: { createdAt: 'desc' }
	});

    recipes.forEach(rec => {
        rec.tags = rec.tags.split(",");
		rec.ingredients = JSON.parse(rec.ingredients);
    });

	return { recipes };
}