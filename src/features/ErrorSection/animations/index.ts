import { keyframes, css } from 'styled-components'

export interface AnimationProps {
  animationLength?: string
  animationSecondLength?: string
  animationDelay?: string
  startPositionX?: string[]
  startPositionY?: string[]
  endPositionX?: string[]
  endPositionY?: string[]
  duration?: string[]
  delay?: string[]
}

const moveFromLeftToRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`
const moveFromRightToLeft = keyframes`
  0% {
    transform: translateX(50%);
  }
  100% {
    transform: translateX(0%);
  }
`
const moveFromBottomToTop = keyframes`
  0% {
    transform: translate(-50%, 50%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
`

const moveDiamondFromBottomToTop = (
  startPositionX: string,
  startPositionY: string,
  endPositionX: string,
  endPositionY: string
) => keyframes`
  0% {
    transform: translate(${startPositionX}%, ${startPositionY}%);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(${endPositionX}%, ${endPositionY}%);
  }
`

const hideDroid = keyframes` 
    0% {
      transform: translate(-50%, 50%);
    }
    100% {
      transform: translate(-50%, 50%);
    }
`

const hideRhombs = keyframes`
      0% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
`

const fadeIn = keyframes`
    0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const onEntryScaleInsideRhombs = keyframes`
  0% {
    opacity: 0;
    scale: 5;
  }
  100% {
    opacity: 1;
    scale: 1;
  }`

const scaleUpAndDown = keyframes`
0% {
  scale: 1;
}
50% {
  scale: 1.05;
}
100% {
  scale: 1;
}`

export const leftAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${moveFromLeftToRight} ${animationLength}
`

export const rightAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${moveFromRightToLeft} ${animationLength}
`

export const toTopAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${moveFromBottomToTop} ${animationLength}
`

export const hideDroidAnimation = () => css`
  ${hideDroid} 2s linear 0s
`

export const hideRhombsAnimation = ({
  animationDelay = '1s',
}: AnimationProps) => css`
  ${hideRhombs} ${animationDelay} linear 0s
`

export const moveDroidToTopAnimation = () => css`
  ${moveFromBottomToTop} 1s linear 1s
`

export const showInsideRhombAnimation = ({
  animationLength = '0.25s',
  animationDelay = '1s',
}: AnimationProps) => css`
  ${onEntryScaleInsideRhombs} ${animationLength} linear ${animationDelay}
`

export const scaleUpAndDownAnimation = () => css`
  ${scaleUpAndDown} 5s infinite linear 3.5s
`

export const fadeInAnimation = ({
  animationSecondLength = '1s',
  animationDelay = '1s',
}: AnimationProps) => css`
  ${fadeIn} ${animationSecondLength} linear ${animationDelay}
`

export const fadeInAnimationTwo = ({
  animationLength = '1s',
}: AnimationProps) => css`
  ${fadeIn} ${animationLength} linear
`

export const fadeInBackGlowAnimation = ({
  animationLength = '2s',
}: AnimationProps) => css`
  ${fadeIn} ${animationLength}
`

export const moveDiamondsFromBottomToTopAnimation = ({
  duration = ['2s'],
  delay = ['2s'],
  startPositionX = ['100', '0'],
  startPositionY = ['200', '0'],
  endPositionX = ['300', '0'],
  endPositionY = ['400', '0'],
}: AnimationProps) => css`
  animation-name: ${moveDiamondFromBottomToTop(
      startPositionX[0],
      startPositionY[0],
      endPositionX[0],
      endPositionY[0]
    )},
    ${moveDiamondFromBottomToTop(
      startPositionX[1],
      startPositionY[1],
      endPositionX[1],
      endPositionY[1]
    )},
    ${moveDiamondFromBottomToTop(
      startPositionX[2],
      startPositionY[2],
      endPositionX[2],
      endPositionY[2]
    )};
  animation-duration: ${duration[0]}, ${duration[1]}, ${duration[2]};
  animation-timing-function: linear, linear, linear;
  animation-delay: ${delay[0]}, ${delay[1]}, ${delay[2]};
  animation-iteration-count: 1, 1, infinite;
`

export const lengthOfTime = {
  sec025: '0.25s',
  sec05: '0.5s',
  sec1: '1s',
  sec2: '2s',
  sec21: '2.1s',
  sec22: '2.2s',
  sec23: '2.3s',
  sec24: '2.4s',
  sec25: '2.5s',
  sec26: '2.6s',
  sec3: '3s',
  sec4: '4s',
  sec5: '5s',
}
