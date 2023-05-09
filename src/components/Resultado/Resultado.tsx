import styled from "styled-components"

function NumerosSorteados({ numeros }: any) {
    return (
        
        <UlSld>
            {numeros ? numeros.map((numero: any) => {
                return <LiSld>{numero}</LiSld>
            }) : ""}
        </UlSld>
        
    )
}

export default NumerosSorteados
const UlSld = styled.ul`
    margin-left: 150px;
    width: 400px;
    height:90px; 
    margin-top: 50PX;
`

const LiSld = styled.li`
    display: inline-block;
    color: ${props =>props.theme.bolafonte};
    font-size: 1.5rem;
    width: 12%;
    border-radius: 100%;
    background-color: ${props =>props.theme.bola};
    margin-right: 5px;
    text-align: center;
    line-height: 2em;
    font-weight: bold;
`

