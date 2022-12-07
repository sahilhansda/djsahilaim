import styled from 'styled-components'

interface Props {
  path: string
  redirectionLink: string
  altText: string
}

const LinkIcon = ({ path, redirectionLink, altText }: Props) => {
  return (
    <a href={redirectionLink} target={'_blank'} rel='noopener noreferrer'>
      <Icon src={path} alt={altText} />
    </a>
  )
}

const Icon = styled.img`
  width: 40px;
  height: 40px;
  transition: all 0.3s ease-in-out;
  margin-right: 3rem;

  &:hover {
    transform: translateY(-8px);
  }
`

export default LinkIcon
