"use client";
import {api} from "~/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/20/solid";


export default function Podcasts() {
  const data = api.youtube.req.useQuery();
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(4);

  const next = useCallback(() => {
    if (data.data?.res !== undefined) {
      if (last+1 < data.data.res.items.length) {
        setFirst(n => n + 5);
        setLast(Math.min(data.data.res.items.length, last + 5))
      }
    }
  }, [data.data, last])

  const prev = useCallback(() => {
    if (data.data !== undefined) {
      if (first > 0) {
        setLast(Math.max(first-1, 4));
        setFirst(Math.max(0, first - 5));
      }
    }
  }, [data.data, first])

  return (
    <div className={"overflow-hidden lg:w-3/4 mx-auto"}>
      <div className={"uppercase"}>
        <h1 className={"text-[min(8vw,3.5rem)] text-center font-black my-10"}>The Post Definitions Podcast</h1>
        {/*<h2><Link href="/podcasts">Click here to see all episodes</Link></h2>*/}
        <div className={"bg-blue-200/20 dark:bg-blue-600/20 flex flex-col justify-between text-center max-lg:px-[10%] gap-10 p-8 text-2xl shadow-xl border border-blue max-sm:border-x-0 sm:mx-6 lg:mx-auto sm:rounded-xl"}>
          <p>I travel the world and talk to new and old friends.</p>
          <p>We explore how the conceptual boxes we put ourselves and others into affect our lives.</p>
        </div>
        <h2 className={"text-center text-[min(6vw,2.75rem)] sm:text-3xl my-6 font-bold"}>Subscribe to the podcast</h2>
        <div>
          <p>links</p>
        </div>
        {/*<p>photo</p>*/}
        <p className={"text-center text-lg sm:text-xl py-6"}>It&apos;s time we step into a Post Definitions world</p>
      </div>
      <div className={"flex flex-col gap-6 mb-6 relative sm:max-lg:mx-6"}>
        <div id={"posts"} className={"absolute h-20 -top-20 max-lg:h-36 max-lg:-top-36"}></div>
        {data.data?.res?.items?.slice(first, last+1).map((video, idx) => {
          return (
            <div key={idx} >
              <div className={"grid grid-cols-[18rem_auto] grid-rows-[6rem_auto] max-md:grid-rows-[12rem_auto] max-sm:flex flex-col p-5 bg-blue-200/20 hover:bg-blue-400/30 dark:bg-blue-800/20 dark:hover:bg-blue-600/20 border border-blue shadow-lg sm:shadow-xl sm:rounded-xl"}>
                <a href={"https://youtu.be/"  + video.snippet.resourceId.videoId} target="_blank" rel="noreferrer" className={`contents`}>
                  <div className={"bg-black h-full w-full max-sm:w-full md:row-span-2 flex items-center shadow-lg"}>
                    <Image src={video.snippet.thumbnails.high.url}
                           alt="thumbnail"
                           height={video.snippet.thumbnails.high.height}
                           width={video.snippet.thumbnails.high.width}
                           className={"object-contain"}/>
                  </div>
                  <p className={"text-2xl sm:line-clamp-3 ml-4 max-md:mx-0 max-sm:text-xl max-md:mt-4 max-md:row-start-2"}>{video.snippet.title}</p>
                  <p className={"xl:text-justify max-md:line-clamp-[12] md:line-clamp-4 text-lg ml-4 md:mt-4 max-sm:mx-0 max-sm:hidden max-md:row-span-2"}>{video.snippet.description}</p>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <div className={"flex justify-center items-center my-5"}>
        <Link href="/podcasts/#posts" className={`contents ${first === 0 ? "pointer-events-none [&>*]:fill-neutral-400" : ""}`}>
          <ChevronLeftIcon onClick={() => prev()} className={"w-12 cursor-pointer"}/>
        </Link>
        <p className={"text-xl mx-6"}>{first+1}-{Math.min(data.data?.res?.items.length ?? 0, last+1)} of {data.data?.res?.items.length ?? "?"}</p>
        <Link href="/podcasts/#posts" className={`contents ${last+1 === data.data?.res?.items.length ? "pointer-events-none [&>*]:fill-neutral-400" : ""}`}>
          <ChevronRightIcon onClick={() => next()} className={"w-12 cursor-pointer"}/>
        </Link>
      </div>
    </div>
  )
}