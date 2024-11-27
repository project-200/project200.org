import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Globe, Users, Leaf, Droplet, Heart, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Globe className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Project 200</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#goals"
          >
            Our Goals
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#join-us"
          >
            Join Us
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#donate"
          >
            Donate
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 border-b border-gray-200">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Empowering Change for a Sustainable Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Project 200 is dedicated to achieving the UN Sustainable
                  Development Goals. Join us in creating a better world for all.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline">Learn More</Button>
                <Button>Donate</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="goals"
          className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">No Poverty</h3>
                <p className="text-gray-600">
                  Working to end poverty in all its forms everywhere.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">Climate Action</h3>
                <p className="text-gray-600">
                  Taking urgent action to combat climate change and its impacts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Droplet className="h-12 w-12 mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Clean Water and Sanitation
                </h3>
                <p className="text-gray-600">
                  Ensuring availability and sustainable management of water for
                  all.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <Image
                alt="Project 200 team working"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Mission
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Project 200, we believe in the power of collective action.
                  Our mission is to accelerate progress towards the UN
                  Sustainable Development Goals by 2030. Through innovative
                  projects, partnerships, and community engagement, we're
                  working to create a more equitable and sustainable world for
                  all.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="join-us"
          className="w-full py-12 md:py-24 lg:py-32 border-b border-gray-200"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <UserPlus className="h-12 w-12 mb-4" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Join Our Team
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                We're always looking for passionate individuals to join our
                cause. Whether you're interested in volunteering, internships,
                or career opportunities, there's a place for you at Project 200.
              </p>
              <Button variant="outline">View Opportunities</Button>
            </div>
          </div>
        </section>
        <section
          id="donate"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Heart className="h-12 w-12 mb-4" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Support Our Cause
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                Your donation can make a real difference. Help us continue our
                work towards achieving the UN Sustainable Development Goals.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <Button variant="outline">$10</Button>
                <Button variant="outline">$50</Button>
                <Button variant="outline">$100</Button>
              </div>
              <Button className="mt-4">Custom Amount</Button>
            </div>
          </div>
        </section>
        <section
          id="newsletter"
          className="w-full py-12 md:py-24 lg:py-32 border-t border-gray-200"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stay Informed
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Sign up for our newsletter to receive updates on our projects
                  and how you can contribute.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-600">
                  By subscribing, you agree to our Terms of Service and Privacy
                  Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">
          © 2024 Project 200. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
