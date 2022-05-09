import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en-US" className="notranslate" translate="no">
			<Head>
				<link
					rel="preload"
					href="/fonts/open-sans-600.woff2"
					as="font"
					crossOrigin=""
					type="font/woff2"
				/>
				<link
					rel="preload"
					href="/fonts/open-sans-700.woff2"
					as="font"
					crossOrigin=""
					type="font/woff2"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
