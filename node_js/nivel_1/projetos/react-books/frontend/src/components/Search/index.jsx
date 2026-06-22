import InputSearch from "../Inputs/InputSearch/index.jsx";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { getLivros } from "../../services/livrosService.js";

const SearchContainer = styled.section`
  text-align: center;
  color: #fff;
  padding: 85px 0;
  height: 470px;
  width: 100%;
`;

const Titulo = styled.h2`
  width: 100%;
  font-size: 36px;
`;

const Subtitulo = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  margin: auto;
  width: 450px;
  cursor: pointer;
  p {
    width: 200px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

function Search() {
  // Lógica de estado para acompanhar e renderizar automaticamente o valor da busca na interface
  // livrosPesquisados -> variável que armazena o texto digitado pelo user
  // setlivrosPesquisados -> função que atualiza o texto digitado e avisa o react para renderizar novamente
  // useState("") -> inicia o texto digitado vazio (como se fosse um let livrosPesquisados = "") e retorna a variável e a função acima
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);
  const [livros, setLivros] = useState([]);

  // useEffect -> sincroniza um componente a um serviço externo
  // [] -> executa o codigo de useEffect uma única vez, sepre que o componente é montado
  // Ou seja, sempre que chegamos nessa rota, é feita uma req para api, recebendo a res e atualizando o estado de livros.
  useEffect(() => {
    fetchLivros();
  }, []);

  // Essa função é criada pois useEffect não aceita o uso do async/await
  async function fetchLivros() {
    const livrosDaApi = await getLivros();
    setLivros(livrosDaApi);
  }

  return (
    <SearchContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Procure sua próxima leitura.</Subtitulo>
      <InputSearch
        type="text"
        placeholder="Procure aqui sua leitura"
        // Pega o valor do elemento (target) que disparou o evento, atualiza e renderiza na interface
        onChange={(evento) => {
          const search = evento.target.value;
          if (search && search !== " ") {
            const resultado = livros.filter((livro) =>
              livro.titulo.includes(search),
            );
            setLivrosPesquisados(resultado);
          } else {
            setLivrosPesquisados([]);
          }
        }}
      />

      {livrosPesquisados.map((livro) => {
        return (
          <Resultado key={livro.id}>
            <p>{livro.titulo}</p>
          </Resultado>
        );
      })}
    </SearchContainer>
  );
}

export default Search;
