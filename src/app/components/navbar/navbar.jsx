'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
]

const MotionLink = motion(Link)

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full border-b border-gray-800 bg-black/90 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[9.94vh] items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/assets/LogoAbout.jpg"
                alt="Company Logo"
                width={40} // Adjust width and height as needed
                height={40}
                className="rounded-full"
              />
            </Link>
          </motion.div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item, index) => (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 ease-in-out ${
                    pathname === item.href
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </MotionLink>
              ))}
            </div>
          </div>
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400 transition-colors duration-300 ease-in-out"
                >
                  <span className="sr-only">Open main menu</span>
                  <motion.div
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <X className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Menu className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </motion.div>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[250px] sm:w-[300px] bg-gray-900"
              >
                <nav className="mt-5 flex flex-col space-y-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * (index + 1), duration: 0.5 }}
                    >
                      <Link
                        href={item.href}
                        className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ease-in-out ${
                          pathname === item.href
                            ? "text-purple-400"
                            : "text-gray-300 hover:text-purple-400"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}