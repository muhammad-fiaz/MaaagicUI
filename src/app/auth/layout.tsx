'use client';

import "@/styles/globals.scss"
import { Metadata } from "next"

import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Menu } from "@/components/menu"
import { StyleSwitcher } from "@/components/style-switcher"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import React, {useState} from "react";
import {usePathname} from "next/navigation";
import Sidebar from "@/components/sidebar";
import routes from "@/routes";
import Navbar from "@/components/navbar";
import {getActiveNavbar, getActiveRoute} from "@/utils/navigation";
import Footer from "@/components/footer/Footer";
import '@radix-ui/themes/styles.css';
import {Theme} from "@radix-ui/themes";

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function MyApp({ children }: ExamplesLayoutProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <html lang="en" suppressHydrationWarning className="overflow-clip bg-secondary">
      <head ><title>Maaagic AI</title></head>
      <body className="overflow-clip bg-transparent font-sans antialiased scrollbar-none">
      <Theme>

          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div className="h-screen overflow-clip">
                  <Menu menuItems={false}/>
                  <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
                      {/* Navbar & Main Content */}
                      <div className="h-full w-full font-dm dark:bg-navy-900">
                          {/* Main Content */}
                          <main
                              className={`mx-2.5  flex-none transition-all dark:bg-navy-900 
              md:pr-2 xl:ml-[323px] `}
                          >




                                  <div>
                                      {children}
                                  </div>

                          </main>
                      </div>
                  </div>
              </div>
          </ThemeProvider>

      </Theme>
      <StyleSwitcher/>

      </body>

    </html>
  )
}


