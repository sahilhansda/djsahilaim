import axios from 'axios'
import { useState, useEffect } from 'react'
import { Header3 } from '../layouts/Header3'
import styled from 'styled-components'
import TokenData from './TokenData'

import BitcoinLogo from '../../../assets/tokens/btc.png'
import EthereumLogo from '../../../assets/tokens/eth.png'
import CardanoLogo from '../../../assets/tokens/ada.png'
import DogeLogo from '../../../assets/tokens/doge.png'

interface TokenPrices {
  bitcoin: string
  ethereum: string
  cardano: string
  doge: string
}

interface TokenResponse {
  market_data: {
    current_price: {
      pln: number
    }
  }
}

const plnFormatter = new Intl.NumberFormat('pl-PL', {
  style: 'currency',
  currency: 'PLN',
})

const formatToPlnWithoutUnits = (text: number): string => {
  return plnFormatter.format(text).slice(0, -3)
}

const CryptoPrices = () => {
  const initPriceState = {
    bitcoin: '-',
    ethereum: '-',
    cardano: '-',
    doge: '-',
  }
  const [prices, setPrices] = useState<TokenPrices>(initPriceState)

  useEffect(() => {
    const fetchData = async () => {
      const [btcRes, ethRes, adaRes, dogeRes] = await Promise.all([
        axios.get<TokenResponse>(
          `https://api.coingecko.com/api/v3/coins/bitcoin`
        ),
        axios.get<TokenResponse>(
          `https://api.coingecko.com/api/v3/coins/ethereum`
        ),
        axios.get<TokenResponse>(
          `https://api.coingecko.com/api/v3/coins/cardano`
        ),
        axios.get<TokenResponse>(
          `https://api.coingecko.com/api/v3/coins/dogecoin`
        ),
      ])

      setPrices({
        bitcoin: formatToPlnWithoutUnits(
          btcRes.data.market_data.current_price.pln
        ),
        ethereum: formatToPlnWithoutUnits(
          ethRes.data.market_data.current_price.pln
        ),
        cardano: formatToPlnWithoutUnits(
          adaRes.data.market_data.current_price.pln
        ),
        doge: formatToPlnWithoutUnits(
          dogeRes.data.market_data.current_price.pln
        ),
      } as TokenPrices)
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Header3> Aktualne ceny kryptowalut: </Header3>
      <TokenDataStyled
        iconPath={BitcoinLogo}
        name={'Bitcoin (BTC)'}
        price={prices?.bitcoin}
      />
      <TokenDataStyled
        iconPath={EthereumLogo}
        name={'Ethereum (ETH)'}
        price={prices?.ethereum}
      />
      <TokenDataStyled
        iconPath={CardanoLogo}
        name={'Cardano (ADA)'}
        price={prices?.cardano}
      />
      <TokenDataStyled
        iconPath={DogeLogo}
        name={'Dogecoin (doge)'}
        price={prices?.doge}
      />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: #ffffff;
  margin-bottom: 4rem;
`

const TokenDataStyled = styled(TokenData)`
  margin-bottom: 1rem;
`

export default CryptoPrices
