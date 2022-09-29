import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import '../styles/global.scss';

import { Provider as NextAuthProvider } from 'next-auth/client';


const initialOptions = {
  "client-id": "AdWKvXAzRjzLDCimCnp0GzJJ9JxsBSHyLR79Klz4ufXjMkDJwAA4j5P9RuOx3FEXs2Ra7JM5o32whjTT",
  currency: "BRL",
  intent: "capture",
};


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session} >
      <PayPalScriptProvider options={initialOptions}>
        <Header/>
        <Component {...pageProps} />
      </PayPalScriptProvider>
    </NextAuthProvider>
  )
}

export default MyApp
