"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal, X } from "lucide-react"
import SortDropdown from "./sort-dropdawn"
import ProductGrid from "./product-grid"
import FilterSidebar from "./filter-sidebar"
import { products } from "@/lib/product-data"


export type FilterState = {
  categories: string[]
  colors: string[]
  sizes: string[]
  priceRange: [number, number]
}

export default function ShopPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [sortOption, setSortOption] = useState("featured")

  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    colors: [],
    sizes: [],
    priceRange: [0, 500],
  })

  // Apply filters and sorting
  useEffect(() => {
    let result = [...products]

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter((product) => filters.categories.includes(product.category))
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      result = result.filter((product) => filters.colors.includes(product.color))
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter((product) => product.sizes.some((size:string) => filters.sizes.includes(size)))
    }

    // Apply price range filter
    result = result.filter(
      (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1],
    )

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => a.price - b.price)
        break
      case "price-high-low":
        result.sort((a, b) => b.price - a.price)
        break
      case "newest":
        result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        break
      // featured is default, no sorting needed
    }

    setFilteredProducts(result)
  }, [filters, sortOption])

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
    }))
  }

  const clearAllFilters = () => {
    setFilters({
      categories: [],
      colors: [],
      sizes: [],
      priceRange: [0, 500],
    })
    setSortOption("featured")
  }

  const hasActiveFilters = () => {
    return (
      filters.categories.length > 0 ||
      filters.colors.length > 0 ||
      filters.sizes.length > 0 ||
      filters.priceRange[0] > 0 ||
      filters.priceRange[1] < 500
    )
  }

  return (
    <div className="bg-background">
      <div className="container px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">Shop All Products</h1>
              <p className="text-muted-foreground mt-1">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"} available
              </p>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <Button variant="outline" className="sm:hidden flex-1" onClick={() => setMobileFiltersOpen(true)}>
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filters
              </Button>

              <SortDropdown value={sortOption} onChange={setSortOption} />
            </div>
          </div>

          {/* Active filters */}
          {hasActiveFilters() && (
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium">Active filters:</span>

              {filters.categories.map((category) => (
                <Button
                  key={`cat-${category}`}
                  variant="secondary"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() =>
                    handleFilterChange({
                      categories: filters.categories.filter((c) => c !== category),
                    })
                  }
                >
                  {category}
                  <X className="ml-1 h-3 w-3" />
                </Button>
              ))}

              {filters.colors.map((color) => (
                <Button
                  key={`color-${color}`}
                  variant="secondary"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() =>
                    handleFilterChange({
                      colors: filters.colors.filter((c) => c !== color),
                    })
                  }
                >
                  {color}
                  <X className="ml-1 h-3 w-3" />
                </Button>
              ))}

              {filters.sizes.map((size) => (
                <Button
                  key={`size-${size}`}
                  variant="secondary"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() =>
                    handleFilterChange({
                      sizes: filters.sizes.filter((s) => s !== size),
                    })
                  }
                >
                  Size: {size}
                  <X className="ml-1 h-3 w-3" />
                </Button>
              ))}

              {(filters.priceRange[0] > 0 || filters.priceRange[1] < 500) && (
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full text-xs"
                  onClick={() =>
                    handleFilterChange({
                      priceRange: [0, 500],
                    })
                  }
                >
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  <X className="ml-1 h-3 w-3" />
                </Button>
              )}

              <Button variant="ghost" size="sm" className="text-xs ml-auto" onClick={clearAllFilters}>
                Clear all
              </Button>
            </div>
          )}

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8">
            {/* Filters */}
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              mobileOpen={mobileFiltersOpen}
              setMobileOpen={setMobileFiltersOpen}
            />

            {/* Products */}
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
