import { AppProps } from 'next/app';
import '../styles/tailwind.css';
import Head from 'next/head';
import { LightSidebar } from '../components/MenuShell';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; frame-src https://youtu.be https://www.youtube.com; script-src 'self' 'unsafe-eval'; connect-src 'self' ws://localhost:3000/_next/webpack-hmr; img-src 'self'; style-src 'self' 'unsafe-inline' https://*.googleapis.com https://rsms.me;base-uri 'self';form-action 'self';font-src https://*.googleapis.com https://*.gstatic.com/ https://rsms.me"
        />
        <meta
          property="og:description"
          content="Bostadsrättförening Imatra på Helsingforsgatan, Akalla"
          key="description"
        />
        <meta
          property="og:keywords"
          content="bostadsrätt, brf, imatra, helsingforsgatan, akalla"
          key="keywords"
        />
        <title>BRF Imatra - Hemsida</title>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#FFFFFF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BRF Imatra" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <LightSidebar>
        <Component {...pageProps} />
      </LightSidebar>
    </>
  );
}

export default MyApp;
