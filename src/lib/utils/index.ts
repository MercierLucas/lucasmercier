import type { Post } from "$lib/types";


export const fecthMarkdownPosts = async () => {
    const paths = import.meta.glob('/src/routes/blog/posts/*.md', {eager: true});
    //const iterablePostFiles = Object.entries(allPostFiles);

    let posts: Post[] = [];

    for (const path in paths)
    {
        let file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '');
        if (file && typeof file == 'object' && 'metadata' in file && slug)
        {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            
            const post = { ...metadata, slug } satisfies Post;
            posts.push(post);
        }
    }
    posts = posts.sort((first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

	return posts
}