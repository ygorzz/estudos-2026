import { livros } from "./dadosLancamentos.js";
import styled from "styled-components";
import Titulo from "../Titulo/index.js";
import CardRecomendacao from "../CardRecomendacao/index.jsx";
import livroImg from "../../imagens/livro2.png";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo color="#eb9b00">Últimos Lançamentos</Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => {
            return <img src={livro.src} alt="livro" />;
        })}
      </NovosLivrosContainer>
      <CardRecomendacao 
        titulo="Talvez você se interesse por..."
        subtitulo="O Silmarillion"
        descricao="Escrito por Tolkien"
        img={livroImg}  
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
