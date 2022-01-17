import '../styles/tailwind.css'

import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '../components/Layout/Layout'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>The Good Pizza Club </title>
        <link rel='icon' href='/pizzaClubLogo.svg' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
export default MyApp
