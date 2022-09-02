export type RoleType = "Roi slime" | "Slime savant" | "Slime";

export type TeamType = {
    frontmatter: {
        pseudo: string,
        presentation: string,
        naissance: string,
        technos: string[],
        role: RoleType,
        image: string
    }
}  