export type parcial = number | "";

export interface Parciales {
    parcial1: parcial; // Minúscula para coincidir con el hook
    parcial2: parcial;
    parcial3: parcial;
    total: number;
}

export type NombreParcial = keyof Omit<Parciales, "total">;

