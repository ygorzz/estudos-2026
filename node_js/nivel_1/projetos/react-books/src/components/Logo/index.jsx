import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoImg = styled.img`
  width: 50px;
  margin-right: 10px;
`;

function Logo() {
  return (
    <LogoContainer>
      {/* {} -> incorpora qualquer expressão do JS, que retorne um valor, no JSX */}
      <LogoImg src={logo} alt="logo" /> 
      <p>
        <strong>React</strong>Books
      </p>
    </LogoContainer>
  );
}

export default Logo;
