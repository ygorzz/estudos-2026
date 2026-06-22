import { useEffect, useState } from "react";
import styled from "styled-components";
import { deleteFavoritos, getFavoritos } from "../services/favoritosService.js";
import trash from "../imagens/trash.svg";

const FavoritosContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

const ResultadoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Resultado = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  text-align: center;
  padding: 0 100px;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    height: 25px;
  }
  &:hover {
    border: 1px solid white;
  }
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
  margin: 0;
`;

function Favoritos() {
  const [favoritos, setLivrosFavoritos] = useState([]);

  useEffect(() => {
    fetchFavoritos();
  }, []);

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavoritos();
    setLivrosFavoritos(favoritosDaApi);
  }

  async function deleteFavorito(id) {
    await deleteFavoritos(id);
    alert("Livro removido de favoritos!");
    fetchFavoritos();
  }

  return (
    <FavoritosContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {favoritos.message ? (
            <Resultado>
              <p>{favoritos.message}</p>
            </Resultado>
          ) : (
            favoritos.map((favorito) => (
              <Resultado key={favorito.id}>
                <p>{favorito.titulo}</p>
                <button
                  aria-label="Remover livro"
                  onClick={() => deleteFavorito(favorito.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <img src={trash} alt="botão de remover"></img>
                </button>
              </Resultado>
            ))
          )}
        </ResultadoContainer>
      </div>
    </FavoritosContainer>
  );
}

export default Favoritos;
