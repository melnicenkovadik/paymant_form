import { Toaster } from 'react-hot-toast'
import App from 'next/app'
import { appWithTranslation, type UserConfig } from 'next-i18next'

import 'styles/global.css'

import { AppProvider } from '../context/AppProvider'
import nextI18NextConfig from '../next-i18next.config.js'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Toaster
        position='top-right'
        reverseOrder={false}
        containerStyle={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          zIndex: 99999999,
        }}
      />
      <Component {...pageProps} />
    </AppProvider>
  )
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return {
    pageProps: {
      ...appProps.pageProps,
    },
  }
}

export default appWithTranslation(MyApp, nextI18NextConfig as UserConfig)
