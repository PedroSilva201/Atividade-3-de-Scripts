import { useContexto } from "../hooks";
import Rotas from "../routes";
import styled from "styled-components";



function Principal() {
    const { megasena, quina, timemania } = useContexto();
    return (
        <>
            {megasena.numeroDoConcurso ? <div><Rotas /></div> : <div className="carregar"><Carregando><h1>Carregando...</h1></Carregando></div>}
        </>
    );
}
export default Principal;

const Carregando = styled.div`
display: flex;  
align-items: center;
justify-content: center;
width: 200px;
height: 50px;
line-height: 50px;
text-align: center;
position: absolute;
top: 50%;
margin-top: -25px;
left: 50%;
margin-left: -100px;
font-family: roboto;`