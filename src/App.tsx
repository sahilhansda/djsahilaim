import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import 'material-icons/iconfont/material-icons.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)

const AboutPage = React.lazy(() => import('./pages/AboutUsPage'))
const EventPage = React.lazy(() => import('./pages/EventPage'))
const RootPage = React.lazy(() => import('./pages/RootPage'))
const ContactPage = React.lazy(() => import('./pages/ContactPage'))
const GalleryPage = React.lazy(() => import('./pages/GalleryPage'))
const Redirect = React.lazy(() => import('./pages/Redirect'))

const suspenseComponent = (component: React.ReactNode) => {
  return <React.Suspense fallback=''>{component}</React.Suspense>
}

const router = createHashRouter([
  // createHashRouter on GH Pages
  {
    path: '/',
    element: suspenseComponent(<RootPage />),
    children: [
      {
        path: 'about',
        element: suspenseComponent(<AboutPage />),
      },
      {
        path: 'contact',
        element: suspenseComponent(<ContactPage />),
      },
      {
        path: 'event-page',
        element: suspenseComponent(<EventPage />),
      },
      {
        path: 'gallery',
        element: suspenseComponent(<GalleryPage />),
      },
      {
        path: '*',
        element: suspenseComponent(<Redirect />),
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
