import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Products = () => {
  return (
    <div>
      <section className="container relative z-10 mx-auto px-4 pb-16 sm:px-6 lg:px-8 pt-1 md:pt-3">
        <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow transition-all hover:shadow-lg"
            >
              <div className="aspect-square relative bg-muted">
                <div className="flex h-full items-center justify-center">
                  <span className="text-muted-foreground">Product Image</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium">Product Name</h3>
                <p className="text-sm text-muted-foreground mt-1">Category</p>
                <div className="mt-2 font-medium">$99.99</div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Products

