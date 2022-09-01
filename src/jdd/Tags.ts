export type TagsType = string[]

/**
 * Liste des tags
 * 
 * Ajoutez simplement votre tag ici.
 * 
 * La valeure doit être en minuscule sans caractère spéciaux, elle servira de slug en autres.
 * 
 * Merci de respecter un ordre alphabétique pour s'y retrouver et éviter les doublons.
 * Pour aider: https://alphabetizer.flap.tv/
 */
export const Categories: TagsType = [
    "c-sharp",
    "gdscript",
    "guide",
    "songs",
    "sprite",
    "tilemap",
    "tilset",
]

export function getTag(slug: string): string {
    return Categories[slug] ?? slug;
}

export function getCleanTag(tag: string): string {
    tag = getTag(tag);
    tag = tag.charAt(0).toUpperCase() + tag.slice(1); // Uc first
    tag = tag.replaceAll("-", " "); // Replace - par un espace
    return tag;
}