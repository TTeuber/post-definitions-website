import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import Image from 'next/image';

export default function About() {
  const musicLinks = ["ReY4yVkoDc4", "RRRgK9TOes0", "g9NuX3NJ52o"];
  const filmLinks = ["b87B7zyucgI", "uMZa5_xK2ek"];
  const otherLinks = ["wVh6BQyd9DY"];

  return (
    <div className={"lg:w-3/4 mx-auto overflow-hidden"}>
      <h1 className={"text-center max-lg:m-10 my-10 text-4xl sm:text-6xl uppercase font-black"}>Who am I?</h1>
      <div className={"uppercase text-xl flex max-sm:flex-col justify-between items-center max-lg:m-10 my-10 sm:flex px-6 max-sm:gap-10"}>
        <h3>Philosopher</h3>
        <h3 className={""}>Life Nerd</h3>
        <h3>World Traveler</h3>
        <h3 className={"inline sm:hidden 2xl:inline text-center"}>Host of the Post Definitions Podcast</h3>
      </div>
      <div className={"w-[50vh] max-sm:w-[75vw] overflow-hidden object-center aspect-square shadow-[7px_8px] shadow-blue/50 mx-auto my-10 border-2 border-blue"}>
        <Image src={"/fred2.jpg"} alt={'fred'} height={400} width={400} className={"w-full"}/>
      </div>
      <div className={"bg-blue-300/10 dark:bg-blue-700/10 sm:max-lg:m-10 mx-auto shadow-xl sm:mb-10 border sm:rounded-xl border-blue overflow-hidden"}>
        <div className={"p-6 [&>p]:mt-6"}>
          <h2 className={"uppercase text-2xl font-bold mb-6 text-center"}>I&apos;m Freddie</h2>
          <p className={"indent-8"}>
            In 2021 I graduated with from my Bachelor’s Degree from the University of Washington with a double major in
            Mathematics and Philosophy. I took 6 courses on probability theory, 5 on computer science, 3 on Italian
            language, and a lot on film studies.
          </p>
          <p className={"indent-8"}>
            I like applying my background in math, logic, and software dev to solving problems I deem important. For me,
            that means helping start ups in conservation. I now work as Lead Data Scientist at Xylo Systems, an Australian
            start up taking on the giant task of utilising data for understanding biodiversity.
          </p>
          {/*<p>*/}
          {/*  Since 2019, I have been living in and traveling through different countries in Europe. I constantly start ‘new*/}
          {/*  lives’, but I don’t forget the friends I make along the way. I sporadically take photos and journal, but I*/}
          {/*  find . but the initial inspiration for this podcast remedy 3 personal difficulties.1. Staying in touch*/}
          {/*  2. Better recor*/}
          {/*  was to find a more consistent way to document and share my experiences with some of the incredible people I*/}
          {/*  meet*/}
          {/*</p>*/}
          <p className={"line indent-8"}>
            My favorite podcast is &quot;Philosophize This!&quot; by Steven West.
            My favorite philosopher is Søren Kierkegaard.
            My favorite authors are Milan Kundera and Herman Hesse.
            Some of my favorite books are The Unbearable Lightness of Being by Milan Kundera, The Picture of Dorian Grey
            by Oskar Wilde, and At The Existentialist Cafe by Sarah Bakewell.
            Some of my favorite film directors are Miyazaki, Wes Anderson, Federico Fellini, Spike Lee... Some of my
            favorite musicians/bands are The Minds of 99, The Movement, Elliot Smith, Phoebe Bridgers, Tom Misch, Georgio
            Poi, Feu! Chatterton, Glass Animals...
          </p>
          <p className={"indent-8"}>
            For sport, these days I surf and practice yoga. At other times I rock climb and take any opportunities that
            come my way.
          </p>
        </div>
        <hr className={"mx-10 mt-2 border border-blue"}/>
        <h2 className={"text-xl text-center my-6"}>Some Random bits on YouTube I like:</h2>
        <Test links={musicLinks} title={"Music"}/>
        <Test links={filmLinks} title={"Short Films"}/>
        <Test links={otherLinks} title={"Other"}/>
      </div>
    </div>
  )
}

function VideoContainer({...props}: {
    src: string
  }) {
  return (
    <div className={"aspect-video snap-center mx-10 h-full"}>
      <iframe width="640" height="390" src={`https://www.youtube.com/embed/${props.src}`}
              title="YouTube video player" frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className={"w-full h-full"}>
      </iframe>
    </div>
  )
}

function Test({...props}: {
    links: string[],
    title: string
  }) {
  const slider = useRef<HTMLDivElement>(null);

  const [num, setNum] = useState(0);

  useEffect(() => {
    if (slider.current !== null) {
      slider.current.addEventListener("scroll", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setNum(Math.floor((slider.current.scrollLeft / slider.current.scrollWidth) * props.links.length + 0.5));
      })
    }
  }, [props?.links.length]);

  return (
    <div className={"mt-6 bg-blue-300/30 dark:bg-blue-900/40 py-10"}>
      <h3 className={"text-4xl text-center uppercase mb-8 font-bold"}>{props.title}</h3>
      <div className={"flex relative group"}>
        <ChevronLeftIcon className={"w-1/4 lg:w-20 xl:w-36 opacity-0 group-hover:opacity-100 lg:opacity-100 hidden sm:inline top-1/2 -translate-y-1/2 lg:translate-y-0 left-0 cursor-pointer absolute lg:static dark:fill-white/80 max-lg:fill-white/80"} onClick={() => {
          slider.current?.scrollBy(-slider.current.scrollWidth / props.links.length, 0);
        }}/>
        <div ref={slider} className={"w-full flex aspect-video whitespace-nowrap overflow-x-scroll snap-mandatory snap-x scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"}>
          {props.links.map((link, idx) => {
            return (
              <div key={idx} className={"aspect-video snap-center mx-10 h-full"}>
                <iframe width="640" height="390" src={`https://www.youtube.com/embed/${link}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className={"w-full h-full"}>
                </iframe>
              </div>
            )
          })}
        </div>
        <ChevronRightIcon className={"lg:w-20 xl:w-36 opacity-0 group-hover:opacity-100 lg:opacity-100 w-1/4 hidden sm:inline top-1/2 -translate-y-1/2 lg:translate-y-0 right-0 cursor-pointer absolute lg:static dark:fill-white/80 max-lg:fill-white/80"} onClick={() => {
          slider.current?.scrollBy(slider.current.scrollWidth / props.links.length, 0)
        }}/>
      </div>
      <div className={"flex justify-center gap-3 mt-6"}>
        {props.links.map((_, idx) => {
          return (
            <div key={idx} className={`rounded-full w-3 h-3 border border-black dark:border-neutral-200 cursor-pointer ${idx === num ? "bg-black dark:bg-neutral-200" : "bg-transparent"}`} onClick={() => {
              slider.current?.scrollTo((slider.current.scrollWidth / props.links.length) * idx, 0)
            }}></div>
          )
        })}
      </div>
    </div>
    )
}
