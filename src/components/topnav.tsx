"use client"

import { usePathname } from "next/navigation"

import {
  MenubarContent,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
} from "@/components/ui/menubar"
import React from "react";

const examples = [

  {
    name: "Maaagic AI",
    href: "/components/Maaagic_AI",
  },
  {
    name: "Store",
    href: "/components/Store",
  },
  {
    name: "Settings",
    href: "/components/settings",
  },
  {
 name: "Model Management",
 href: "/components/model_management",
  }
]

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Topnav({ className, ...props }: ExamplesNavProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() === "/" ? "/components/Maaagic_AI" : usePathname()

  return (
    <MenubarMenu>
      <MenubarTrigger>
        <span className="rounded-md bg-cyan-500 px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline">
          nav
        </span>
        {pathname}
      </MenubarTrigger>
      <MenubarContent forceMount>
        <MenubarRadioGroup value={pathname}>
          {examples.map((example) => (
            <a href={example.href} key={example.name}>
              <MenubarRadioItem value={example.href}>
                {example.name}
              </MenubarRadioItem>
            </a>
          ))}
        </MenubarRadioGroup>
      </MenubarContent>
    </MenubarMenu>
  )
}
