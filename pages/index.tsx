import Head from 'next/head'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DeadlySins from '@/components/DeadlySins'
import Programs from '@/components/Programs'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Screen Maxi - F*ck Fixing Your Life</title>
        <meta name="description" content="Ruin it and maximize your screen time. Join the ultimate digital dependency program that celebrates strategic isolation and optimized disconnection." />
        
        {/* Viewport and basic meta */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:url" content="https://screenmaxi.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Screen Maxi - F*ck Fixing Your Life" />
        <meta property="og:description" content="Ruin it and maximize your screen time. Join the ultimate digital dependency program that celebrates strategic isolation and optimized disconnection." />
        <meta property="og:image" content="https://screenmaxi.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Screen Maxi - F*ck Fixing Your Life - Maximize your screen time" />
        <meta property="og:site_name" content="Screen Maxi" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@screenmaxi" />
        <meta name="twitter:creator" content="@screenmaxi" />
        <meta name="twitter:title" content="Screen Maxi - F*ck Fixing Your Life" />
        <meta name="twitter:description" content="Ruin it and maximize your screen time. Join the ultimate digital dependency program." />
        <meta name="twitter:image" content="https://screenmaxi.com/og-image.png" />
        <meta name="twitter:image:alt" content="Screen Maxi - F*ck Fixing Your Life - Maximize your screen time" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="keywords" content="screen time, digital dependency, strategic isolation, disconnection, social media addiction, gaming, streaming, peak performance" />
        <meta name="author" content="Screen Maxi" />
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#ff4444" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://screenmaxi.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <main>
        <Header />
        <Hero />
        <DeadlySins />
        <Programs />
        <WaitlistForm />
      </main>
    </>
  )
} 