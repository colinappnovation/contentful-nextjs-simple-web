// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
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
          <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png"></link>
          <link rel="manifest" href="/public/site.webmanifest"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument