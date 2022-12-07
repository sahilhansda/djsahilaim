import { useEffect } from 'react'

export function useChangeStateOnScroll(
  setShowState: React.Dispatch<React.SetStateAction<boolean>>,
  offsetValue: number
) {
  const controlNavbar = () =>
    window.scrollY < offsetValue ? setShowState(false) : setShowState(true)

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  })
}
