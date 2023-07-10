import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        <meta name="description" content="This is my personal portfolio" />
      </Head>
      <body className="dark-theme">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
