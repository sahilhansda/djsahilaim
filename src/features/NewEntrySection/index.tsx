import styled from 'styled-components'
import { useState } from 'react'
import background from '../../assets/homepage/newEntrySection/djsahilaimherobg-min.webp'
import djsahilaimhero from '../../assets/homepage/newEntrySection/djsahilaimhero-min.webp'

import { Layout } from '../../styles/breakpoints'

import { useTextTyping } from '../../hooks/useTextTyping'
import { delay } from '../../utils/DelayFunction'
import ParticlesBackground from '../../layouts/Particles'
import { customOptionsFour } from '../../layouts/Particles/config/customOptionsFour'
import { AdjustingSection } from '../../layouts/AdjustingSection/AdjustingSection'

const NewEntrySection = () => {
  const [text, setText] = useState<string>('')

  useTextTyping(delay, setText)

  return (
    <>
      <Background />
      <ParticlesBackground
        width='100%'
        height='100%'
        options={customOptionsFour}
        style={{ position: 'absolute', zIndex: '-1' }}
        id={'NewEntrySectionParticles'}
      />
      <Samanta />
      <Wrapper>
        <ExtendedAdjustingSection>
          <Headline> {text} </Headline>
        </ExtendedAdjustingSection>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
  background: transparent;
  z-index: 10;
`

const ExtendedAdjustingSection = styled(AdjustingSection)`
  color: #ffffff;
  flex-direction: column;
  position: relative;
  display: flex;
  height: 100%;
  box-sizing: border-box;
`

const Background = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-image: url('${background}');
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: -2;
  background-attachment: fixed;
  opacity: 0.3;
`

const Samanta = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('${djsahilaimhero}');
  background-size: cover;
  background-position: center;
  object-fit: cover;
  position: absolute;
  z-index: 5;
  background-attachment: fixed;
`

const Headline = styled.h1`
  margin-top: auto;
  color: #ffffff;
  box-sizing: border-box;
  padding: 0 0 3rem 0;
  font-size: 1.7rem;
  text-shadow: 0 0 6px #000000, 0 0 12px #000000, 0 0 18px #000000;
  display: flex;
  justify-content: flex-start;

  @media only screen and (${Layout.tablet}) {
    padding: 0 3rem;
    font-size: 4rem;
  }

  @media only screen and (${Layout.laptop}) {
    padding: 0 9rem;
  }
`

export default NewEntrySection
