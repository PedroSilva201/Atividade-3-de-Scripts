export interface LoteriaProps {
    megasena: Props;
    quina:Props;
    timemania:Props;
    tema: Style;
    setTema: Function;
}

export interface Props {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: string;
}
export interface Style{
    acumulou: string,
    data: string,
    estimativa: string,
    loteria: string,
    bola: string,
    bolafonte: string
}