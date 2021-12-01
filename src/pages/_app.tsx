import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { AppProps } from 'next/app'


function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App