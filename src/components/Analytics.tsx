'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Helper function to check if analytics should be enabled
const isProductionEnvironment = (): boolean => {
  if (typeof window === 'undefined') return false

  const isProduction = process.env.NODE_ENV === 'production'
  const isNotLocalhost =
    !window.location.hostname.includes('localhost') &&
    !window.location.hostname.includes('127.0.0.1')

  return isProduction && isNotLocalhost
}

export function Analytics() {
  const [isProduction, setIsProduction] = useState(false)

  useEffect(() => {
    setIsProduction(isProductionEnvironment())
  }, [])

  if (!GA_MEASUREMENT_ID || !isProduction) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  )
}

// Helper function to track custom events
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (isProductionEnvironment() && typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams)
  }
}