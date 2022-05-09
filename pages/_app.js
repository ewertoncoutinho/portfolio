import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import '/public/styles/globals.css'
import '/public/styles/styles.css'
import * as gtag from '../lib/gtag'
import Analytics from '../src/components/Analytics'

function MyApp({ Component, pageProps }) {
	const router = useRouter()
	useEffect(() => {
		const handleRouteChange = (url) => {
			gtag.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		router.events.on('hashChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
			router.events.off('hashChangeComplete', handleRouteChange)
		}
	}, [router.events])
	return (
		<>
			<Component {...pageProps} />
			<Analytics />
		</>
	)
}

export default appWithTranslation(MyApp)
