import styled from "styled-components"

function Carregando() {
    return (
        <CarregandoSld>
            Carregando....
        </CarregandoSld>
    )
}

function Erro() {
    return (
        <CarregandoSld>
            Indisponível ...
        </CarregandoSld>
    )
}

export {
    Carregando,
    Erro
}

const CarregandoSld = styled.div`
    text-Align: center; 
    font-Size: 30px; 
    margin-Top: 300px;
`
