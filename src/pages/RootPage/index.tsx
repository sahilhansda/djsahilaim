import React from 'react'
import NavBar from '../../layouts/NavBar'
import { GlobalStyle } from '../../styles/global-styles'
import { ScrollRestoration, useOutlet } from 'react-router-dom'
import Footer from '../../features/Footer'
import NewEntrySection from "../../features/NewEntrySection";
const HomePage = React.lazy(() => import('../../pages/HomePage'))

const suspenseComponent = (component: React.ReactNode) => {
  return <React.Suspense fallback='Loading...'>{component}</React.Suspense>
}

const RootPage = () => {
  const outlet = useOutlet()

  return (
    <>
      <NavBar />
      <div id={'entryPageStartHook'}></div>
      <NewEntrySection />
      <div id={'entryPageEndHook'}></div>
      {outlet || suspenseComponent(<HomePage />)}
      <Footer />
      <GlobalStyle />
      <ScrollRestoration></ScrollRestoration>
    </>
  )
}

export default RootPage
