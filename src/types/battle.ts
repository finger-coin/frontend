export type Character = {
    name: string;
    imageUrl: string;
    videoUrl: string;
}

export type Battle = {
    id: number;
    left: Character;
    right: Character;
    imageUrl: string;
    themeUrl: string;
}
