import book from "../../imagens/book.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
  img {
    height: 35px;
  }
`;

function IconeHeader() {
  return (
    <Icones>
      <Icone>
        <Link to="/livros">
          <img src={book} alt="icone"></img>
        </Link>
      </Icone>
    </Icones>
  );
}

export default IconeHeader;
