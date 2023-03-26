import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const musicLinks = ["ReY4yVkoDc4", "RRRgK9TOes0", "g9NuX3NJ52o"];
  const filmLinks = ["b87B7zyucgI", "uMZa5_xK2ek"];
  const otherLinks = ["wVh6BQyd9DY"];

  return (
    <div className={"mx-auto overflow-hidden lg:w-3/4"}>
      <h1
        className={
          "my-10 text-center text-4xl font-black uppercase max-lg:m-10 sm:text-6xl"
        }
      >
        Who am I?
      </h1>
      <div
        className={
          "my-10 flex items-center justify-between px-6 text-xl uppercase max-lg:m-10 max-sm:flex-col max-sm:gap-10 sm:flex"
        }
      >
        <h3>Philosopher</h3>
        <h3 className={""}>Life Nerd</h3>
        <h3>World Traveler</h3>
        <h3 className={"inline text-center sm:hidden 2xl:inline"}>
          Host of the Post Definitions Podcast
        </h3>
      </div>
      <div
        className={
          "mx-auto my-10 aspect-square w-[50vh] overflow-hidden border-2 border-blue object-center shadow-[7px_8px] shadow-blue/50 max-sm:w-[75vw]"
        }
      >
        <Image
          src={"/photos/fred2.jpg"}
          alt={"fred"}
          height={400}
          width={400}
          className={"w-full"}
        />
      </div>
      <div
        className={
          "mx-auto overflow-hidden border border-blue bg-blue-300/10 shadow-xl dark:bg-blue-700/10 sm:mb-10 sm:rounded-xl sm:max-lg:m-10"
        }
      >
        <div className={"p-6 [&>p]:mt-6"}>
          <h2 className={"mb-6 text-center text-2xl font-bold uppercase"}>
            I&apos;m Freddie
          </h2>
          <p className={"indent-8"}>
            In 2021 I graduated with from my Bachelor’s Degree from the
            University of Washington with a double major in Mathematics and
            Philosophy. I took 6 courses on probability theory, 5 on computer
            science, 3 on Italian language, and a lot on film studies.
          </p>
          <p className={"indent-8"}>
            I like applying my background in math, logic, and software dev to
            solving problems I deem important. For me, that means helping start
            ups in conservation. I now work as Lead Data Scientist at Xylo
            Systems, an Australian start up taking on the giant task of
            utilising data for understanding biodiversity.
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
            My favorite podcast is &quot;Philosophize This!&quot; by Steven
            West. My favorite philosopher is Søren Kierkegaard. My favorite
            authors are Milan Kundera and Herman Hesse. Some of my favorite
            books are The Unbearable Lightness of Being by Milan Kundera, The
            Picture of Dorian Grey by Oskar Wilde, and At The Existentialist
            Cafe by Sarah Bakewell. Some of my favorite film directors are
            Miyazaki, Wes Anderson, Federico Fellini, Spike Lee... Some of my
            favorite musicians/bands are The Minds of 99, The Movement, Elliot
            Smith, Phoebe Bridgers, Tom Misch, Georgio Poi, Feu! Chatterton,
            Glass Animals...
          </p>
          <p className={"indent-8"}>
            For sport, these days I surf and practice yoga. At other times I
            rock climb and take any opportunities that come my way.
          </p>
        </div>
        <hr className={"mx-10 mt-2 border border-blue"} />
        <h2 className={"my-6 text-center text-xl"}>
          Some Random bits on YouTube I like:
        </h2>
        <Test links={musicLinks} title={"Music"} />
        <Test links={filmLinks} title={"Short Films"} />
        <Test links={otherLinks} title={"Other"} />
      </div>
    </div>
  );
}

function VideoContainer({ ...props }: { src: string }) {
  return (
    <div className={"mx-10 aspect-video h-full snap-center"}>
      <iframe
        width="640"
        height="390"
        src={`https://www.youtube.com/embed/${props.src}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className={"h-full w-full"}
      ></iframe>
    </div>
  );
}

function Test({ ...props }: { links: string[]; title: string }) {
  const slider = useRef<HTMLDivElement>(null);

  const [num, setNum] = useState(0);

  useEffect(() => {
    if (slider.current !== null) {
      slider.current.addEventListener("scroll", () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setNum(
          Math.floor(
            (slider.current!.scrollLeft / slider.current!.scrollWidth) *
              props.links.length +
              0.5
          )
        );
      });
    }
  }, [props?.links.length]);

  return (
    <div className={"mt-6 bg-blue-300/30 py-10 dark:bg-blue-900/40"}>
      <h3 className={"mb-8 text-center text-4xl font-bold uppercase"}>
        {props.title}
      </h3>
      <div className={"group relative flex"}>
        <ChevronLeftIcon
          className={
            "absolute top-1/2 left-0 hidden w-1/4 -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 dark:fill-white/80 max-lg:fill-white/80 sm:inline lg:static lg:w-20 lg:translate-y-0 lg:opacity-100 xl:w-36"
          }
          onClick={() => {
            slider.current?.scrollBy(
              -slider.current.scrollWidth / props.links.length,
              0
            );
          }}
        />
        <div
          ref={slider}
          className={
            "flex aspect-video w-full snap-x snap-mandatory overflow-x-scroll scroll-smooth whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          }
        >
          {props.links.map((link, idx) => {
            return (
              <div
                key={idx}
                className={"mx-10 aspect-video h-full snap-center"}
              >
                <iframe
                  width="640"
                  height="390"
                  src={`https://www.youtube.com/embed/${link}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className={"h-full w-full"}
                ></iframe>
              </div>
            );
          })}
        </div>
        <ChevronRightIcon
          className={
            "absolute top-1/2 right-0 hidden w-1/4 -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 dark:fill-white/80 max-lg:fill-white/80 sm:inline lg:static lg:w-20 lg:translate-y-0 lg:opacity-100 xl:w-36"
          }
          onClick={() => {
            slider.current?.scrollBy(
              slider.current.scrollWidth / props.links.length,
              0
            );
          }}
        />
      </div>
      <div className={"mt-6 flex justify-center gap-3"}>
        {props.links.map((_, idx) => {
          return (
            <div
              key={idx}
              className={`h-3 w-3 cursor-pointer rounded-full border border-black dark:border-neutral-200 ${
                idx === num ? "bg-black dark:bg-neutral-200" : "bg-transparent"
              }`}
              onClick={() => {
                slider.current?.scrollTo(
                  (slider.current.scrollWidth / props.links.length) * idx,
                  0
                );
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
