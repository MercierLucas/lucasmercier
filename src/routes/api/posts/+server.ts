import { fecthMarkdownPosts } from "$lib/utils"
import { json } from "@sveltejs/kit"


export const GET = async () => {
    const allPosts = await fecthMarkdownPosts();
    return json(allPosts);
}