import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { PathsTypes } from './model'
import { buttonStyle } from "../../styles/button.style";

const scrollToEntrySection = (
  scrollHook: 'entryPageStartHook' | 'entryPageEndHook'
): void => {
  setTimeout(() => {
    const element = document.getElementById(scrollHook) as HTMLElement
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }, 300)
}

const Nav = () => {
  const paths: PathsTypes[] = [
    {
      key: 'home',
      destination: '/',
      nameOfPage: 'Home',
      exact: true,
      scrollHook: 'entryPageStartHook',
    },
    {
      key: 'about',
      destination: '/',
      nameOfPage: 'About',
      scrollHook: 'entryPageEndHook',
    },
    {
      key: 'gallery',
      destination: '/',
      nameOfPage: 'Galeria',
      scrollHook: 'entryPageEndHook',
    },
    {
      key: 'contact',
      destination: '/',
      nameOfPage: 'Contact',
      scrollHook: 'entryPageEndHook',
    },
  ]

  return (
    <NavList>
      {paths.map(({ key, destination, nameOfPage, exact, scrollHook }) => (
        <Item key={key}>
          <NavLinkStyled
            end={exact}
            to={destination}
            onClick={() => scrollToEntrySection(scrollHook)}
          >
            {nameOfPage}
          </NavLinkStyled>
        </Item>
      ))}
    </NavList>
  )
}

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
  list-style-type: none;
  padding-inline-start: 0;
`

const Item = styled.li`
  cursor: pointer;
`

const NavLinkStyled = styled(NavLink)`
  min-height: 60px;
  ${buttonStyle};
  border: 1px solid transparent;
  &.active {
    background-color: #2c1b96;
    color: #ffffff;
    border: 1px solid transparent;
  }

  &:hover {
    background-color: #2c1b96;
    color: #ffffff;
    border: 1px solid transparent;
  }
`

export default Nav
