"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Socials from "~/components/Socials";

export default function Home() {
  return (
    <div className={"overflow-hidden text-2xl"}>
      <div
        className={
          "relative flex h-[calc(100vh-4rem)] min-h-[500px] flex-col justify-between gap-3 py-10 text-center max-lg:py-5 max-sm:min-h-[550px] lg:h-screen"
        }
      >
        <h1
          className={
            "mx-4 text-3xl font-black uppercase [line-height:1] max-[360px]:text-2xl sm:[font-size:clamp(2rem,5vw,3rem)] lg:text-5xl"
          }
        >
          The Post Definitions Podcast
        </h1>
        <div className={"h-[50vh] object-center "}>
          <Image
            priority
            src={"/photos/NewerPCCover.jpg"}
            alt={"podcast cover"}
            height={400}
            width={400}
            className={
              "mx-auto h-full w-auto border-2 border-blue shadow-[7px_8px] shadow-blue/50"
            }
          />
        </div>
        <h2
          className={
            "z-10 p-6 text-2xl font-bold uppercase max-[360px]:text-xl sm:[font-size:clamp(1.5rem,3.5vw,2.5rem)]"
          }
        >
          The Podcast for humans and identity
        </h2>
      </div>
      <div
        className={
          "flex min-h-[500px] flex-col justify-between bg-white/20 p-6 text-center dark:bg-black/20 sm:h-[calc(100vh-4rem)] lg:h-screen"
        }
      >
        <h2 className={"text-4xl font-bold uppercase"}>Post Definitions</h2>
        <div
          className={
            "float-right inline hidden h-3/4 w-[40%] border object-fill"
          }
        >
          <Image
            src={"/photos/fredbw2.jpg"}
            alt={"fred"}
            height={400}
            width={400}
            className={"h-full object-fill"}
          />
        </div>
        <div
          className={
            "clear-left m-6 flex grow flex-col justify-between italic max-sm:gap-6"
          }
        >
          <p>Has someone ever made a premature assumption about you?</p>
          <p>Did you ever internalize it?</p>
          <p>Where does your identity come from?</p>
          <p>How about you sense of self?</p>
          <p>Your worth?</p>
          <p>Your Actions?</p>
          <p className={""}>
            When we put ourselves and others in boxes, the results range from
            innocent misunderstandings and jokes to racism, sexism, classism,
            genocide, and more.
          </p>
        </div>
        <Link
          href="/podcasts"
          className={"uppercase underline underline-offset-2"}
        >
          Learn More
        </Link>
      </div>
      <div
        className={
          "flex min-h-fit flex-col justify-between p-6 max-sm:gap-6 sm:h-[calc(100vh-4rem)] lg:h-screen"
        }
      >
        <h2 className={"text-center text-2xl font-bold uppercase sm:text-4xl"}>
          The Post Definitions Podcast
        </h2>
        <p
          className={
            "mx-auto rounded-xl border border-blue bg-white/20 p-6 text-center shadow-md dark:bg-black/20 max-sm:contents lg:w-3/4"
          }
        >
          I travel the world and talk to new and old friends. We explore how the
          conceptual boxes we put ourselves and others into affect our lives.
        </p>
        <h3 className={"text-center uppercase"}>Subscribe and listen now</h3>
        <div className={"mx-auto"}>
          <Socials
            list={["tiktok", "spotify", "apple", "youtube"]}
            className={"[&>a>img]:w-8 md:[&>a>img]:w-12"}
          />
        </div>
        {/*<p>image</p>*/}
        <h3 className={"text-center uppercase"}>
          It&apos;s time we step into a post definitions world
        </h3>
      </div>
      <div
        className={
          "flex min-h-fit flex-col items-center justify-between bg-white/20 py-6 dark:bg-black/20 max-sm:gap-6 sm:h-[calc(100vh-4rem)] lg:h-screen"
        }
      >
        <h2 className={"my-6 text-5xl font-bold uppercase sm:text-6xl"}>
          Who am I?
        </h2>
        <div
          className={
            "relative mx-6 aspect-square min-h-[300px] w-auto overflow-hidden border-2 border-blue shadow-[7px_8px] shadow-blue/50 sm:h-[50vh]"
          }
        >
          <Image
            src={"/photos/fred.jpg"}
            alt={"fred"}
            width={500}
            height={500}
            className={"h-full w-full"}
          />
        </div>
        <div
          className={
            "m-6 rounded-xl border border-blue bg-white/20 shadow dark:bg-black/20 max-sm:contents max-sm:text-center lg:w-3/4"
          }
        >
          <p className={"m-6"}>
            That&apos;s a big question. The best way to find out is by listening
            to me speak on the podcast or by reaching out for a chat.{" "}
            <Link href="/about" className={"underline underline-offset-4"}>
              But for Now...
              <ArrowTopRightOnSquareIcon className={"inline h-6 px-1"} />
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
