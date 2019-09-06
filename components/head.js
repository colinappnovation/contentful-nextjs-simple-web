import Head from 'next/head'

function HeadMeta() {
  return (
    <div>
      <Head>
        <title>INSIGHTS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
        <meta name="description" content="A Next.js demo connecting and rendering from Contentful" />
      </Head>
    </div>
  )
}

export default HeadMeta