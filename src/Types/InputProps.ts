import type { NombreParcial, parcial } from "./Parciales";

export interface InputProps {
    label:string;
    maxpoints:number;
    value:parcial;
    name:NombreParcial;
    onChange:(name:NombreParcial, value:string)=>void;
}



