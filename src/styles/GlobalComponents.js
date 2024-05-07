import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
  --body-background-color: #222;
--component-background-color: #333;
--font-color: #fefefe;
--player-backgorund-color: #151515;
--component-hover-color: #444
}

*, *::after, *::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}
body{
  font-family: "Montserrat", sans-serif;

  color: var(--font-color);
}

h1{
  font-size: 5.2rem;
  font-weight: 500;
}

h2{
  font-size: 3.6rem;
}

h3{
  font-size: 3.2rem;
}

h4{
  font-size: 2.4rem;
}

p{
  font-size: 1.8rem;
}

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #777777 #333333;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;

  }

  *::-webkit-scrollbar-track {
    background: #333333;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #777777;
    border-radius: 10px;
    border: 3px none var(--component-background-color);
  }

  @media screen and (max-width: 90em) {
    html{
      font-size: 56.25%;
    }
  }
  @media screen and (max-width: 50em) {
    html{
      font-size: 50%;
    }
  }
`;

export default GlobalStyles;
