import styled from 'styled-components'
import { useState } from 'react'
import background from '../../assets/entry/background.svg'
import leftMiddleShape1 from '../../assets/entry/left_middle_shape_1.svg'
import leftMiddleShape2 from '../../assets/entry/left_middle_shape_2.svg'
import rightMiddleShape1 from '../../assets/entry/right_middle_shape1.svg'
import rightMiddleShape2 from '../../assets/entry/right_middle_shape2.svg'
import shape1 from '../../assets/entry/shape1.svg'
import shape2 from '../../assets/entry/shape2.svg'
import shape3 from '../../assets/entry/shape3.svg'
import shape4 from '../../assets/entry/shape4.svg'
import shape5 from '../../assets/entry/shape5.svg'
import shape6 from '../../assets/entry/shape6.svg'
import mainMiddleShape from '../../assets/entry/main_middle_shape.svg'
import droid from '../../assets/entry/droid2.png'
import glow1 from '../../assets/entry/glow1.png'
import glow2 from '../../assets/entry/glow2.png'
import glow3 from '../../assets/entry/glow3.png'
import { Layout } from '../../styles/breakpoints'
import {
  AnimationProps,
  toTopAnimation,
  hideDroidAnimation,
  moveDroidToTopAnimation,
  hideRhombsAnimation,
  lengthOfTime,
  fadeInBackGlowAnimation,
  showInsideRhombAnimation,
  moveDiamondsFromBottomToTopAnimation,
} from './animations'
import { useTextTyping } from '../../hooks/useTextTyping'
import { delay } from '../../utils/DelayFunction'
import { useLocation } from 'react-router-dom'

const ErrorSection = () => {
  const location = useLocation()
  const errorMessage = `${location.pathname.slice(1, 11)} nie istnieje (404)`
  const [text, setText] = useState<string>('')

  useTextTyping(delay, setText, errorMessage)

  const {
    sec025,
    sec2,
    sec21,
    sec22,
    sec23,
    sec24,
    sec25,
    sec26,
  } = lengthOfTime

  return (
    <>
      <Background src={background} alt='background' />
      <Wrapper>
        <Content>
          <OutsideLayerLeft>
            <LeftTopOutside
              src={shape1}
              alt='left_top_outside'
              startPositionX={['-2740', '-2740', '-2740']}
              startPositionY={['1176', '1176', '1176']}
              endPositionX={['-2740', '-2740', '-2740']}
              endPositionY={['-1281', '-1281', '-1281']}
              duration={['3s', '5s', '2s']}
              delay={['0s', '3s', '8s']}
            />
            <LeftMiddleOutside
              src={shape6}
              alt='left_middle_outside'
              startPositionX={['-1390', '-1390', '-1390']}
              startPositionY={['786', '786', '786']}
              endPositionX={['-1390', '-1390', '-1390']}
              endPositionY={['-880', '-880', '-880']}
              duration={['4s', '6s', '3s']}
              delay={['0s', '4s', '10s']}
            />
            <LeftBottomOutside
              src={shape3}
              alt='left_bottom_outside'
              startPositionX={['-940', '-940', '-940']}
              startPositionY={['785', '785', '785']}
              endPositionX={['-940', '-940', '-940']}
              endPositionY={['-880', '-880', '-880']}
              duration={['3s', '3s', '5s']}
              delay={['0s', '3s', '6s']}
            />
            <LeftTopOutside
              src={shape1}
              alt='left_top_outside'
              startPositionX={['-540', '-540', '-540']}
              startPositionY={['1176', '1176', '1176']}
              endPositionX={['-540', '-540', '-540']}
              endPositionY={['-1281', '-1281', '-1281']}
              duration={['3s', '2.5s', '2s']}
              delay={['0s', '3s', '5.5s']}
            />
            <LeftMiddleOutside
              src={shape6}
              alt='left_middle_outside'
              startPositionX={['-40', '-40', '-40']}
              startPositionY={['786', '786', '786']}
              endPositionX={['-40', '-40', '-40']}
              endPositionY={['-880', '-880', '-880']}
              duration={['4s', '5s', '3s']}
              delay={['0s', '4s', '9s']}
            />
            <LeftBottomOutside
              src={shape3}
              alt='left_bottom_outside'
              startPositionX={['240', '240', '240']}
              startPositionY={['785', '785', '785']}
              endPositionX={['240', '240', '240']}
              endPositionY={['-880', '-880', '-880']}
              duration={['3s', '3.5s', '5s']}
              delay={['0s', '3s', '6.5s']}
            />
          </OutsideLayerLeft>

          <MainDroidLayer>
            <BehindMainLayer>
              <RightMiddleInside
                src={rightMiddleShape2}
                alt='right_middle_inside'
                animationLength={sec025}
                animationDelay={sec25}
              />
              <RightTopInside
                src={rightMiddleShape1}
                alt='right_top_inside'
                animationLength={sec025}
                animationDelay={sec23}
              />
              <LeftTopInside
                src={rightMiddleShape1}
                alt='left_top_inside'
                animationLength={sec025}
                animationDelay={sec21}
              />
            </BehindMainLayer>

            <GlowLayer animationLength={sec2}>
              <Glow src={glow1} alt='glow1' />
              <Glow src={glow2} alt='glow2' />
              <Glow src={glow3} alt='glow3' />
            </GlowLayer>

            <MainMiddleShape
              animationLength={sec2}
              src={mainMiddleShape}
              alt='main_middle_shape'
            />

            <MiddleLayer>
              <DroidMask>
                <Droid src={droid} alt='droid' />
              </DroidMask>
              <TextWrapper>
                <Headline>{`${text}`}</Headline>
              </TextWrapper>
            </MiddleLayer>

            <OverlappingDroidLayer>
              <LeftMiddleInside
                src={leftMiddleShape1}
                alt='left_middle_inside'
                animationLength={sec025}
                animationDelay={sec26}
              />
              <LeftBottomInside
                src={leftMiddleShape2}
                alt='left_bottom_inside'
                animationLength={sec025}
                animationDelay={sec24}
              />
              <RightBottomInside
                src={rightMiddleShape1}
                alt='right_bottom_inside'
                animationLength={sec025}
                animationDelay={sec22}
              />
            </OverlappingDroidLayer>
          </MainDroidLayer>

          <OutsideLayerRight>
            <RightTopOutside
              src={shape2}
              alt='right_top_outside'
              startPositionX={['940', '940', '940']}
              startPositionY={['887', '887', '887']}
              endPositionX={['940', '940', '940']}
              endPositionY={['-982', '-982', '-982']}
              duration={['3s', '4s', '2s']}
              delay={['0s', '3s', '7s']}
            />
            <RightMiddleOutside
              src={shape5}
              alt='right_middle_outside'
              startPositionX={['1140', '1140', '1140']}
              startPositionY={['707', '707', '707']}
              endPositionX={['1140', '1140', '1140']}
              endPositionY={['-800', '-800', '-800']}
              duration={['3s', '2s', '3s']}
              delay={['0s', '3s', '5s']}
            />
            <RightBottomOutside
              src={shape4}
              alt='right_bottom_outside'
              startPositionX={['925', '925', '925']}
              startPositionY={['414', '414', '414']}
              endPositionX={['925', '925', '925']}
              endPositionY={['-516', '-516', '-516']}
              duration={['2s', '4s', '4s']}
              delay={['0s', '2s', '6s']}
            />
          </OutsideLayerRight>
        </Content>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section<AnimationProps>`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-x: hidden;
  overflow-y: hidden;
`
const Background = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: absolute;
`
const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`
const OutsideLayerLeft = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0%;
`

const LeftTopOutside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-1040%, -705%);
  width: 30px;
  ${moveDiamondsFromBottomToTopAnimation};
`

const LeftMiddleOutside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-1140%, 15%);
  width: 45px;
  ${moveDiamondsFromBottomToTopAnimation};
`

const LeftBottomOutside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 45px;
  transform: translate(-940%, 560%);
  ${moveDiamondsFromBottomToTopAnimation};
`

const MainDroidLayer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const BehindMainLayer = styled.div<AnimationProps>`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
`

const RightMiddleInside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(240%, -50%);
  width: 85px;
  animation: ${hideRhombsAnimation}, ${showInsideRhombAnimation};
`

const RightTopInside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(180%, -115%);
  width: 85px;
  animation: ${hideRhombsAnimation}, ${showInsideRhombAnimation};
`

const LeftTopInside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-280%, -115%);
  width: 85px;
  animation: ${hideRhombsAnimation}, ${showInsideRhombAnimation};
