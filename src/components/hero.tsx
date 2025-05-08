"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShoppingBag, Star } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left column - Text content */}
          <motion.div
            {...{ className: "flex flex-col justify-center" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 w-fit bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30">
              New Collection 2025
            </Badge>

            <motion.h1
              {...{ className: "text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="block">Elevate Your Style</span>
              <span className="mt-1 block text-primary">Summer Essentials</span>
            </motion.h1>

            <motion.p
              {...{ className: "mt-6 max-w-xl text-lg text-muted-foreground" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our curated collection of premium fashion pieces designed for comfort and style. Limited edition
              items available now.
            </motion.p>

            <motion.div
              {...{ className: "mt-8 flex flex-wrap gap-4" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="group rounded-full">
                Shop Collection
                <ShoppingBag className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Explore Lookbook
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              {...{ className: "mt-10 flex items-center gap-4" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div>
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">From 2,000+ happy customers</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column - Image */}
          <motion.div
            {...{ className: "relative mx-auto lg:ml-auto" }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative sm:h-[400px] sm:w-[400px] aspect-square overflow-hidden rounded-2xl bg-muted lg:aspect-[4/5]">
              {/* Main product image */}
              <Image
                src="/multi3.png"
                alt="Summer Collection Featured Product"
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority
              />

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
