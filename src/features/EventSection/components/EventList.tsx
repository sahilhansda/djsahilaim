import styled from 'styled-components'
import SingleEvent from './SingleEvent'
import poster2 from '../../../assets/homepage/posters/PierwszaAukjaTokenow.webp'
import poster2hq from '../../../assets/homepage/posters/1_9_20.jpg'
import poster3 from '../../../assets/homepage/posters/plakat2AukcjaTokenow.webp'
import poster4 from '../../../assets/homepage/posters/SummerArtBreak-min.jpg'
import poster5 from '../../../assets/homepage/posters/SummerArtBreak2.webp'
import poster6 from '../../../assets/homepage/posters/art1.webp'
import { EventType } from './Models/EventType'

const EventList = () => {
  const artwork1 = 'https://i.scdn.co/image/ab67616d00001e0298abca868a96b9f21cce5dee'
  const content = `Lorem Ipsum is simply dummy text of .`

  const events: EventType[] = [
    {
      alt: 'summer-art-break-2-poster',
      imgSrc: artwork1,
      event: {
        title: 'summer art break 2',
        imgSrc: artwork1,
        alt: 'summer-art-break-2-poster',
        contentText: `1 ${content}`,
      },
    },
  ]

  return (
    <EventListContainer>
      {events.map(({ alt, imgSrc, event }) => (
        <SingleEvent key={alt} alt={alt} imgSrc={imgSrc} event={event} />
      ))}
    </EventListContainer>
  )
}

const EventListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4rem 2rem;
`

export default EventList
