 export type parcial= number |"";


export interface Parciales {
    Parcial1: parcial;
    Parcial2: parcial;
    Parcial3: parcial;
    total: number;
}

export type NombreParcial= keyof Omit<Parciales,"total">;

