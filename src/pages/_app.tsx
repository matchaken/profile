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
        {/* <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
          rel='stylesheet'
        /> */}
        <link
          href='https://fonts.googleapis.com/css2?family=Asap+Condensed:wght@400;700&display=swap'
          rel='stylesheet'
        />
        
        <title>Matcha Latte</title>
      </Head>
      <ChakraProvider theme={chakraTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default MyApp
