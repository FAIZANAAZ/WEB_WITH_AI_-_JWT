import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Product } from "@/lib/product-data"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
      <Link href={`/shop/${product.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View {product.name}</span>
      </Link>

      <div className="relative aspect-square overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={400}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />

        {product.isNew && <Badge className="absolute top-2 right-2 bg-primary">New</Badge>}

        {product.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-destructive">{product.discount}% OFF</Badge>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-medium line-clamp-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">{product.category}</p>

        <div className="mt-2 flex items-center gap-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>

          {product.originalPrice > 0 && (
            <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {product.sizes.slice(0, 4).map((size: string) => (
            <span key={size} className="inline-flex h-6 w-6 items-center justify-center rounded-full border text-xs">
              {size}
            </span>
          ))}

          {product.sizes.length > 4 && (
            <span className="inline-flex h-6 items-center justify-center text-xs text-muted-foreground">
              +{product.sizes.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
