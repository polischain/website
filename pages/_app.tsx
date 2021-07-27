import 'tailwindcss/tailwind.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <title key="title">Polis Chain</title>

        <meta
          key="description"
          name="description"
          content="Join the payments revolution with our EVM powered network and community"
        />

        <meta name="application-name" content="Polis Chain" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Polis Chain" />

        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="# asd" />

        <meta key="twitter:card" name="twitter:card" content="app" />
        <meta key="twitter:title" name="twitter:title" content="Polis Chain" />
        <meta
          key="twitter:url"
          name="twitter:url"
          content="https://polis.tech"
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content="Join the payments revolution with our EVM powered network and community"
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content="https://polis.tech/icon-192x192.png"
        />
        <meta
          key="twitter:creator"
          name="twitter:creator"
          content="@PolisChain"
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:site_name" property="og:site_name" content="Polis Chain" />
        <meta key="og:url" property="og:url" content="https://polis.tech" />
        <meta
          key="og:image"
          property="og:image"
          content="https://polis.tech/apple-touch-icon.png"
        />
        <meta
          key="og:description"
          property="og:description"
          content="Join the payments revolution with our EVM powered network and community"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
