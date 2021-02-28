import { AppProps } from 'next/app';
import '../styles/tailwind.css';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { MenuShell } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    function handleEscape(event) {
      if (!isShowing) return;

      if (event.key === 'Escape') {
        setIsShowing(false);
      }
    }

    document.addEventListener('keyup', handleEscape);
    return () => document.removeEventListener('keyup', handleEscape);
  }, [isShowing]);

  return (
    <>
      <Head>
        <meta property="og:description" content="Bostadsrättförening Imatra på Helsingforsgatan, Akalla" key="description" />
        <meta property="og:keywords" content="bostadsrätt, brf, imatra, helsingforsgatan, akalla" key="keywords" />
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
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
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <MenuShell isShowing={isShowing} setIsShowing={setIsShowing.bind(this)}>
        <Component {...pageProps} />
      </MenuShell>
    </>
  );
}

export default MyApp;
