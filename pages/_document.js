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
		<script async src='https://cdn.coad.be3pi.com/js/coad-analytics.js?client=019adf94-5dd6-7160-85de-3fcd975955e2' crossorigin='anonymous'></script>
		<script async src='https://cdn.coad.be3pi.com/js/coad-analytics.js?client=019bb7d4-b189-7359-b0c3-d450ebf753b3' crossorigin='anonymous'></script>
		<meta name="coad-publisher-account" content="coad-pub-g7larehvjvAfhf5kG"></meta>
		<meta name="coad-publisher-account" content="coad-pub-YE5Bf23wGpwgy2OFk"></meta>
		<meta name="coad-publisher-account" content="coad-pub-YE5Bf23wGpwgy2OFk"></meta>

        {/* Additional COAD Script */}
        <script
          async
          src="NOT_FOUND?client=coad-pub-k3DVTOC7jsbb9CY3V"
          crossOrigin="anonymous"
        />
		<script async src="NOT_FOUND?client=coad-pub-g7larehvjvAfhf5kG"  crossorigin="anonymous"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
