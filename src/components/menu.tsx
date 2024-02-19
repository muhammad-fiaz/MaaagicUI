"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import logo from "@/../src-tauri/icons/32x32.ico"
import { Globe, Mic, Sailboat } from "lucide-react"
import { WindowControls, WindowTitlebar } from "tauri-controls"

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"

import { AboutDialog } from "./about-dialog"
import { Topnav } from "./topnav"
import { MenuModeToggle } from "./menu-mode-toggle"
import { Dialog, DialogTrigger } from "./ui/dialog"
import {NotAllowedIcon} from "@chakra-ui/icons";

export function Menu({ menuItems = true }) {
  const closeWindow = useCallback(async () => {
    const { appWindow } = await import("@tauri-apps/plugin-window")
    await appWindow.close()
  }, [])

  return (
    <WindowTitlebar
    // controlsOrder="left"
    // className="pl-0"
    // windowControlsProps={{ platform: "windows", justify: false }}
    >
      <Menubar className="rounded-none border-b border-none pl-2 lg:pl-3">
        <MenubarMenu>
          {/* App Logo */}
          <div className="inline-flex h-fit w-fit items-center text-cyan-500">
            {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
            {usePathname() === "/" || usePathname() === "/pages/Maaagic_AI" ? (
              <Image src={logo} alt="logo" width={20} height={20} />
            ) : (
                <Image src={logo} alt="logo" width={20} height={20} />

            )}
          </div>
        </MenubarMenu>

        {/* App Menu */}
        {menuItems && (
            <>
              <MenubarMenu>
                <MenubarTrigger>App</MenubarTrigger>
                <Dialog modal={false}>
                  <MenubarContent>
                    <DialogTrigger asChild>
                      <MenubarItem>About App</MenubarItem>
                    </DialogTrigger>

                    <MenubarSeparator />
                    <MenubarItem>
                      Preferences... <MenubarShortcut>⌘,</MenubarShortcut>
                    </MenubarItem>
                    <MenubarSeparator />

                    <MenubarItem onClick={closeWindow}>
                      Quit <MenubarShortcut>⌘Q</MenubarShortcut>
                    </MenubarItem>
                  </MenubarContent>

                  <AboutDialog />
                </Dialog>
              </MenubarMenu>

              {/* File Menu */}
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>New</MenubarSubTrigger>
                    <MenubarSubContent className="w-[230px]">
                      <MenubarItem>
                        New Window <MenubarShortcut>⌘W</MenubarShortcut>
                      </MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarItem>
                    Open Stream URL... <MenubarShortcut>⌘U</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Close Window <MenubarShortcut>⌘W</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />

                  <MenubarItem>
                    Import... <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Edit Menu */}
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem disabled>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem disabled>
                    Cut <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Paste <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Select All <MenubarShortcut>⌘A</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem disabled>
                    Deselect All <MenubarShortcut>⇧⌘A</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Smart Dictation...{" "}
                    <MenubarShortcut>
                      <Mic className="h-4 w-4" />
                    </MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Emoji & Symbols{" "}
                    <MenubarShortcut>
                      <Globe className="h-4 w-4" />
                    </MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* View Menu */}
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem>Show Models</MenubarCheckboxItem>
                  <MenubarCheckboxItem checked>Sort Alphabetically</MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarItem inset disabled>
                    Show Status Bar
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Hide Sidebar</MenubarItem>
                  <MenubarItem disabled inset>
                    Enter Full Screen
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              {/* Account Menu */}
              <MenubarMenu>
                <MenubarTrigger>Account</MenubarTrigger>
                <MenubarContent forceMount>
                  <MenubarLabel inset>Switch Account</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarRadioGroup value="user1">
                    <MenubarRadioItem value="user1">user1</MenubarRadioItem>
                    <MenubarRadioItem value="user2">user2</MenubarRadioItem>
                  </MenubarRadioGroup>
                  <MenubarSeparator />
                  <MenubarItem inset>Manage Account...</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem inset>Add Account...</MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenuModeToggle />
            </>
        )}
        {/*   <Topnav /> - > This is the topnav component (optional) */}
      </Menubar>
    </WindowTitlebar>
  )
}
