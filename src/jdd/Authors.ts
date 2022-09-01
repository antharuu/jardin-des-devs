export type AuthorType = { [key: string]: string }

/**
 * Liste des utilisateurs
 * 
 * Ajoutez simplement votre pseudo ici.
 * 
 * La clef doit être en minuscule sans caractère spéciaux, elle servira de slug en autres. 
 * C'est aussi ce slug que vous devez utiliser dans les metadonnées des posts. 
 * 
 * La valeur est le pseudo comme vous voulez qu'il apparaisse.
 */
export const Authors: AuthorType = {
    "antharuu": "Antharuu"
}

export function getAuthor(slug: string): string {
    return Authors[slug] ?? slug;
}