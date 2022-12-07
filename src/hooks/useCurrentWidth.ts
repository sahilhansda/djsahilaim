import { useState, useEffect } from 'react'

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

export function useCurrentWidth() {
  // save current window width in the state object
  let [width, setWidth] = useState(getWidth())

  // in this case useEffect will execute only once because
  // it does not have any dependencies.
  useEffect(() => {
    let isMounted = true
    // timeoutId for debounce mechanism
    let timeoutId: NodeJS.Timeout

    const resizeListener = () => {
      if (isMounted) {
        // prevent execution of previous setTimeout
        clearTimeout(timeoutId)
        // change width from the state object after 150 milliseconds
        timeoutId = setTimeout(() => setWidth(getWidth()), 150)
      }
    }
    // set resize listener
    window.addEventListener('resize', resizeListener)

    // clean up function
    return () => {
      isMounted = false
      // remove resize listener
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}
