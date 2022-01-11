import '../styles/tailwind.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Good Pizza Club </title>
        <link rel='icon' href='/pizzaClubLogo.svg' />
      </Head>

      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}

export default MyApp
