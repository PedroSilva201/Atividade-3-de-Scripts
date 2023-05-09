import Rota  from '../../routes'
import { useContexto } from "../../hooks";
import { Carregando } from "../Carregando/Carregando";
import Esquerda from '../Esquerda/Esquerda';
import Direita from '../Direita/Direita';
import styled from 'styled-components';

function Principal() {
  const {megasena} = useContexto()
  return (
    <>
      {megasena.numeroDoConcurso ?
        <div>
          <Rota/>
        </div>
        :
        <Carregando/>}

    </>
  )
}

function PrincipalComponente({contexto, trevo, titulo}:any) {
  
  return (
    <PrincipalSld>
      <Esquerda titulo={titulo} trevo={trevo} data={contexto.dataProximoConcurso} valor={contexto.valorEstimadoProximoConcurso}></Esquerda>
      <Direita numeros={contexto.dezenas} quantidadeGanhadores={contexto.quantidadeGanhadores} numeroDoConcurso={contexto.numeroDoConcurso} data={contexto.dataPorExtenso}></Direita>
    </PrincipalSld>
  )
}

const PrincipalSld = styled.div`
  height: 50vh;
  border-style: solid;
  border-width: 0px 0px 1px;
  border-color: #ddd;
  display: flex;
`

export { 
  Principal,
  PrincipalComponente
};