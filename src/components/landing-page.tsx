'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 overflow-hidden">
      {/* Left side - Image */}
      <div className="w-full lg:w-1/2 h-[40vh] lg:h-screen relative">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/761539131118528029-removebg-nrLA8ntLI91h4CYR51fvn6gZVKBoHp.png"
          alt="Healthcare professional holding APPO insole"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          priority
        />
      </div>

      {/* Right side - Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start p-6 sm:p-8 lg:p-12 space-y-6 lg:space-y-8">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight text-center lg:text-left animate-fade-in-down">
          WELCOME TO
          <br />
          <span className="text-yellow-300">APPO</span>
        </h1>
        <div className="w-24 h-1 bg-white rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-green-300 to-blue-300 animate-shimmer"></div>
        </div>
        <p className="text-white text-xl sm:text-2xl lg:text-3xl mt-4 leading-tight text-center lg:text-left animate-fade-in-up">
          Where Technology Defines
          <br />
          Your Feet
        </p>
        <Button className="bg-white text-blue-600 hover:bg-blue-100 text-base sm:text-lg px-6 sm:px-8 py-2 sm:py-3 rounded-full transform transition duration-300 hover:scale-105 shadow-lg">
          Get Started
        </Button>
      </div>
    </div>
  )
}