import  Titulo from "../NomeLoteria/NomeLoteria"
import Valor from "../Estimativa/Estimativa"
import Proximo from "../Proximo/Proximo"
import styled from "styled-components"


function Esquerda({titulo, trevo, data, valor }:any) {
    return(
        <EsquedaSld>

            <Trevo>
                <img src={trevo} /><Titulo titulo={titulo} /> 
            </Trevo>
            <Proximo informacoes={"Estimativa de prêmio do proximo concurso. "} data={`Sorteio em ${data}:`} />
            <Valor valor={valor} />

        </EsquedaSld>
    )
    
}

const EsquedaSld = styled.div`
    display: inline-block;
`
const Trevo = styled.div`
    margin-top: 20px;
    margin-left: 10vh;
    max-width: 300px;
`


export default Esquerda;