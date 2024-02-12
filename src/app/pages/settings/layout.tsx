import { Metadata } from "next"
import Image from "next/image"

import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/app/pages/settings/components/sidebar-nav"
import React from "react";

export const metadata: Metadata = {
  title: "Settings",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/pages/settings",
  },
  {
    title: "Account",
    href: "/pages/settings/account",
  },
  {
    title: "Appearance",
    href: "/pages/settings/appearance",
  },
  {
    title: "Notifications",
    href: "/pages/settings/notifications",
  },
  {
    title: "Display",
    href: "/pages/settings/display",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}
export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
      <>
        <div className="p-4 md:p-10 pb-16">
          <div className="space-y-2 md:space-y-6">
            <p className="text-muted-foreground">
              Manage your account settings and set e-mail preferences.
            </p>
          </div>
          <Separator className="my-6" />
          <div className="flex flex-row  md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            <aside className="md:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </>
  )
}
