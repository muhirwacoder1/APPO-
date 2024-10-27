'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Loader2 } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc'

export function AuthTabsComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would implement the sign-up logic
    console.log('Sign up submitted')
    setIsLoading(false)
  }

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    // Here you would implement the sign-in logic
    console.log('Sign in submitted')
    setIsLoading(false)
  }

  const handleGoogleSignUp = () => {
    // Implement Google sign-up logic here
    console.log('Google sign-up initiated')
  }

  const handleGoogleSignIn = () => {
    // Implement Google sign-in logic here
    console.log('Google sign-in initiated')
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
      <Tabs defaultValue="signup" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
          <TabsTrigger value="signin">Sign In</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>
                Create a new account to get started.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignUp}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="insole-sn">Insole S/N</Label>
                  <Input id="insole-sn" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign Up
                </Button>
                <Button type="button" variant="outline" className="w-full" onClick={handleGoogleSignUp}>
                  <FcGoogle className="mr-2 h-4 w-4" />
                  Sign up with Google
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="signin">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Sign in to your account.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignIn}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="signin-email">Email</Label>
                  <Input id="signin-email" type="email" required />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="signin-password">Password</Label>
                  <Input id="signin-password" type="password" required />
                </div>
                <div className="text-right">
                  <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Sign In
                </Button>
                <Button type="button" variant="outline" className="w-full" onClick={handleGoogleSignIn}>
                  <FcGoogle className="mr-2 h-4 w-4" />
                  Sign in with Google
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
