import { AppProps } from 'next/app'
import '../css/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>BRF Imatra - Hemsida</title>
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel='manifest' href='/site.webmanifest' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
