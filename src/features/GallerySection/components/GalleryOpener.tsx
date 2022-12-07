import styled from 'styled-components'
import { Layout } from '../../../styles/breakpoints'
import { OpenGalleryButton } from './OpenGalleryButton'
import {
  getImagesList,
  TemplateListObjectType,
} from '../../../utils/getImagesList'
import Icon from '../../../layouts/Icon'
import { useEffect, useState } from 'react'
import {
  AnimationProps,
  fadeInAnimationTwo,
} from '../../ErrorSection/animations'
import { ListOfAuctionsTitlesType } from '../model'

interface Props {
  galleryName: string
  setShowGalleryHandler?: any
  setCurrentGalleryName?: any
  galleryTitles: ListOfAuctionsTitlesType
}

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

const GalleryOpener = ({
  galleryName,
  setShowGalleryHandler,
  setCurrentGalleryName,
  galleryTitles,
}: Props) => {
  const [imgSrc, setImgSrc] = useState<string>('')
  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    setImgSrc(getImagesList[galleryName as keyof TemplateListObjectType][0])
    setTitle(galleryTitles[galleryName as keyof TemplateListObjectType])
  }, [galleryName, galleryTitles])

  const openGalleryHandler = () => {
    setCurrentGalleryName(galleryName)
    setShowGalleryHandler((prev: boolean) => !prev)
    scrollToEntrySection('entryPageEndHook')
  }

  return (
    <ColumnWrapper>
      <Image src={imgSrc} alt={imgSrc} loading='lazy' animationLength='0.3s' />
      <OpenGalleryButton onClick={openGalleryHandler}>
        {title}
        <StyledArrowIcon name='arrow_right' />
      </OpenGalleryButton>
    </ColumnWrapper>
  )
}

const ColumnWrapper = styled.div`
  min-width: 240px;
  position: relative;
`

const Image = styled.img<AnimationProps>`
  height: 100%;
  width: 100%;
  object-fit: cover;
  animation: ${fadeInAnimationTwo};

  @media only screen and (${Layout.tablet}) {
    height: 37.5rem;
  }
`

const StyledArrowIcon = styled(Icon)`
  font-size: 3rem;
  color: #ffffff;
  cursor: pointer;

  @media only screen and (${Layout.laptop}) {
    font-size: 4rem;
  }
`

export default GalleryOpener
