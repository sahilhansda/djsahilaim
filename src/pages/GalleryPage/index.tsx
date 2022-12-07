import styled from 'styled-components'
import { GallerySection } from '../../features/GallerySection'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import { Layout } from '../../styles/breakpoints'

const GalleryPage = () => {
  return (
    <GradientFullWidthContainer>
      <HeadLine>GALERIA</HeadLine>
      <GallerySection />
    </GradientFullWidthContainer>
  )
}

const GradientFullWidthContainer = styled(AdjustingSection)`
  width: 100%;
  max-width: 100%;
  background: linear-gradient(#080924, #000000);
  padding-top: 4rem;
`

const HeadLine = styled.h2`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff;
  font-size: 1.4rem;
  margin-left: 2rem;

  @media only screen and (${Layout.tablet}) {
    font-size: 2rem;
    margin-left: 12rem;
  }
`

export default GalleryPage
