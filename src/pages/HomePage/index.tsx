import { EventSection } from '../../features/EventSection'
import { PageWrapper } from '../../layouts/PageWrapper'
import ArtistsSection from '../../features/ArtistsSection'
import PartnershipSection from '../../features/PartnershipSection'
import KnowUsBetterSection from '../../features/KnowUsBetterSection'

const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <KnowUsBetterSection />
        <EventSection />
        <PartnershipSection sectionTitle={'Listen on'} />
        <ArtistsSection />
      </PageWrapper>
    </>
  )
}

export default HomePage
