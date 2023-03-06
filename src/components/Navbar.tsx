"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className={"h-auto bg-blue relative z-20"}>
      <div className={`fixed inset-0 backdrop-blur -z-10 ${show ? "" : "hidden"}`} onClick={() => setShow(false)}></div>
      <div className={"h-20 lg:hidden"}></div>
      <nav className={"h-full flex text-neutral-200 w-20 m-0 z-10 bg-blue"}>
        <button onClick={() => setShow(!show)} className={"sticky top-4 left-1/2 -translate-x-1/2 h-6"}>MENU</button>
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