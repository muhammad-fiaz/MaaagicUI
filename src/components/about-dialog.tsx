"use client"

import { useCallback, useState } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { UpdateIcon } from "@radix-ui/react-icons"
import { GithubIcon, HomeIcon, LucideArrowUpRight } from "lucide-react"

import { Icons } from "./icons"
import { Button, buttonVariants } from "./ui/button"
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"

export function AboutDialog() {
  const [updateText, setUpdateText] = useState("")
  const [version, setVersion] = useState("")
  const [name, setName] = useState("")
  const [tauriVersion, setTauriVersion] = useState("0.0.0")
  const [arc, setArc] = useState("")

  const getInfos = useCallback(async () => {
    const { getName, getTauriVersion, getVersion } = await import(
      "@tauri-apps/plugin-app"
    )
    const { arch } = await import("@tauri-apps/plugin-os")

    getName && getName().then((x) => setName(x))
    getVersion && getVersion().then((x) => setVersion(x))
    getTauriVersion && getTauriVersion().then((x) => setTauriVersion(x))
    arch && arch().then((x) => setArc(x))
  }, [])

  if (typeof window !== "undefined") getInfos()

  const open = useCallback(async (url: string) => {
    const { open } = await import("@tauri-apps/plugin-shell")
    open && await open(url)
  }, [])

  return (
    <DialogContent className="overflow-clip pb-2">
      <DialogHeader className="flex items-center text-center">
        <div className="rounded-full bg-background p-[6px]  text-slate-600 drop-shadow-none transition duration-1000 hover:text-slate-800 hover:drop-shadow-[0_0px_10px_rgba(0,10,50,0.50)]  dark:hover:text-slate-400 ">
          <img src="/maaagic.png" className="h-16 w-16 rounded-full" alt="Maaagic UI" />
        </div>

        <DialogTitle className="flex flex-col items-center gap-2 pt-2">
          Maaagic UI
          <span className="flex gap-1 font-mono text-xs font-medium">
            Version {version} ({arc})
            <span className="font-sans font-medium text-gray-400">
              (
              <span
                className="cursor-pointer text-blue-500"
                onClick={() =>
                  open("https://github.com/muhammad-fiaz/MaaagicUI")
                }
              >
                release notes
              </span>
              )
            </span>
          </span>
        </DialogTitle>

        <DialogDescription className=" text-foreground">
          Maaagic UI is an all-in-one solution for building modern and feature-rich applications. With Next.js for seamless server-side rendering and Tauri for Large Language Models and stable diffusion like AI Based Applications, this UI empowers developers to create intuitive and efficient user interfaces. Leveraging various large language models, Maaagic UI ensures exceptional performance and flexibility for diverse application needs. Get started with Maaagic UI today and unlock endless possibilities for your projects.
        </DialogDescription>

        <span className="text-xs text-gray-400">{updateText}</span>
        <DialogDescription className="flex flex-row"></DialogDescription>
      </DialogHeader>

      <span className="font-mono text-xs font-medium text-gray-400">
        Build version: {tauriVersion}
      </span>

      <DialogFooter className="flex flex-row items-center border-t pt-2 text-slate-400">
        <div className="mr-auto flex flex-row gap-2">
          <HomeIcon
            className="h-5 w-5 cursor-pointer transition hover:text-slate-300"
            onClick={() => open("https://github.com/muhammad-fiaz/MaaagicUI")}
          />
          <GithubIcon
            className="h-5 w-5 cursor-pointer transition hover:text-slate-300 "
            onClick={() => open("https://github.com/muhammad-fiaz/MaaagicUI")}
          />
        </div>

        <Button
          type="submit"
          variant="outline"
          className="h-7 gap-1"
          onClick={() => setUpdateText("You have the latest version.")}
        >
          <UpdateIcon /> Check for Updates
        </Button>
        <DialogPrimitive.Close
          type="submit"
          className={buttonVariants({ variant: "ghost", className: "h-7" })}
        >
          Close
        </DialogPrimitive.Close>
      </DialogFooter>
    </DialogContent>
  )
}
