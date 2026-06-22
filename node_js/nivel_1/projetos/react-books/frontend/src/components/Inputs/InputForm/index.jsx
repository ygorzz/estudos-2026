import styled from "styled-components";

const InputForm = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 15px;
  outline: none;
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    border-color: rgba(255, 255, 255, 0.7);
  }
`;

export default InputForm;