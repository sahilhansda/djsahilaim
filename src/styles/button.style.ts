import { css } from "styled-components";

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  text-transform: capitalize;
  font-size: 1.1rem;
  transition: all 0.4s;
  background-color: transparent;
  color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;

  &:link,
  &:visited {
    color: #ffffff;
  }
  &:hover {
    background-color: #2c1b96;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`
