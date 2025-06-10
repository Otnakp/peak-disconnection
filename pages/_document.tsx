import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Unlock your true potential through optimized disconnection. Master the art of strategic isolation with our comprehensive programs and daily routines." />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://screenmaxi.com/" />
        <meta property="og:title" content="Screen Maxi - Master the Art of Strategic Isolation" />
        <meta property="og:description" content="Unlock your true potential through optimized disconnection. Master the art of strategic isolation with our comprehensive programs and daily routines." />
        <meta property="og:image" content="https://screenmaxi.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://screenmaxi.com/" />
        <meta property="twitter:title" content="Screen Maxi - Master the Art of Strategic Isolation" />
        <meta property="twitter:description" content="Unlock your true potential through optimized disconnection. Master the art of strategic isolation with our comprehensive programs and daily routines." />
        <meta property="twitter:image" content="https://screenmaxi.com/og-image.png" />
        
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 