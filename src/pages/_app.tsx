import Head from 'next/head'
import '../styles/globals.css'
import '../styles/main.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import { chakraTheme } from '@/config/constraint'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/icons/icon.png' type='image/png' />
        <title>Matcha Latte</title>
      </Head>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
