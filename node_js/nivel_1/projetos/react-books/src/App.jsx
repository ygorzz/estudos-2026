import Header from "./components/Header/index.jsx";
import Search from "./components/Search/index.jsx";
import UltimosLancamentos from "./components/UltimosLancamentos/index.jsx";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

// Componente React -> função que retorna um JSX
// App -> componente pai
function App() {
  return (
    <AppContainer>
      <Header />
      <Search />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
