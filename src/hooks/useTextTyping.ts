import React, { useEffect } from 'react'

export function useTextTyping(
  delay: (ms: number) => Promise<unknown>,
  setText: React.Dispatch<React.SetStateAction<string>>,
  displayText?: string
) {
  const textToDisplay = displayText || 'Let The Music Speak!'

  useEffect(() => {
    async function typeText() {
      await delay(1200)
      let i = 0
      const interval = setInterval(async () => {
        let newLetter = textToDisplay[i++]
        setText((prev) => prev.concat(newLetter))
        if (i === textToDisplay.length) {
          clearInterval(interval)
        }
      }, 60)
    }
    typeText()
  }, [delay, setText, textToDisplay])
}
