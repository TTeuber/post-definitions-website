"use client";
import Link from "next/link";
import Socials from "~/components/Socials";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/20/solid";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState("system");
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  const [show, setShow] = useState(false);

  return (
    <>
      <div className={"relative z-50 row-span-2 lg:h-auto"}>
        <div
          className={`fixed inset-0 -z-10 backdrop-blur ${
            show ? "" : "hidden"
          }`}
          onClick={() => setShow(false)}
        ></div>
        <div className={"h-16 lg:hidden"}></div>
        <nav
          className={
            "z-10 m-0 h-full w-20 justify-between border-blue backdrop-blur-sm dark:text-neutral-200 max-lg:fixed max-lg:top-0 max-lg:flex max-lg:h-16 max-lg:w-full max-lg:items-center max-lg:border-b lg:border-r"
          }
        >
          <h1 className={"mx-8 text-xl font-black uppercase lg:hidden"}>
            Post Definitions
          </h1>

          {!show ? (
            <Bars3Icon
              onClick={() => setShow(!show)}
              className={
                "absolute top-4 right-4 h-8 cursor-pointer max-lg:mr-6 lg:sticky lg:left-1/2 lg:-translate-x-3/4"
              }
            />
          ) : (
            <XMarkIcon
              onClick={() => setShow(!show)}
              className={
                "absolute top-4 right-4 h-8 cursor-pointer max-lg:mr-6 lg:sticky lg:left-1/2 lg:-translate-x-3/4"
              }
            />
          )}
          <p
            className={
              "sticky top-20 left-6 text-3xl font-black tracking-wider [writing-mode:vertical-rl] [text-orientation:mixed] max-lg:hidden"
            }
          >
            Post Definitions
          </p>
          <div
            className={
              "flex translate-y-[40vh] flex-col items-center gap-4 lg:sticky"
            }
          >
            {/*<p*/}
            {/*  className={*/}
            {/*    "text-2xl [writing-mode:vertical-rl] [text-orientation:mixed]"*/}
            {/*  }*/}
            {/*>*/}
            {/*  Listen*/}
            {/*</p>*/}
          </div>
        </nav>
        <Test
          show={show}
          setShow={setShow}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      </div>
      <div className={"fixed bottom-4 left-6 z-50 items-center justify-center"}>
        <Socials
          list={["spotify", "apple", "youtube"]}
          className={"flex-col items-center gap-[3.5vh] py-6 max-lg:hidden"}
        />
      </div>
    </>
  );
}

function Test({
  show,
  setShow,
  darkMode,
  setDarkMode,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  darkMode: string;
  setDarkMode: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div
      className={`${
        show ? "" : "-translate-x-[200%]"
      } fixed top-16 z-40 h-screen border-blue backdrop-blur-md transition max-lg:w-full lg:top-0 lg:left-20 lg:h-full lg:border-r`}
      onClick={() => setShow(false)}
    >
      <div
        className={
          "sticky top-0 mt-[5vh] flex flex-col items-center justify-center gap-[5vh] text-xl sm:mt-[10vh] lg:mx-16 lg:gap-[10vh] lg:text-2xl"
        }
      >
        <ul className={"contents"} onClick={() => setShow(false)}>
          <li
            className={
              "font-bold uppercase underline-offset-2 hover:text-neutral-600 hover:underline dark:hover:text-neutral-400"
            }
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={
              "font-bold uppercase underline-offset-2 hover:text-neutral-600 hover:underline dark:hover:text-neutral-400"
            }
          >
            <a href="http://freddielancia.com" target="_blank" rel="noopener noreferrer">About</a>
          </li>
          <li
            className={
              "font-bold uppercase underline-offset-2 hover:text-neutral-600 hover:underline dark:hover:text-neutral-400"
            }
          >
            <Link href="/podcasts">Podcasts</Link>
          </li>
        </ul>
        <Socials
          list={[
            "instagram",
            "linkedin",
            "spotify",
            "apple",
            "youtube",
            "tiktok",
          ]}
        />
        <div>
          {/*<p className={"text-center text-2xl mb-6"}>Dark Mode</p>*/}
          <div className={"flex gap-6 text-xl"}>
            <SunIcon
              className={`${
                darkMode === "light"
                  ? "rounded-xl border-2 border-black dark:border-white lg:border-4"
                  : ""
              } box-content w-6 cursor-pointer p-2 hover:fill-neutral-600 dark:fill-white dark:hover:fill-neutral-400 lg:w-8`}
              onClick={(e) => {
                localStorage.theme = "light";
                setDarkMode("light");
                e.stopPropagation();
              }}
            >
              Light
            </SunIcon>
            <MoonIcon
              className={`${
                darkMode === "dark"
                  ? "rounded-xl border-2 border-black dark:border-white lg:border-4"
                  : ""
              } box-content w-6 cursor-pointer p-2 hover:fill-neutral-600 dark:fill-white dark:hover:fill-neutral-400 lg:w-8`}
              onClick={(e) => {
                localStorage.theme = "dark";
                setDarkMode("dark");
                e.stopPropagation();
              }}
            >
              Dark
            </MoonIcon>
            <ComputerDesktopIcon
              className={`${
                darkMode === "system"
                  ? "rounded-xl border-2 border-black dark:border-white lg:border-4"
                  : ""
              } box-content w-6 cursor-pointer p-2 hover:fill-neutral-600 dark:fill-white dark:hover:fill-neutral-400 lg:w-8`}
              onClick={(e) => {
                localStorage.removeItem("theme");
                setDarkMode("system");
                e.stopPropagation();
              }}
            >
              System
            </ComputerDesktopIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
