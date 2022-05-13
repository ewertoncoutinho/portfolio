import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en-US" prefix="og: https://ogp.me/ns#">
			<Head>
				<link
					rel="preconnect"
					href="/fonts/open-sans-600.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="true"
				/>
				<link
					rel="preconnect"
					href="/fonts/open-sans-700.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="true"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
