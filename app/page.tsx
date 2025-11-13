'use client'

import { useEffect } from 'react'
import Hero from '@/components/Hero'
import KeyMetrics from '@/components/KeyMetrics'
import StatisticsShowcase from '@/components/StatisticsShowcase'
import AudienceDemographics from '@/components/AudienceDemographics'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Animate progress bars on scroll
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll('.progress-bar')
          progressBars.forEach((bar: Element) => {
            const htmlBar = bar as HTMLElement
            const width = htmlBar.style.width
            htmlBar.style.width = '0%'
            setTimeout(() => {
              htmlBar.style.width = width
            }, 100)
          })
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <main className="bg-black text-white min-h-screen overflow-x-hidden">
      <Hero />
      <KeyMetrics />
      <StatisticsShowcase />
      <AudienceDemographics />
      <Services />
      <Footer />
    </main>
  )
}
