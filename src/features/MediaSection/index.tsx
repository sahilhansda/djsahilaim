import styled from 'styled-components'
import { MediaObjectList } from './consts'
import { Layout } from '../../styles/breakpoints'

const MediaSection = () => {
  return (
    <>
      <Header> Co o nas piszą media </Header>
      <MediaList>
        {MediaObjectList.map(({ displayName, link }, i) => (
          <MediaLi>
            <a href={link} target='_blank' rel='noreferrer'>
              {' '}
              {displayName}{' '}
            </a>
          </MediaLi>
        ))}
      </MediaList>
    </>
  )
}

const Header = styled.h3`
  margin: 8rem 0 0 0;
  font-size: 2rem;
  line-height: 2rem;
  box-sizing: border-box;
  border-top: 1px solid #ffffff;
  padding-top: 1rem;
  width: 100%;

  @media only screen and (${Layout.tablet}) {
    margin: 8rem 0 1.5rem 0;
  }
`

const MediaList = styled.ul`
  counter-reset: index;
  padding: 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 4rem;

  @media only screen and (${Layout.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 3rem;
  }
`

const MediaLi = styled.li`
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  counter-increment: index;
  display: flex;
  align-items: center;
  padding: 12px 0;
  box-sizing: border-box;

  &:before {
    content: counters(index, '.', decimal-leading-zero);
    font-size: 1.5rem;
    font-weight: bold;
    min-width: 50px;
    text-align: center;
    padding-right: 12px;
    font-variant-numeric: tabular-nums;
    align-self: flex-start;
    background-image: linear-gradient(to bottom, #ff00aa, #00a3ff);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export default MediaSection
