import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import * as Fathom from 'fathom-client'
import Providers from '~/components/Providers'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load(process.env.SPECFM_FATHOM_SITE_ID, {
      includedDomains: ['spec.fm'],
      url: process.env.SPECFM_FATHOM_CUSTOM_URL,
      excludedDomains: ['localhost,now.sh,vercel.app'],
    })

    function onRouteChangeComplete() {
      Fathom.trackPageview()
    }
    // Record a pageview when route changes
    router.events.on('routeChangeComplete', onRouteChangeComplete)

    // Unassign event listener
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [])

  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
