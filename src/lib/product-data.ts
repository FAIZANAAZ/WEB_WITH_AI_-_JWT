export interface Product {
    id: string
    name: string
    description: string
    price: number
    originalPrice: number
    discount: number
    image: string
    category: string
    color: string
    sizes: string[]
    brand: string
    isNew: boolean
    date: string
  }
  
  // Mock product data
  export const products: Product[] = [
    {
      id: "p1",
      name: "Summer Breeze Dress",
      description: "A lightweight, flowy dress perfect for summer days.",
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      image: "/placeholder.svg?height=400&width=400",
      category: "Dresses",
      color: "Blue",
      sizes: ["XS", "S", "M", "L"],
      brand: "StyleCo",
      isNew: true,
      date: "2023-05-15",
    },
    {
      id: "p2",
      name: "Classic Denim Jacket",
      description: "A timeless denim jacket that goes with everything.",
      price: 89.99,
      originalPrice: 0,
      discount: 0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Jackets",
      color: "Blue",
      sizes: ["S", "M", "L", "XL"],
      brand: "DenimWorks",
      isNew: false,
      date: "2023-03-10",
    },
    {
      id: "p3",
      name: "Comfort Fit Tee",
      description: "An everyday essential t-shirt with a comfortable fit.",
      price: 24.99,
      originalPrice: 34.99,
      discount: 30,
      image: "/placeholder.svg?height=400&width=400",
      category: "Tops",
      color: "White",
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      brand: "BasicEssentials",
      isNew: false,
      date: "2023-02-20",
    },
    {
      id: "p4",
      name: "High-Waist Slim Jeans",
      description: "Flattering high-waist jeans with a slim fit.",
      price: 69.99,
      originalPrice: 0,
      discount: 0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Pants",
      color: "Black",
      sizes: ["24", "26", "28", "30", "32"],
      brand: "DenimWorks",
      isNew: false,
      date: "2023-01-15",
    },
    {
      id: "p5",
      name: "Oversized Knit Sweater",
      description: "A cozy oversized sweater for chilly days.",
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      image: "/placeholder.svg?height=400&width=400",
      category: "Sweaters",
      color: "Beige",
      sizes: ["S", "M", "L"],
      brand: "CozyKnits",
      isNew: true,
      date: "2023-06-01",
    },
    {
      id: "p6",
      name: "Linen Blend Shorts",
      description: "Breathable linen blend shorts for hot summer days.",
      price: 49.99,
      originalPrice: 0,
      discount: 0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Shorts",
      color: "Cream",
      sizes: ["XS", "S", "M", "L", "XL"],
      brand: "SummerBasics",
      isNew: true,
      date: "2023-05-20",
    },
    {
      id: "p7",
      name: "Structured Blazer",
      description: "A tailored blazer to elevate any outfit.",
      price: 129.99,
      originalPrice: 159.99,
      discount: 20,
      image: "/placeholder.svg?height=400&width=400",
      category: "Jackets",
      color: "Black",
      sizes: ["S", "M", "L"],
      brand: "FormalEdge",
      isNew: false,
      date: "2023-04-10",
    },
    {
      id: "p8",
      name: "Floral Print Skirt",
      description: "A flowy skirt with a beautiful floral print.",
      price: 54.99,
      originalPrice: 0,
      discount: 0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Skirts",
      color: "Pink",
      sizes: ["XS", "S", "M", "L"],
      brand: "StyleCo",
      isNew: false,
      date: "2023-03-25",
    },
    {
      id: "p9",
      name: "Slim Fit Chinos",
      description: "Versatile slim fit chinos for a smart casual look.",
      price: 59.99,
      originalPrice: 0,
      discount: 0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Pants",
      color: "Khaki",
      sizes: ["28", "30", "32", "34", "36"],
      brand: "UrbanClassics",
      isNew: false,
      date: "2023-02-15",
    },
    {
      id: "p10",
      name: "Graphic Print T-Shirt",
      description: "A cotton t-shirt featuring a unique graphic print.",
      price: 29.99,
      originalPrice: 39.99,
      discount: 25,
      image: "/placeholder.svg?height=400&width=400",
      category: "Tops",
      color: "Gray",
      sizes: ["S", "M", "L", "XL"],
      brand: "GraphicTees",
      isNew: true,
      date: "2023-06-05",
    },
    {
      id: "p11",
      name: "Pleated Midi Skirt",
      description: "An elegant pleated midi skirt for a sophisticated look.",
      price: 69.99,
      originalPrice: 0,
      discount: 0,
      image: "/placeholder.svg?height=400&width=400",
      category: "Skirts",
      color: "Navy",
      sizes: ["XS", "S", "M", "L"],
      brand: "FormalEdge",
      isNew: false,
      date: "2023-04-20",
    },
    {
      id: "p12",
      name: "Relaxed Fit Hoodie",
      description: "A comfortable hoodie with a relaxed fit.",
      price: 49.99,
      originalPrice: 64.99,
      discount: 25,
      image: "/placeholder.svg?height=400&width=400",
      category: "Sweaters",
      color: "Green",
      sizes: ["S", "M", "L", "XL", "XXL"],
      brand: "CozyKnits",
      isNew: false,
      date: "2023-03-15",
    },
  ]
  
  // Extract unique values for filters
  export const allCategories = Array.from(new Set(products.map((p) => p.category)))
  export const allColors = Array.from(new Set(products.map((p) => p.color)))
  export const allSizes = Array.from(new Set(products.flatMap((p) => p.sizes)))
  
  // Price range
  export const minPrice = 0
  export const maxPrice = Math.ceil(Math.max(...products.map((p) => p.price)) / 10) * 10 // Round up to nearest 10
  