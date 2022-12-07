import { useCallback, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Redirect = () => {
  const navigate = useNavigate()
  const location = useLocation()

  interface LinksToRedirectTypes {
    pl: string
    en: string
    env?: string
    dst: string
  }

  interface RedirectTypes {
    about: LinksToRedirectTypes
    contact: LinksToRedirectTypes
    gallery: LinksToRedirectTypes
  }

  const getRedirectLink = useCallback((link: string): string => {
    const linksToRedirect: RedirectTypes = {
      about: {
        pl: '/o-nas/',
        en: '/en/about-us/',
        dst: '/about',
      },
      contact: {
        pl: '/kontakt/',
        en: '/en/contact/',
        dst: '/contact',
      },
      gallery: {
        pl: '/galeria/',
        en: '/en/gallery/',
        env: '/en/virtual-gallery/',
        dst: '/gallery',
      },
    }

    const [dest] = Object.values(linksToRedirect)
      .filter((redirectType) => Object.values(redirectType).includes(link))
      .map((redirectType) => redirectType.dst)

    return dest ?? '/'
  }, [])

  useEffect(() => {
    const destination = getRedirectLink(location.pathname)
    navigate(destination)
  }, [navigate, getRedirectLink, location])

  return <></>
}

export default Redirect
