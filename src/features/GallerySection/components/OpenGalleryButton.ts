import styled from 'styled-components'
import { Layout } from '../../../styles/breakpoints'

export const OpenGalleryButton = styled.div`
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 12%;
  right: 0%;
  color: #ffffff;
  background-color: transparent;
  border: 3px solid #ffffff;
  padding-left: 1.75rem;
  transition: background 0.5s, color 0.5s;
  text-shadow: 0 0 6px #000000, 0 0 12px #000000, 0 0 18px #000000;
  font-weight: 700;

  &:hover {
    background-color: #ffffffcf;
    color: #000000;
    text-shadow: none;
  }

  @media only screen and (${Layout.tablet}) {
    font-weight: 400;
  }

  cursor: pointer;
`
