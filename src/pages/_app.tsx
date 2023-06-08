import '@/styles/globals.css';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import { SliderProvider } from '../provider/index';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SliderProvider>
      <ThemeProvider attribute="class">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SliderProvider>
  );
}
