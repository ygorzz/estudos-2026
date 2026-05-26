import styled from "styled-components";

const Opcoes = styled.ul`
  display: flex;
`;

const Opcao = styled.li`
  height: 100%;
  min-width: 120px;
  font-size: 16px;
  padding: 0 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const textoOpcoes = ["CATEGORIAS", "MEUS LIVROS", "FAVORITOS"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {/* .map retorna um array e o React entende e sabe com renderizar os elementos visuais presentes, por isso não foi preciso extrair cada elemento do array para serem exibidos */}
      {textoOpcoes.map((texto) => {
        return <Opcao>{texto}</Opcao>;
      })}
    </Opcoes>
  );
}

export default OpcoesHeader;
