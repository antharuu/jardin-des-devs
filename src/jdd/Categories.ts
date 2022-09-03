export type CategoriesType = { [key: string]: string }

/**
 * Liste des catégories
 * 
 * Ajoutez simplement votre catégorie ici.
 * 
 * La clef doit être en minuscule sans caractère spéciaux, elle servira de slug en autres. 
 * C'est aussi ce slug que vous devez utiliser dans les metadonnées des posts. 
 * 
 * La valeur est le nom de la cétegorie comme vous voulez qu'il apparaisse.
 */
export const Categories: CategoriesType = {
    // "godot": "Godot",
    // "unity": "Unity",
    // "unreal": "Unreal",
    "jardin-des-devs": "Jardin des devs",
}

export function getCategory(slug: string): string {
    return Categories[slug] ?? slug;
}

export function getCleanCategory(category: string): string {
    category = getCategory(category);
    category = category.charAt(0).toUpperCase() + category.slice(1); // Uc first
    category = category.replaceAll("-", " "); // Replace - par un espace
    return category;
}