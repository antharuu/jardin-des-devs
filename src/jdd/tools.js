export const current_year = new Date().getFullYear();

export function cleanCategory(string) {
    string = string.charAt(0).toUpperCase() + string.slice(1); // Uc first
    string = string.replaceAll("-", " "); // Replace - par un espace
    return string;
}