import styled from "styled-components";

function Ganhadores({ ganhadores }: any) {
    return (
        <AcumulouSld>
            <h2 >
                {ganhadores}
            </h2>
        </AcumulouSld>
    )
}

export default Ganhadores;

const AcumulouSld = styled.div`
    color: ${props =>props.theme.acumulou};
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
    max-width: 300px;
    margin-left: 200px;`