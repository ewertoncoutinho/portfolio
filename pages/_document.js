import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
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
        <body tabIndex="-1">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument