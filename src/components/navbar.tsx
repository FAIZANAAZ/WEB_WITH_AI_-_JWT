import Link from "next/link"
import { ShoppingBag, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "./them-bg/theme-toggle"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="font-bold text-xl md:text-2xl">
            StyleStore
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Women
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Men
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              Accessories
            </Link>
            <Link href="#" className="text-sm font-medium transition-colors hover:text-primary">
              New Arrivals
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
