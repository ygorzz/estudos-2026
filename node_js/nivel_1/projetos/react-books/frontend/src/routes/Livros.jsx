import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  deleteLivros,
  getLivros,
  insertLivros,
  updateLivros,
} from "../services/livrosService.js";
import { postFavoritos } from "../services/favoritosService.js";
import Form from "../components/FormLivros/index.jsx";
import Input from "../components/Inputs/InputForm/index.jsx";
import { BotoesForm, Botao } from "../components/BotoesForm/index.jsx";
import trash from "../imagens/trash.svg";
import pencil from "../imagens/pencil.svg";

const LivrosContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
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
  border: 1px solid transparent;
  p {
    width: 200px;
    color: #fff;
  }
  img {
    height: 25px;
  }
  &:hover {
    border-color: white;
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

const FORM_INICIAL = { titulo: "", autor: "" };

function Livros() {
  const [livros, setLivros] = useState([]);
  const [form, setForm] = useState(FORM_INICIAL);
  const [editandoId, setEditandoId] = useState(null);

  useEffect(() => {
    fetchLivros();
  }, []);

  async function fetchLivros() {
    try {
      const livrosDaApi = await getLivros();
      setLivros(livrosDaApi);
    } catch (error) {
      console.log(error);
      alert("Erro ao carregar livros. Tente novamente.");
    }
  }

  async function deleteLivro(id) {
    try {
      const data = await deleteLivros(id);
      alert(data.message);
      fetchLivros();
    } catch (error) {
      console.log(error);
    }
  }

  async function insertFavorito(id) {
    try {
      const data = await postFavoritos(id);
      alert(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateLivro(id, form) {
    const data = await updateLivros(id, form);
    alert(data.message);
    fetchLivros();
  }

  async function insertLivro(form) {
    const data = await insertLivros(form);
    alert(data.message);
    fetchLivros();
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleEditar(livro) {
    setEditandoId(livro.id);
    setForm({ titulo: livro.titulo, autor: livro.autor ?? "" });
  }

  function handleCancelar() {
    setEditandoId(null);
    setForm(FORM_INICIAL);  
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (editandoId) {
      const id = editandoId;
      try {
        await updateLivro(id, form);
      } catch (error) {
        const errorMessage = error.response.data.message; 
        alert(errorMessage);
      }
    } else {
      try {
        await insertLivro(form); // Objeto com os campos inseridos pelo usuário
      } catch (error) {
        const errorMessage = error.response.data.message; 
        alert(errorMessage);
      }
    }
    handleCancelar();
  }

  return (
    <LivrosContainer>
      <Titulo>{editandoId ? "Editar livro:" : "Adicionar livro:"}</Titulo>

      <Form onSubmit={handleSubmit}>
        {/* A cada tecla digitada o handeChange altera o value do input */}
        <Input
          name="titulo"
          placeholder="Título"
          value={form.titulo}
          onChange={handleChange}
        />
        <Input
          name="autor"
          placeholder="Autor"
          value={form.autor}
          onChange={handleChange}
        />
        <BotoesForm>
          {editandoId && (
            <Botao type="button" variante="secundario" onClick={handleCancelar}>
              Cancelar
            </Botao>
          )}
          <Botao type="submit">
            {editandoId ? "Salvar alterações" : "Adicionar"}
          </Botao>
        </BotoesForm>
      </Form>

      <Titulo>Aqui estão seus livros:</Titulo>
      <ResultadoContainer>
        {livros.message ? (
          <Resultado>
            <p>{livros.message}</p>
          </Resultado>
        ) : (
          livros.map((livro) => (
            <Resultado key={livro.id}>
              <p onClick={() => insertFavorito(livro.id)}>{livro.titulo}</p>
              <button
                aria-label="Remover livro"
                onClick={() => deleteLivro(livro.id)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={trash} alt="botão de remover"></img>
              </button>
              <button
                aria-label="Editar livro"
                onClick={() => handleEditar(livro)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={pencil} alt="botão de editar"></img>
              </button>
            </Resultado>
          ))
        )}
      </ResultadoContainer>
    </LivrosContainer>
  );
}

export default Livros;
