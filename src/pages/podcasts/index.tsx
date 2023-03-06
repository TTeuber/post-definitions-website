"use client";
import {api} from "~/utils/api";
import Image from "next/image";


export default function Podcasts() {
  const data = api.example.hello.useQuery();

  return (
    <div>
      <p>{data.data?.greeting?.items[0]?.snippet.title}</p>
      <div className={"uppercase"}>
        <h1>The Post Definitions Podcast</h1>
        <h2><a href="/podcasts/#podcasts">Click here to see all episodes</a></h2>
        <p>I travel the world and talk to new and old friends.</p>
        <p>We explore how the conceptual boxes we put ourselves and others into affect our lives.</p>
        <h2>Subscribe to the podcast</h2>
        <div>
          <p>links</p>
        </div>
        <p>photo</p>
        <p>It&apos;s time we step into a Post Definitions world</p>
      </div>
      {data.data?.greeting.items?.map((video, idx) => {
        return (
          <div key={idx}>
            <p>{video.snippet.title}</p>
            <p>{video.snippet.description}</p>
            <p>{video.snippet.resourceId.videoId}</p>
            <Image src={video.snippet.thumbnails.default.url}
                   alt="thumbnail"
                   height={video.snippet.thumbnails.default.height}
                   width={video.snippet.thumbnails.default.width}/>
          </div>
        )
      })}
    </div>
  )
}