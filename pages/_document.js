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
          src="https://verify.coad.com/check.js?client=coad-pub-CYdNJkqa5BksOF6HW"
          crossOrigin="anonymous"
        />
        <meta name="coad-publisher-account" content="coad-pub-CYdNJkqa5BksOF6HW" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
