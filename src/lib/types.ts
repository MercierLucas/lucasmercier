
export enum Categories
{
    "research" = "research",
    "resources" = "resources",
    "francais" = "francais",
    "english" = "english",
    "tutorial" = "tutorial",
    "python" = "python"
}


export let Langs: { [key: string]: string } = {
    "🇫🇷": "fr",
    "🇬🇧": "en",
}


export let Themes: { [key: string]: string } = {
    "🌙": "light-theme",
    "🌑": "dark-theme",
    "☀️": "solar-theme",
}


export type Post = {
    title: string
    slug: string
    tldr: string
    date: string
    categories: Categories[]
}