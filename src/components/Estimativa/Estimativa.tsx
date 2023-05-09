import styled from "styled-components"

function Valor({ valor }: any) {
    return (
        <EstimativaSld>
            <h2>
                R$ {valor},00
            </h2>
        </EstimativaSld>
    )
}

export default Valor

const EstimativaSld = styled.div`
    color: ${props =>props.theme.estimativa};
    font-weight: bold;
    margin-left: 17vh;
    max-width: 200px;
`
