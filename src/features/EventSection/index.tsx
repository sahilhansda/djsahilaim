import styled from 'styled-components'
import EventList from './components/EventList'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'
import Detail from "../../assets/homepage/posters/21savage.webp";
import { Layout } from "../../styles/breakpoints";

export function EventSection() {
  return (
      <FullWidthContainer>
        <ExtendedAdjustingSection>
          <EventList />
        </ExtendedAdjustingSection>
        <ContentCenteredAdjustingSection>
          <Image src={Detail} alt={'motto'}></Image>
        </ContentCenteredAdjustingSection>
      </FullWidthContainer>
  )
}

const ExtendedAdjustingSection = styled(AdjustingSection)`
  padding-top: 3rem;
`

const ContentCenteredAdjustingSection = styled(AdjustingSection)`
  display: flex;
  align-items: center;
  justify-content: center;

`

const FullWidthContainer = styled.div`
  width: 100%;
  background: #080924;
`

const Image = styled.img`
  height: auto;
  width: 100%;
  margin: 8rem auto 0;


  @media only screen and (${Layout.laptop}) {
    display: block;
    width: 50%;
  }
`
