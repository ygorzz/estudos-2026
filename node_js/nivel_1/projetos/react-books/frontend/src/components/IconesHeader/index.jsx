import sacola from "../../imagens/sacola.svg";
import perfil from "../../imagens/perfil.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

const icones = [sacola, perfil];

function IconeHeader() {
  return (
    <Icones>
      {icones.map((icone) => {
        return (
          <Icone>
            <img src={icone} alt="icone"></img>
          </Icone>
        );
      })}
    </Icones>
  );
}

export default IconeHeader;
