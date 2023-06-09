import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>MA | Portfolio</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
