"use client";
import {api} from "~/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";


export default function Podcasts() {
  const data = api.example.hello.useQuery();
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(2);

  const next = useCallback(() => {
    if (data.data !== undefined) {
      if (last < data.data.greeting.items.length) {
        setFirst(n => n + 4);
        setLast(Math.min(data.data.greeting.items.length, last + 1))
      }
    }
  }, [data.data, last])

  const prev = useCallback(() => {
    if (data.data !== undefined) {
      if (first > 0) {
        setLast(Math.max(first, 4));
        setFirst(Math.max(0, first - 5));
      }
    }
  }, [data.data, first])

  return (
    <div>
      <p>{data.data?.greeting?.items[0]?.snippet.title}</p>
      <div className={"uppercase"}>
        <h1>The Post Definitions Podcast</h1>
        <h2><Link href="/podcasts">Click here to see all episodes</Link></h2>
        <p>I travel the world and talk to new and old friends.</p>
        <p>We explore how the conceptual boxes we put ourselves and others into affect our lives.</p>
        <h2>Subscribe to the podcast</h2>
        <div>
          <p>links</p>
        </div>
        <p>photo</p>
        <p>It&apos;s time we step into a Post Definitions world</p>
      </div>
      <button onClick={() => next()}>next</button>
      <button onClick={() => prev()}>prev</button>
      <p>{first}</p>
      <p>{last}</p>
      {data.data?.greeting.items?.map((video, idx) => {
        // if (idx >= first && idx <= last) {
          return (
            <div key={idx} className={`${(idx >= first && idx <= last) ? "": "hidden"} lg:w-3/4 mx-auto my-6`}>
              <div className={"border-8 border-black grid grid-cols-[18rem_auto] grid-rows-[6rem_auto] max-sm:flex flex-col p-3 bg-blue-800 text-neutral-200"}>
                <a href={"https://youtu.be/"  + video.snippet.resourceId.videoId} target="_blank" rel="noreferrer" className={"contents"}>
                  <Image src={video.snippet.thumbnails.default.url}
                         alt="thumbnail"
                         height={video.snippet.thumbnails.default.height}
                         width={video.snippet.thumbnails.default.width}
                         className={"h-full w-full max-sm:w-full row-span-2"}/>
                  <p className={"text-2xl sm:line-clamp-3 mx-4 max-sm:mx-0 max-sm:text-xl max-sm:mt-4"}>{video.snippet.title}</p>
                  <p className={"xl:text-justify line-clamp-4 text-lg mx-4 mt-4 max-sm:mx-0 max-sm:hidden"}>{video.snippet.description}</p>
                  {/*<p className={"hidden"}>{video.snippet.resourceId.videoId}</p>*/}
                </a>
              </div>
            </div>
          )
        // }
      })}
    </div>
  )
}