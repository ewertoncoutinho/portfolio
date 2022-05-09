import Head from 'next/head'
export default function Header({ title = 'Ewerton Coutinho', discription }) {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<title>{title}</title>
			<meta name="description" content={discription} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="theme-color" content="#000000" />
			<link rel="icon" href="/favicon.ico" />
			<meta name="googlebot" content="notranslate" />
		</Head>
	)
}
