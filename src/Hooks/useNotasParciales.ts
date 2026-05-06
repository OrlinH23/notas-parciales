import { useState, useEffect, useCallback } from "react";
import type { Parciales, NombreParcial } from "../Types/Parciales";

export const useNotasParciales = () => {
  const objParciales: Parciales = {
    Parcial1: "",
    Parcial2: "",
    Parcial3: "",
    total: 0,
  }
  const [nota, setNota] = useState<Parciales>(objParciales);
  const Max_P1_P2: number = 30;
    const MAX_P3: number = 40;
  const MAX_TOTAL: number =100;
  const PASS_SCORE: number = 65;

  const obtenerNotasParcialMaxima=(nombreParcial: NombreParcial):number=>
    {
    if(nombreParcial==="Parcial1")||nombreParcial==="Parcial2"){
        return Max_P1_P2;
  }
    return MAX_P3;
}
}


