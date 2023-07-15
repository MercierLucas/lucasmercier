import { error } from '@sveltejs/kit'


export async function load({params})
{
    try
    {
        const post = await import(`../posts/${params.slug}.md`)
        const {title, date, tldr, categories} = post.metadata
        const content = post.default
    
        return {
            content,
            title,
            date,
            tldr,
            categories
        }
    }
    catch(e)
    {
        throw error(404, `Could not find ${params.slug}`);
    }
}