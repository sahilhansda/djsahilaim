import styled from 'styled-components'
import {
  AnimationProps,
  fadeInAnimationTwo,
} from '../../ErrorSection/animations'

interface Props {
  imagePath: string
  altImgText: string
}

const GalleryElement = ({ imagePath, altImgText }: Props) => {
  return (
    <ColumnWrapper>
      <Image
        src={imagePath}
        alt={altImgText}
        loading='lazy'
        animationLength='0.3s'
      />
    </ColumnWrapper>
  )
}

const ColumnWrapper = styled.div`
  min-width: 240px;
  position: relative;
  //transition: all 0.2s;
`

const Image = styled.img<AnimationProps>`
  max-width: 100%;
  object-fit: cover;

  animation: ${fadeInAnimationTwo};
`

export default GalleryElement
