import Head from 'next/head'
export default function Header({
	title = 'Ewerton Coutinho',
	description,
	url,
}) {
	return (
		<Head>
			<meta charSet="UTF-8" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta name="theme-color" content="#000000" />
			<link rel="icon" href="/favicon.ico" />
			<meta name="googlebot" content="notranslate" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={title} />
			<meta property="og:url" content={url} />
			<meta property="og:image" content={`${url}/open_graph_logo.png`} />
			<meta property="og:type" content="website" />
		</Head>
	)
}
