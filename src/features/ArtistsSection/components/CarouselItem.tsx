import styled from 'styled-components'
import { Layout } from '../../../styles/breakpoints'
import { DragEventHandler } from 'react'

interface Props {
  name: string
  src: string
}

const CarouselItem = ({ name, src }: Props) => {
  const handleDragStart: DragEventHandler = (e) => e.preventDefault()

  return (
    <Wrapper>
      <ContentWrapper>
        <Image
          src={src}
          alt={src}
          onDragStart={handleDragStart}
          role='presentation'
        />
        <Name>{name}</Name>
      </ContentWrapper>
    </Wrapper>
  )
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  width: auto;
  height: 15rem;
  border: 1px solid #ffffff;
  object-fit: contain;

  @media only screen and (${Layout.tablet}) {

    height: 20rem;
  }
`
const Name = styled.div`
  width: 100%;
  border: 1px solid #ffffff;
  margin-top: 1rem;
  padding: 1rem 0;
  text-align: center;
  font-size: 1rem;
  color: #ffffff;

  @media only screen and (${Layout.tablet}) {
    font-size: 1.4rem;
  }
`

export default CarouselItem
