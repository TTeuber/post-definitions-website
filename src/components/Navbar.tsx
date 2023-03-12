"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import {Bars3Icon} from "@heroicons/react/20/solid";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState("system");
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  const [show, setShow] = useState(false);

  return (
    <div className={"lg:h-auto relative z-20"}>
      <div className={`fixed inset-0 backdrop-blur -z-10 ${show ? "" : "hidden"}`} onClick={() => setShow(false)}></div>
      <div className={"h-16 lg:hidden"}></div>
      <nav className={"h-full max-lg:fixed flex text-neutral-200 w-20 max-lg:w-full max-lg:h-16 max-lg:top-0 m-0 z-10 bg-blue/80 justify-between max-lg:items-center"}>
        <p className={"lg:hidden"}>Post Definitions</p>
        <Bars3Icon onClick={() => setShow(!show)} className={"lg:sticky top-4 left-1/2 lg:-translate-x-3/4 h-8 cursor-pointer"}/>
        <p className={"[text-orientation:upright] [writing-mode:vertical-rl] max-lg:hidden sticky top-20 right-1/2 w-6 h-10"}>links</p>
        <div className={`${show ? "": "hidden"} absolute left-20 h-full z-40 bg-blue/90`}>
          <div className={"sticky top-0"}>
            <ul className={"flex"} onClick={() => setShow(false)}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/podcasts">Podcasts</Link></li>
            </ul>
            <div>
              dark
              <div className={"absolute"}>
                <button
                  onClick={() => {
                    localStorage.theme = 'light';
                    setDarkMode("light");
                  }}>Light</button>
                <button
                  onClick={() => {
                    localStorage.theme = 'dark';
                    setDarkMode("dark");
                  }}>Dark</button>
                <button
                  onClick={() => {
                    localStorage.removeItem('theme');
                    setDarkMode("system")
                  }}>System</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}