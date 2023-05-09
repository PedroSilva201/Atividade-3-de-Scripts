import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";
import Loteria from "../services/Loteria";
import { megastyle } from "../styles/theme";

const Contexto = createContext({} as LoteriaProps);

function ContextoProvider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [quina, setQuina] = useState({} as Props);
  const [timemania, setTimemania] = useState({} as Props);
  const [tema, setTema] =useState(megastyle)
  var dados = {
    acumulado: true,
    concursoEspecial: true,
    dataApuracao: true,
    dataPorExtenso: true,
    dataProximoConcurso: true,
    dezenas: [],
    numeroDoConcurso: true, 
    quantidadeGanhadores: true, 
    tipoJogo: true, 
    valorEstimadoProximoConcurso: true,
    valorPremio: true,
}
  useEffect(() => {
     (async () => {
       const resp = await Loteria.get();
       setMegasena(resp.megasena);
       setQuina(resp.quina);
       setTimemania(resp.timemania);
     })()
  }, []);

  return (
    <Contexto.Provider value={{megasena, quina, timemania, tema, setTema}}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, ContextoProvider };