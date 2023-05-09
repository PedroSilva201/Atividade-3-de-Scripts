import NumerosSorteados from "../Resultado/Resultado"
import Ganhadores from "../Acumulou/Acumulou"
import InformacaoConcurso from "../Data/Data"
import styled from "styled-components"


function Direita({numeros, quantidadeGanhadores, numeroDoConcurso, data }:any) {
    return(
        <DirSld>
            <NumerosSorteados numeros={numeros} />
            <Ganhadores ganhadores={quantidadeGanhadores ? `${quantidadeGanhadores} GANHADORES` : "ACUMULOU!"} />
            <InformacaoConcurso informacoes={`Concuso: ${numeroDoConcurso} -`} data={` ${data}`} />
        </DirSld>
    )
    
}

const DirSld = styled.div`
    display: inline-block;
`



export default Direita;