import styled from "styled-components";

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: #fff;
  // props -> permite personalizar dinamicamente, é como o parâmetro de uma função
  color: ${props => props.color || "#000"};
  font-size: ${props => props.tamanhoFonte || "36px"};
  text-align: ${props => props.alinhamento || "center"};
  margin: 0;
`;

export default Titulo;