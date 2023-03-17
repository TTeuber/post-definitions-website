"use client";
import Link from "next/link";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon, MoonIcon, SunIcon, ComputerDesktopIcon } from "@heroicons/react/20/solid";

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
    <div className={"lg:h-auto relative z-50 row-span-2"}>
      <div className={`fixed inset-0 backdrop-blur -z-10 ${show ? "" : "hidden"}`} onClick={() => setShow(false)}></div>
      <div className={"h-16 lg:hidden"}></div>
      <nav className={"h-full max-lg:fixed max-lg:flex dark:text-neutral-200 w-20 max-lg:w-full max-lg:h-16 max-lg:top-0 m-0 z-10 max-lg:border-b lg:border-r border-blue backdrop-blur-sm justify-between max-lg:items-center"}>
        <h1 className={"lg:hidden text-xl mx-3 uppercase font-black"}>Post Definitions</h1>
        {!show ? <Bars3Icon onClick={() => setShow(!show)} className={"max-lg:mr-6 lg:sticky top-4 left-1/2 lg:-translate-x-3/4 h-8 cursor-pointer"}/> : <XMarkIcon onClick={() => setShow(!show)} className={"max-lg:mr-6 lg:sticky top-4 left-1/2 lg:-translate-x-3/4 h-8 cursor-pointer"}/>}
        <p className={"max-lg:hidden sticky top-20 font-black text-3xl left-6 [writing-mode:vertical-rl] [text-orientation:mixed] tracking-wider"}>Post Definitions</p>
      </nav>
      <Test show={show} setShow={setShow} darkMode={darkMode} setDarkMode={setDarkMode}/>
    </div>
  )
}

function Test({show, setShow, darkMode, setDarkMode}: {
    show: boolean,
    setShow: Dispatch<SetStateAction<boolean>>,
    darkMode: string,
    setDarkMode: Dispatch<SetStateAction<string>>,
  }) {
  return (
    <div className={`${show ? "": "-translate-x-[200%]"} fixed top-16 lg:top-0 max-lg:w-full lg:left-20 h-screen lg:h-full z-40 lg:border-r border-blue backdrop-blur-md transition`}>
      <div className={"sticky top-0 flex text-2xl md:text-4xl lg:mx-16 flex-col justify-center items-center mt-[5vh] sm:mt-[10vh] gap-[5vh] sm:gap-[10vh]"}>
        <ul className={"contents"} onClick={() => setShow(false)}>
          <li className={"hover:text-neutral-600 hover:underline underline-offset-2 dark:hover:text-neutral-400 uppercase font-bold"}><Link href="/">Home</Link></li>
          <li className={"hover:text-neutral-600 hover:underline underline-offset-2 dark:hover:text-neutral-400 uppercase font-bold"}><Link href="/about">About</Link></li>
          <li className={"hover:text-neutral-600 hover:underline underline-offset-2 dark:hover:text-neutral-400 uppercase font-bold"}><Link href="/podcasts">Podcasts</Link></li>
        </ul>
        <p>Link</p>
        <div>
          <p className={"text-center text-2xl mb-6"}>Dark Mode</p>
          <div className={"flex gap-6 text-xl"}>
            <SunIcon
              className={`${darkMode === "light" ? "border-2 md:border-4 rounded-xl border-black dark:border-white" : ""} box-content dark:fill-white hover:fill-neutral-600 dark:hover:fill-neutral-400 w-6 md:w-8 p-2 cursor-pointer`}
              onClick={() => {
                localStorage.theme = 'light';
                setDarkMode("light");
              }}>Light</SunIcon>
            <MoonIcon
              className={`${darkMode === "dark" ? "border-2 md:border-4 rounded-xl border-black dark:border-white" : ""} box-content dark:fill-white hover:fill-neutral-600 dark:hover:fill-neutral-400 w-6 md:w-8 p-2 cursor-pointer`}
              onClick={() => {
                localStorage.theme = 'dark';
                setDarkMode("dark");
              }}>Dark</MoonIcon>
            <ComputerDesktopIcon
              className={`${darkMode === "system" ? "border-2 md:border-4 rounded-xl border-black dark:border-white" : ""} box-content dark:fill-white hover:fill-neutral-600 dark:hover:fill-neutral-400 w-6 md:w-8 p-2 cursor-pointer`}
              onClick={() => {
                localStorage.removeItem('theme');
                setDarkMode("system")
              }}>System</ComputerDesktopIcon>
          </div>
        </div>
      </div>
    </div>

  )
}