import { appWithTranslation } from 'next-i18next'
import '/public/styles/globals.css'
import '/public/styles/styles.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