`

const GlowLayer = styled.div<AnimationProps>`
  animation: ${fadeInBackGlowAnimation};
`

const Glow = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 650px;
`

const MainMiddleShape = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  animation: ${toTopAnimation};
`

const MiddleLayer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 713px;
`

const DroidMask = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 713px;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 50%);
`
const Droid = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -47%);
  transform-origin: top center;
  width: 390px;
  animation: ${hideDroidAnimation}, ${moveDroidToTopAnimation};
  transform-origin: 0 30%;
`

const OverlappingDroidLayer = styled.div<AnimationProps>`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
`

const LeftMiddleInside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-600%, -50%);
  width: 46px;
  animation: ${hideRhombsAnimation}, ${showInsideRhombAnimation};
`

const LeftBottomInside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-230%, 60%);
  width: 85px;
  animation: ${hideRhombsAnimation}, ${showInsideRhombAnimation};
`

const RightBottomInside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(130%, 60%);
  width: 85px;
  animation: ${hideRhombsAnimation}, ${showInsideRhombAnimation};
`

const OutsideLayerRight = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  right: 0%;
`

const RightTopOutside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(940%, -500%);
  width: 40px;
  ${moveDiamondsFromBottomToTopAnimation};
`
const RightMiddleOutside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(1040%, 50%);
  width: 50px;
  ${moveDiamondsFromBottomToTopAnimation};
`
const RightBottomOutside = styled.img<AnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(625%, 295%);
  width: 85px;
  ${moveDiamondsFromBottomToTopAnimation};
`

const TextWrapper = styled.div`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 0%);
  text-align: center;
  /* @media only screen and (${Layout.tablet}) {
    bottom: 60%;
  } */
`

const Headline = styled.h1`
  z-index: 10;
  display: flex;
  justify-content: center;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 2rem;
  margin-block-start: 0em;
  margin-block-end: 0em;

  @media only screen and (${Layout.tablet}) {
    font-size: 3rem;
  }
`

export default ErrorSection
