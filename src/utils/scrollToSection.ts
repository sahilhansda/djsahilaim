export const scrollToSection = (
  scrollHook: 'entryPageStartHook' | 'entryPageEndHook'
): void => {
  setTimeout(() => {
    const element = document.getElementById(scrollHook) as HTMLElement
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  }, 300)
}
