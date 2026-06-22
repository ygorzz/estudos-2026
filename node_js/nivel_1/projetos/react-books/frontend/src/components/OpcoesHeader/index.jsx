import { Link } from "react-router-dom";
import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  color: #0C3C60;
  height: 100%;
  min-width: 120px;
  font-size: 18px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const textoOpcoes = ["LIVROS", "FAVORITOS"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {/* .map retorna um array e o React entende e sabe com renderizar os elementos visuais presentes, por isso não foi preciso extrair cada elemento do array para serem exibidos */}
      {textoOpcoes.map((texto) => {
        return (
          <Link to={`/${texto.toLowerCase()}`} key={texto}>
            <Opcao>{texto}</Opcao>
          </Link>
        );
      })}
    </Opcoes>
  );
}

export default OpcoesHeader;
