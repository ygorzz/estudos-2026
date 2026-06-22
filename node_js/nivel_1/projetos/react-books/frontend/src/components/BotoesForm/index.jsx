import styled from "styled-components";

const BotoesForm = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

const Botao = styled.button`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  background: ${({ variante }) => variante === "secundario" ? "transparent" : "rgba(255,255,255,0.15)"};
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export {
  BotoesForm,
  Botao,
};