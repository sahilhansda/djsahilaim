import styled from 'styled-components'
import { Header3 } from '../layouts/Header3'
import LinkIcon from './LinkIcon'
import { MediaIcon } from '../models/MediaIcon'

interface Props {
  headerText: string
  media: MediaIcon[]
}

const SocialMedia = ({ headerText, media }: Props) => {
  return (
    <Container>
      <Header3> {headerText} </Header3>
      <LinkIconsWrapper>
        {media.map(({ path, redirectionLink, altText }, i) => (
          <LinkIcon
            key={i}
            path={path}
            redirectionLink={redirectionLink}
            altText={altText}
          />
        ))}
      </LinkIconsWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #ffffff;
  margin-bottom: 2.5rem;
`

const LinkIconsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`

export default SocialMedia
