import { UpcomingEventType } from './UpcomingEventType'

export interface Event {
  title: string
  imgSrc: string
  alt: string
  contentText: string
  upcomingEvent?: UpcomingEventType
}
