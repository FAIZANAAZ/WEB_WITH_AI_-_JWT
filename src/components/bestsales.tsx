"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const BestSales = () => {
  return (
    <div>
         {/* Trending categories */}
      <div className="container relative z-10 mx-auto px-4 pb-16 sm:px-6 lg:px-8 pt-1 md:pt-3">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          {["Summer Dresses", "Linen Collection", "Beach Accessories", "Footwear"].map((category, i) => (
            <motion.div
              key={category}
              {...{ className: "group cursor-pointer overflow-hidden rounded-xl bg-muted/50 p-4 text-center transition-colors hover:bg-muted sm:p-6" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <div className="mx-auto mb-4 aspect-square w-16 rounded-full bg-primary/10 p-3 text-primary sm:w-20">
                <Image
                  src={`/multi3.png`}
                  alt={`${category} category`}
                  width={50}
                  height={50}
                  className="h-full w-full rounded-full"
                />
              </div>
              <h3 className="font-medium">{category}</h3>
              <p className="mt-1 text-xs text-muted-foreground">Explore →</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BestSales