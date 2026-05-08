import type { NombreParcial } from "../types/Parciales"; // Asegura la ruta correcta

export interface InputProps {
  label: string;
  maxpoints: number;
  value: string | number; 
  name: NombreParcial;    
  onChange: (name: NombreParcial, value: string) => void; 
}


