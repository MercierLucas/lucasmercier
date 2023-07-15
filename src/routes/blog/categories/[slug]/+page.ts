import type { Post, Categories } from '$lib/types'


export async function load({params})
{
    let slug = params.slug;
    let categorie = slug as Categories;
    const response = await fetch('/api/posts')
    let posts:Post[] = await response.json()

    posts = posts.filter( post => post.categories.indexOf(categorie) > -1)

    return {slug, posts};    
}


