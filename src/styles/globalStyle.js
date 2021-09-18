import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  html,
  body,
  #root {
  width: 100%;
  height: 100vh;
  }

  body, input, button {
    font: 400 1.6rem Heebo, sans-serif;
  }
  
  body {
    background-color: #23263a;

     ::-webkit-scrollbar-track
    {
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);

      background-color: none;
    }

    ::-webkit-scrollbar
    {
      width: 5px;
      background-color: #1f2235;
    }

    ::-webkit-scrollbar-thumb
    {
      border-radius: 5px;
      box-shadow: inset 0 0 6px rgba(0,0,0,.3);
      background-color: #f5163f;
    }   
  }

  button {
    cursor: pointer;
  }

  @media (max-width: 1252px) {
    html {
      font-size: 50%;
    }
  }
`;
