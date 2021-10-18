import Layout from '@components/Layout/Layout'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import 'styles/index.scss'
import { CartProvider } from 'contexts/cartAvosContext'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  'pk_test_51JeyjHGx8A0zhUcZE62tvNKsK2Ycir5i6cErCK9bWiUGUqxHoMir0X7Hx18sONfp4F9QZWjxPjC7hxOYMH8Oud5q00Jzbmnh63'
)

//MyApp is useful to inject Providers.
//Layouts
//Additional props.
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Elements stripe={stripePromise}>
      <CartProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </Elements>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
