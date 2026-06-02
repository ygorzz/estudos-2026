import Logo from "../Logo/index.jsx";
import OpcoesHeader from "../OpcoesHeader/index.jsx";
import IconesHeader from "../IconesHeader/index.jsx";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

// Herdando estilização e alterando props de um Styled Component:
// const Header2 = styled(HeaderContainer)`
//  background-color: #AAA
// `

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
