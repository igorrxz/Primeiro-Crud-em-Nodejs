// Este arquivo define estilos globais aplicados a toda a aplicação usando styled-components.
// Ele garante que todos os elementos tenham margin/padding zerados, define uma fonte padrão,
// centraliza o conteúdo da página e aplica uma cor de fundo clara.

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`;

export default Global;