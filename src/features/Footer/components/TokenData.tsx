import styled from 'styled-components'

interface Props {
  iconPath: string
  name: string
  price: number | string
  className?: string
}

const iconSize = 16
const iconRightMargin = 8

const TokenData = ({ iconPath, name, price, className }: Props) => {
  return (
    <TokenDataWrapper className={className || ''}>
      <CryptoSignature>
        <Icon src={iconPath} alt={name} />
        <Name> {name} </Name>
      </CryptoSignature>

      <Price> {price || '-'} PLN </Price>
    </TokenDataWrapper>
  )
}

const TokenDataWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
`

const CryptoSignature = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const Icon = styled.img`
  width: ${iconSize}px;
  height: ${iconSize}px;
  margin-right: ${iconRightMargin}px;
`

const Name = styled.div`
  margin-right: 4rem;
  font-size: 1.2rem;
`

const Price = styled.div`
  font-size: 1.2rem;
  margin: 0.5rem 0 0 ${iconSize / 2}px;
  color: #aaaaaa;
`

export default TokenData
