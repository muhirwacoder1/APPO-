'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2 } from 'lucide-react'

export function OtpVerificationComponent() {
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

    if (element.nextSibling && element.value !== '') {
      (element.nextSibling as HTMLElement).focus()
    }
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would implement the OTP verification logic
    console.log('OTP submitted:', otp.join(''))
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto p-4">
      <Image
        src="/placeholder.svg?height=100&width=100"
        alt="Appo Logo"
        width={100}
        height={100}
        className="mb-4"
      />
      <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
        At APPO we transform life with technology
      </h2>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>OTP Verification</CardTitle>
          <CardDescription>
            Enter the 6-digit code sent to your email
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="flex justify-center space-x-2">
              {otp.map((data, index) => (
                <Input
                  key={index}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-12 h-12 text-center text-2xl"
                  autoFocus={index === 0}
                />
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading || otp.some(digit => digit === '')}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Verify OTP
            </Button>
            <Button variant="link" className="text-blue-600" onClick={() => console.log('Resend OTP')}>
              Resend OTP
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}