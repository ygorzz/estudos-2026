import Input from "../Input/index.js";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa.js";

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
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Search() {
  // Lógica de estado para acompanhar e renderizar automaticamente o valor da busca na interface
  // textoDigitado -> variável que armazena o texto digitado pelo user
  // setTextoDigitado -> função que atualiza o texto digitado e avisa o react para renderizar novamente
  // useState("") -> inicia o texto digitado vazio (como se fosse um let textoDigitado = "") e retorna a variável e a função acima
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <SearchContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Procure sua próxima leitura.</Subtitulo>
      <Input
        type="text"
        placeholder="Procure aqui sua leitura"
        // Pega o valor do elemento (target) que disparou o evento, atualiza e renderiza na interface
        onBlur={(evento) => {
          const resultado = livros.filter((livro) =>
            livro.titulo.includes(evento.target.value),
          );
          setLivrosPesquisados(resultado);
        }}
      />

      {livrosPesquisados.map((livro) => {
        return (
          <Resultado>
                <p>{livro.titulo}</p>
                <img src={livro.src} alt="livro" />
          </Resultado>
        );
      })}
    </SearchContainer>
  );
}

export default Search;
