import styled from "styled-components";

function InformacaoConcurso({ informacoes, data } : any) {
    return (
        <DataSld>
            <h4>
                {informacoes}{data}
            </h4>
        </DataSld>
    );

}
export default InformacaoConcurso;

const DataSld = styled.div`
    margin-left: 200px;
    max-width: 400px;
    color: ${props =>props.theme.data};`