"use client";
import { api } from "~/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Socials from "~/components/Socials";

export default function Podcasts() {
  const data = api.youtube.req.useQuery();
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(4);

  const next = useCallback(() => {
    if (data.data?.res !== undefined) {
      if (last + 1 < data.data.res.items.length) {
        setFirst((n) => n + 5);
        setLast(Math.min(data.data.res.items.length, last + 5));
      }
    }
  }, [data.data, last]);

  const prev = useCallback(() => {
    if (data.data !== undefined) {
      if (first > 0) {
        setLast(Math.max(first - 1, 4));
        setFirst(Math.max(0, first - 5));
      }
    }
  }, [data.data, first]);

  return (
    <div className={"mx-auto overflow-hidden lg:w-3/4"}>
      <div className={"uppercase"}>
        <h1 className={"my-10 text-center text-[min(8vw,3rem)] font-black"}>
          The Post Definitions Podcast
        </h1>
        {/*<h2><Link href="/podcasts">Click here to see all episodes</Link></h2>*/}
        <div
          className={
            "flex flex-col justify-between gap-10 border border-blue bg-blue-200/20 p-8 text-center text-2xl shadow-xl dark:bg-blue-600/20 max-lg:px-[10%] max-sm:border-x-0 sm:mx-6 sm:rounded-xl lg:mx-auto"
          }
        >
          <p>I travel the world and talk to new and old friends.</p>
          <p>
            We explore how the conceptual boxes we put ourselves and others into
            affect our lives.
          </p>
        </div>
        <h2
          className={
            "my-6 text-center text-[min(6vw,2.75rem)] font-bold sm:text-3xl"
          }
        >
          Subscribe to the podcast
        </h2>
        <div className={"my-10 flex justify-center"}>
          <Socials
            list={["apple", "spotify", "youtube", "tiktok"]}
            className={"gap-8 [&>a>img]:w-10"}
          />
        </div>
        {/*<p>photo</p>*/}
        <p className={"py-6 text-center text-lg sm:text-xl"}>
          It&apos;s time we step into a Post Definitions world
        </p>
      </div>
      <div className={"relative mb-6 flex flex-col gap-6 sm:max-lg:mx-6"}>
        <div
          id={"posts"}
          className={"absolute -top-20 h-20 max-lg:-top-36 max-lg:h-36"}
        ></div>
        {data.data?.res?.items?.slice(first, last + 1).map((video, idx) => {
          return (
            <div key={idx}>
              <div
                className={
                  "grid grid-cols-[18rem_auto] grid-rows-[6rem_auto] flex-col border border-blue bg-blue-200/20 p-5 shadow-lg hover:bg-blue-400/30 dark:bg-blue-800/20 dark:hover:bg-blue-600/20 max-md:grid-rows-[12rem_auto] max-sm:flex sm:rounded-xl sm:shadow-xl"
                }
              >
                <a
                  href={"https://youtu.be/" + video.snippet.resourceId.videoId}
                  target="_blank"
                  rel="noreferrer"
                  className={`contents`}
                >
                  <div
                    className={
                      "flex h-full w-full items-center bg-black shadow-lg max-sm:w-full md:row-span-2"
                    }
                  >
                    <Image
                      src={video.snippet.thumbnails.high.url}
                      alt="thumbnail"
                      height={video.snippet.thumbnails.high.height}
                      width={video.snippet.thumbnails.high.width}
                      className={"object-contain"}
                      loading={"lazy"}
                    />
                  </div>
                  <p
                    className={
                      "ml-4 text-2xl max-md:row-start-2 max-md:mx-0 max-md:mt-4 max-sm:text-xl sm:line-clamp-3"
                    }
                  >
                    {video.snippet.title}
                  </p>
                  <p
                    className={
                      "ml-4 text-lg max-md:row-span-2 max-md:line-clamp-[12] max-sm:mx-0 max-sm:hidden md:mt-4 md:line-clamp-4 xl:text-justify"
                    }
                  >
                    {video.snippet.description}
                  </p>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className={"my-5 flex items-center justify-center"}>
        <Link
          href="/podcasts/#posts"
          className={`contents ${
            first === 0 ? "pointer-events-none [&>*]:fill-neutral-400" : ""
          }`}
        >
          <ChevronLeftIcon
            onClick={() => prev()}
            className={"w-12 cursor-pointer"}
          />
        </Link>
        <p className={"mx-6 text-xl"}>
          {first + 1}-{Math.min(data.data?.res?.items.length ?? 0, last + 1)} of{" "}
          {data.data?.res?.items.length ?? "?"}
        </p>
        <Link
          href="/podcasts/#posts"
          className={`contents ${
            last + 1 === data.data?.res?.items.length
              ? "pointer-events-none [&>*]:fill-neutral-400"
              : ""
          }`}
        >
          <ChevronRightIcon
            onClick={() => next()}
            className={"w-12 cursor-pointer"}
          />
        </Link>
      </div>
    </div>
  );
}
