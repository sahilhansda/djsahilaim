import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { Layout } from '../../styles/breakpoints'

const EventPage = () => {
  const { state } = useLocation()
  const {
    event: { title, imgSrc, contentText, alt },
  } = state

  return (
    <Section>
      <EventContainer>
        <HeadLine>{title}</HeadLine>
        <RowWrapper>
          <Text>{contentText}</Text>
          <Image src={imgSrc} alt={alt} />
        </RowWrapper>
      </EventContainer>
    </Section>
  )
}

const Section = styled.section`
  background-image: linear-gradient(#080924, #000000);
  z-index: 2;
  position: relative;
`

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6rem 0;
  height: 100%;
`
const HeadLine = styled.h1`
  text-transform: uppercase;
  align-items: center;
  color: #ffffff;
  font-size: 2rem;

  @media only screen and (${Layout.tablet}) {
    font-size: 3rem;
  }
`

const RowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  position: relative;
  margin-top: 2rem;

  @media only screen and (${Layout.tablet}) {
    flex-direction: row;
    align-items: stretch;
  }
`

const Text = styled.div`
  width: 20rem;
  color: #e5e5e5;
  background-color: #090119cc;
  padding: 1rem;
  font-size: 1rem;
  position: relative;

  &:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 3rem;
    height: 3rem;
    border-left: 2px solid #ffffff;
    border-top: 2px solid #ffffff;
  }

  &:before {
    position: absolute;
    content: '';
    bottom: 0;
    right: 0;
    width: 3rem;
    height: 3rem;
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
  }

  @media only screen and (${Layout.tablet}) {
    width: 25rem;
    padding: 2rem;
    font-size: 1.2rem;
  }
`
const Image = styled.img`
  width: auto;
  max-width: 100vw;
  height: 30rem;

  @media only screen and (${Layout.tablet}) {
    height: 38rem;
  }
`

export default EventPage
