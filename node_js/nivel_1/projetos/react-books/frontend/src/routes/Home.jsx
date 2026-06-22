import Search from "../components/Search/index.jsx";
import Interesses from "../components/Interesses/index.jsx";
import styled from "styled-components";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

// Componente React -> função que retorna um JSX
// Home -> componente pai
function Home() {
  return (
    <HomeContainer>
      <Search />
      <Interesses />
    </HomeContainer>
  );
}

export default Home;
