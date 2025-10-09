import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8999361861337865"
          crossOrigin="anonymous"
        />

        {/* COAD */}
        <script
          async
          src="https://verify.coad.com/check.js?client=coad-pub-eulyjS8Waok1Y1ZE0"
          crossOrigin="anonymous"
        />
        <meta name="coad-publisher-account" content="coad-pub-k3DVTOC7jsbb9CY3V" />

        {/* Additional COAD Script */}
        <script
          async
          src="NOT_FOUND?client=coad-pub-k3DVTOC7jsbb9CY3V"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
