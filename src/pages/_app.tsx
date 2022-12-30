import '../styles/main.css';
import { Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';
import styles from './_app.module.scss';
import { persistor, store } from '../store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

const roboto = Roboto({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <main className={`${roboto.className} ${styles.container}`}>
          <Component {...pageProps} />
        </main>
      </PersistGate>
    </Provider>
  )
}
