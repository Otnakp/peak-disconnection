import Head from 'next/head'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import WaitlistForm from '@/components/WaitlistForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Screen Maxi - Master the Art of Strategic Isolation</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <Programs />
        <WaitlistForm />
      </main>
    </>
  )
} 