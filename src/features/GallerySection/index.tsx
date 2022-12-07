import styled from 'styled-components'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import GalleryOpener from './components/GalleryOpener'
import GalleryElement from './components/GalleryElement'
import { useEffect, useState } from 'react'
import { Layout } from '../../styles/breakpoints'
import { GalleryItemType, ListOfAuctionsTitlesType } from './model'
import { importAll } from '../../utils/importAll'
import { output } from '../../utils/mapUnknownOnString'
import {
  getImagesList,
  TemplateListObjectType,
} from '../../utils/getImagesList'
import Icon from '../../layouts/Icon'

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

const galleryTitles: ListOfAuctionsTitlesType = {
  Auction1:
    'Pełna relacja – Gala charytatywna Bursztyny Biznesu 2022. Hotel Quadrille Relais & Châteaux.',
  Auction2:
    'Gala charytatywna Bursztyny Biznesu 2022. Hotel Quadrille Relais & Châteaux.',
  Auction3: 'Ogłoszenie startu projektu Diamondscraft. Polska Agencja Prasowa.',
  Auction4:
    'Pierwsza aukcja tokenów NFT oraz dzieł wybitnych artystów, Złota 44.',
  Auction5: 'Druga aukcja tokenów NFT oraz dzieł wybitnych artystów.',
  Auction6:
    'Konferencja prasowa Diamondscraft i HT NFT Gallery. Wernisaż „Latent Glitches” Ivony Tau.',
  Auction7: 'Pierwsza na Świecie aukcja TURTLE UNITED NFT.',
}

export function GallerySection() {
  const [currentGalleryName, setCurrentGalleryName] = useState<string>(
    'Auction1'
  )
  const [currentGalleryList, setCurrentGalleryList] = useState<
    GalleryItemType[]
  >([])
  const [galleriesNames, setGalleriesNames] = useState<string[]>([])
  const [showGallery, setShowGallery] = useState<boolean>(true)
  const [galleryTitle, setGalleryTitle] = useState<string>('')

  useEffect(() => {
    const getGalleries = importAll(
      require.context('../../assets/gallery/', true, /\.(txt)$/)
    )
    const allNames = getGalleries.map((el) =>
      output(el)?.split('/').at(-1)?.split('.').at(0)
    ) as string[]
    setGalleriesNames(allNames)
  }, [])

  useEffect(() => {
    const imagesList =
      getImagesList[currentGalleryName as keyof TemplateListObjectType]
    const allImagesList = imagesList.map((galleryItem: string) => ({
      imagePath: output(galleryItem),
      altImgText: output(galleryItem),
    })) as GalleryItemType[]

    setCurrentGalleryList(allImagesList)
    setGalleryTitle(
      galleryTitles[currentGalleryName as keyof ListOfAuctionsTitlesType]
    )
  }, [currentGalleryName])

  const hideGallery = () => {
    setShowGallery(true)
    scrollToEntrySection('entryPageEndHook')
  }

  return (
    <>
      {!showGallery ? (
        <UpperBar>
          <Text>{galleryTitle}</Text>
          <WrapperIcon onClick={hideGallery}>
            <StyledIcon name='close' />
          </WrapperIcon>
        </UpperBar>
      ) : (
        <></>
      )}
      <Gallery>
        {showGallery
          ? galleriesNames.map((galleryName) => (
              <GalleryOpener
                key={galleryName}
                galleryName={galleryName}
                setShowGalleryHandler={setShowGallery}
                setCurrentGalleryName={setCurrentGalleryName}
                galleryTitles={galleryTitles}
              />
            ))
          : currentGalleryList.map((galleryElement) => (
              <GalleryElement
                key={galleryElement.altImgText}
                imagePath={galleryElement.imagePath}
                altImgText={galleryElement.altImgText}
              />
            ))}
      </Gallery>
    </>
  )
}

const UpperBar = styled.div`
  z-index: 2;
  position: sticky;
  top: 5rem;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  color: #ffffff;
  background: #000000aa;
`

const Text = styled.div`
  width: 100%;
  padding-left: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  @media only screen and (${Layout.tablet}) {
    padding-left: 10rem;
    font-size: 2rem;
  }
`
const WrapperIcon = styled.div`
  width: 4rem;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (${Layout.tablet}) {
    margin-right: 6rem;
  }
`

const StyledIcon = styled(Icon)`
  font-size: 2.5rem;
  color: #ffffff;
  cursor: pointer;

  @media only screen and (${Layout.laptop}) {
    font-size: 3rem;
  }
`

const Gallery = styled(AdjustingSection)`
  display: flex;
  max-width: 1920px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2rem;
  flex: 50%;
  color: #ffffff;
  padding-top: 3rem;
  padding-bottom: 8rem;
  justify-content: center;
`
