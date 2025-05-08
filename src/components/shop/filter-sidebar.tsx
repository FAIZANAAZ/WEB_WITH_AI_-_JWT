"use client"

import { useState, useEffect } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import type { FilterState } from "./shop-page"
import { allCategories, allColors, allSizes, minPrice, maxPrice } from "@/lib/product-data"

interface FilterSidebarProps {
  filters: FilterState
  onFilterChange: (filters: Partial<FilterState>) => void
  mobileOpen: boolean
  setMobileOpen: (open: boolean) => void
}

export default function FilterSidebar({ filters, onFilterChange, mobileOpen, setMobileOpen }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>(filters.priceRange)

  // Sync price range with filters
  useEffect(() => {
    setPriceRange(filters.priceRange)
  }, [filters.priceRange])

  // Update price range after slider interaction ends
  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange([value[0], value[1]])
  }

  const handlePriceRangeCommit = () => {
    onFilterChange({ priceRange })
  }

  const filterContent = (
    <>
      <Accordion type="multiple" defaultValue={["categories", "price", "colors", "sizes"]} className="w-full">
        <AccordionItem value="categories">
          <AccordionTrigger className="text-base">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {allCategories.slice(0, 5).map((category) => (
                <Label key={category} className="flex items-center gap-2 font-normal cursor-pointer">
                  <Checkbox
                    id={`category-${category}`}
                    checked={filters.categories.includes(category)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        onFilterChange({
                          categories: [...filters.categories, category],
                        })
                      } else {
                        onFilterChange({
                          categories: filters.categories.filter((c) => c !== category),
                        })
                      }
                    }}
                  />
                  {category}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">${priceRange[0]}</span>
                <span className="text-sm">${priceRange[1]}</span>
              </div>
              <Slider
                min={minPrice}
                max={maxPrice}
                step={10}
                value={[priceRange[0], priceRange[1]]}
                onValueChange={handlePriceRangeChange}
                onValueCommit={handlePriceRangeCommit}
                className="mt-2"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="colors">
          <AccordionTrigger className="text-base">Colors</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {allColors.slice(0, 5).map((color) => (
                <Label key={color} className="flex items-center gap-2 font-normal cursor-pointer">
                  <Checkbox
                    id={`color-${color}`}
                    checked={filters.colors.includes(color)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        onFilterChange({
                          colors: [...filters.colors, color],
                        })
                      } else {
                        onFilterChange({
                          colors: filters.colors.filter((c) => c !== color),
                        })
                      }
                    }}
                  />
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full border"
                      style={{
                        backgroundColor: color.toLowerCase(),
                        borderColor: ["white", "beige", "cream"].includes(color.toLowerCase())
                          ? "#ddd"
                          : color.toLowerCase(),
                      }}
                    />
                    {color}
                  </div>
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sizes">
          <AccordionTrigger className="text-base">Sizes</AccordionTrigger>
          <AccordionContent>
            <div className="grid gap-2">
              {allSizes.slice(0, 5).map((size) => (
                <Label key={size} className="flex items-center gap-2 font-normal cursor-pointer">
                  <Checkbox
                    id={`size-${size}`}
                    checked={filters.sizes.includes(size)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        onFilterChange({
                          sizes: [...filters.sizes, size],
                        })
                      } else {
                        onFilterChange({
                          sizes: filters.sizes.filter((s) => s !== size),
                        })
                      }
                    }}
                  />
                  {size}
                </Label>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:block sticky top-20 h-fit">
        <div className="pb-6">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          {filterContent}
        </div>
      </div>

      {/* Mobile filter drawer */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent side="left" className="w-full max-w-xs sm:max-w-sm">
          <SheetHeader className="mb-4">
            <SheetTitle className="flex items-center justify-between">
              Filters
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </SheetTitle>
          </SheetHeader>
          {filterContent}
        </SheetContent>
      </Sheet>
    </>
  )
}
