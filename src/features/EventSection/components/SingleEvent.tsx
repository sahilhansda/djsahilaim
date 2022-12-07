import styled, { css } from 'styled-components'
import { TempEventButton } from '../../../layouts/Button/Button'
import { Event } from './Models/Event'
import { Layout } from '../../../styles/breakpoints'
import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { UpcomingEventType } from './Models/UpcomingEventType'

interface Props {
  imgSrc: string
  alt: string
  event: Event
}

const SingleEvent = ({ imgSrc, alt, event }: Props) => {
  const upcoming = event?.upcomingEvent?.upcoming
  const upcomingMessage = event?.upcomingEvent?.upcomingMessage

  const eventRef = useRef(null)
  // const navigate = useNavigate()
  // const destination = '/event-page'

  // const navigateToEventHandler = () => {
  // navigate(destination, { state: { event } })

  // setTimeout(() => {
  // const element = document.getElementById('entryPageEndHook') as HTMLElement
  // element.scrollIntoView({
  // behavior: 'smooth',
  // block: 'start',
  // inline: 'start',
  // })
  // }, 300)
  // }

  useEffect(() => {
    const el = eventRef.current
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el,
        },
      }
    )
  }, [])

  return (
    <Container
      upcoming={upcoming || false}
      upcomingMessage={upcomingMessage || ''}
      ref={eventRef}
    >
      <Poster src={imgSrc} alt={alt} loading='lazy' />
      {/* <ExtendedButton onClick={navigateToEventHandler}> */}
      <ExtendedButton>Play</ExtendedButton>
    </Container>
  )
}

const upcomingEventStyle = ({ upcomingMessage = '' }: UpcomingEventType) => css`
  &:before {
    content: '${upcomingMessage}';
    position: absolute;
    top: -5%;
    left: 0;
    color: #FF00AA;

    @media only screen and (${Layout.tablet}){
      top: -7%;
    }
  }
`

const Container = styled.div<UpcomingEventType>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
  ${({ upcoming }) => (upcoming ? upcomingEventStyle : '')}
`

const Poster = styled.img`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  border: 1px solid #ffffff;

  @media only screen and (${Layout.tablet}) {
    width: auto;
    height: 350px;
  }
`

const ExtendedButton = styled(TempEventButton)`
  width: 100%;
  height: 80px;
`

export default SingleEvent
