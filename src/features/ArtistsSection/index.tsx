import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import andrzej from '../../assets/homepage/artists/andrzej-kielar-artist-painter.webp'
import gosia from '../../assets/homepage/artists/gosia-kosiec-fot-agnieszka-cytacka.webp'
import jan from '../../assets/homepage/artists/jan-drnico-oklinski-artysta.webp'
import jaroslaw from '../../assets/homepage/artists/jaroslaw-jasnikowski-artist-painter.webp'
import lucyna from '../../assets/homepage/artists/lucyna-goralczyk.webp'
import piotr from '../../assets/homepage/artists/piotr-horodynski-artysta-malarz.webp'
import orzechowski from '../../assets/homepage/artists/orzechowski.webp'
import squiwrecords from '../../assets/homepage/artists/squiwrecords.webp'

import styled from 'styled-components'
import CarouselItem from './components/CarouselItem'
import { useCurrentWidth } from '../../hooks/useCurrentWidth'
import { Layout } from '../../styles/breakpoints'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import Icon from '../../layouts/Icon'

const ArtistsSection = () => {
  let width = useCurrentWidth()

  const responsiveDesktop = {
    0: { items: 1 },
    512: { items: 2 },
    1024: { items: 3 },
    1536: { items: 4 },
  }

  const responsiveMobile = {
    0: { items: 1 },
  }

  const items = [
    <CarouselItem name={'Squiw Records'} src={squiwrecords} />,
  ]

  const renderNextButton = () => {
    return (
      <ContainerRight>
        <ButtonNext>
          <StyledArrowIcon name='arrow_right' />
        </ButtonNext>
        <FillerSpaceRight />
      </ContainerRight>
    )
  }

  const renderPrevButton = () => {
    return <></>
  }

  return (
    <ExtendedAdjustingSection>
      <Title>Labels</Title>
      <AliceCarousel
        responsive={width < 700 ? responsiveMobile : responsiveDesktop}
        mouseTracking
        disableDotsControls
        autoPlayInterval={3000}
        animationDuration={500}
        infinite
        animationType='slide'
        items={items}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </ExtendedAdjustingSection>
  )
}

const ExtendedAdjustingSection = styled(AdjustingSection)`
  padding: 8rem 0 4rem;
`

const Title = styled.h2`
  align-self: flex-start;
  color: #ffffff;
  padding-left: 5rem;
  @media only screen and (${Layout.tablet}) {
    font-size: 2rem;
    padding-left: 3rem;
  }
`

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -1rem;
  top: 0;
  height: 100%;

  @media only screen and (${Layout.tablet}) {
    right: 0;
  }
`

const StyledArrowIcon = styled(Icon)`
  font-size: 5rem;
  color: #ffffff;
  ${(props) =>
    props.name === 'arrow_left' ? 'margin-right: 2rem;' : 'margin-left: 2rem;'}

  @media only screen and (${Layout.tablet}) {
    font-size: 10rem;
  }
`

const ButtonNext = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 15rem;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  cursor: pointer;

  @media only screen and (${Layout.tablet}) {
    width: 16rem;
    height: 20rem;
  }
`

const FillerSpaceRight = styled.div`
  display: flex;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 1) 100%
  );
  width: 8rem;
  flex-grow: 1;

  @media only screen and (${Layout.tablet}) {
    width: 16rem;
  }
`

export default ArtistsSection
