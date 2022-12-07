import { createGlobalStyle } from 'styled-components'
import regular from '../fonts/metropolis.regular.otf'
import bold from '../fonts/metropolis.bold.otf'

export const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: Metropolis;
    src: url(${regular}) format("opentype");
  }

  @font-face {
    font-family: Metropolis;
    font-weight: 700;
    src: url(${bold}) format("opentype");
  }

  html,
  body {
    margin: 0;
    padding: 0;
    line-height: 1.5;
  }

  body {
    font-family: Metropolis;
    height: 100vh;
    background-color: #000000;
  }

  body.fontLoaded {
    font-family: Metropolis;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  * {
    box-sizing: border-box;
    text-decoration: none;
  }
  
  a {
    &:active, &:hover, &:visited, &:link {
      color: #ffffff;
      text-decoration: none;
    }
  }
`
