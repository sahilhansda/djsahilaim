import { useState, useEffect } from 'react'

const getHeight = () =>
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight

export function useCurrentHeight() {
  // save current window width in the state object
  let [height, setHeight] = useState(getHeight())

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
        timeoutId = setTimeout(() => setHeight(getHeight()), 150)
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

  return height
}
