"use client";
import React, {useState} from "react";
import {Menu} from "@/components/menu";
import Sidebar from "@/components/sidebar";
import routes from "@/routes";
import {cn} from "@/lib/utils";
import Navbar from "@/components/navbar";
import {getActiveNavbar, getActiveRoute} from "@/utils/navigation";
import {ThemeProvider} from "@/components/theme-provider";
import {usePathname} from "next/navigation";

interface ExamplesLayoutProps {
  children: React.ReactNode
}

export default function ExamplesLayout({ children }: ExamplesLayoutProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return <div>
      <div className="h-screen overflow-clip">
        <Menu/>
        <div className="flex h-full w-full bg-background-100 dark:bg-background-900">
          <Sidebar routes={routes} open={open} setOpen={setOpen} variant="admin"/>
          {/* Navbar & Main Content */}
          <div className="h-full w-full font-dm dark:bg-navy-900">
            {/* Main Content */}
            <main
                className={`mx-2.5  flex-none transition-all dark:bg-navy-900 
              md:pr-2 xl:ml-[323px] `}
            >
              {/* Routes */}
              <div   className={cn(
                  "h-screen overflow-auto  pb-8 bg-secondary",
                  // "scrollbar-none "
                  "scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
              )}>
                <Navbar
                    onOpenSidenav={() => setOpen(!open)}
                    brandText={getActiveRoute(routes, pathname)}
                    secondary={getActiveNavbar(routes, pathname)}
                />



                <div>
                  {children}
                </div>

              </div>
            </main>
          </div>
        </div>
      </div>
  </div>
}
