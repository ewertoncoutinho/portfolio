import Script from 'next/script'
import { appWithTranslation } from 'next-i18next'
import '/public/styles/globals.css'
import '/public/styles/styles.css'
import Analytics from '../src/components/Analytics'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Analytics />
        </>
    )
}

export default appWithTranslation(MyApp)
