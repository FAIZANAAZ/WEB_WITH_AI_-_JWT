

import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="border-t py-6 md:py-0  px-2 md:px-4 ">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
                <p className="text-sm text-muted-foreground">© 2025 StyleStore. All rights reserved.</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Link href="#" className="hover:text-foreground">
                    Terms
                  </Link>
                  <Link href="#" className="hover:text-foreground">
                    Privacy
                  </Link>
                  <Link href="#" className="hover:text-foreground">
                    Contact
                  </Link>
                </div>
              </div>
            </footer>
    </div>
  )
}

export default Footer
