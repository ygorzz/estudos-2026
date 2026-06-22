import styled from "styled-components";
import Titulo from "../Titulo/index.jsx";
import CardRecomendacao from "../CardRecomendacao/index.jsx";
import livroImg from "../../imagens/oHobbit.jpeg";

const InteressesContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

function Interesses() {
  return (
    <InteressesContainer>
      <Titulo color="#eb9b00">Talvez você se interesse por...</Titulo>
      <CardRecomendacao 
        titulo="O Hobbit"
        subtitulo="Escrito por J.R.R Tolkien"
        descricao="Uma das aventuras mais famosas de toda a literatura."
        img={livroImg}  
      />
    </InteressesContainer>
  );
}

export default Interesses;
