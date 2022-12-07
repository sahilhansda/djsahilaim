import styled from 'styled-components/macro'
import Logo from './Logo'
import { PageWrapper } from '../PageWrapper'
import Drawer from '../Drawer'
import { useState } from 'react'
import { useChangeStateOnScroll } from '../../hooks/useChangeStateOnScroll'
import { ScrollTypes } from './model'
import { Layout } from '../../styles/breakpoints'

const NavBar = () => {
  const [show, setShow] = useState<boolean>(false)

  useChangeStateOnScroll(setShow, 300)

  return (
    <Wrapper showState={show}>
      <PageWrapper>
        <Logo />
        <Drawer />
      </PageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.header<ScrollTypes>`
  height: 5rem;
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  color: #ffffff;
  z-index: 150;

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  transition-timing-function: ease-in;
  transition: 0.5s;
  ${({ showState }) =>
    showState
      ? 'background-color:#000000cc;'
      : 'background-color:transparent;'};

  @media only screen and (${Layout.tablet}) {
    background-color: transparent;
  }
`

export default NavBar
