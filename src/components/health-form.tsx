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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from 'lucide-react'

export function HealthFormComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would implement the form submission logic
    console.log('Form submitted')
    setIsLoading(false)
  }

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-4">
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
          <CardTitle>Health Information Form</CardTitle>
          <CardDescription>
            Please provide your health information to help us serve you better.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="diabetesType">Type of Diabetes</Label>
              <Select>
                <SelectTrigger id="diabetesType">
                  <SelectValue placeholder="Select diabetes type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="type1">Type 1 Diabetes</SelectItem>
                  <SelectItem value="type2">Type 2 Diabetes</SelectItem>
                  <SelectItem value="gestational">Gestational Diabetes</SelectItem>
                  <SelectItem value="prediabetes">Prediabetes</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" placeholder="Enter your full address" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input id="age" type="number" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">Weight (kg)</Label>
                <Input id="weight" type="number" step="0.1" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Submit
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}