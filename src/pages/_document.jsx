import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  const isProduction = process.env.NEXT_PUBLIC_ENV === "PROD";
  const shouldNoindex = !isProduction;

  return (
    <Html lang="hi">
      <Head>
        {shouldNoindex ? (
          <meta name="robots" content="noindex, nofollow" />
        ) : (
          <meta name="robots" content="max-image-preview:large" />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
