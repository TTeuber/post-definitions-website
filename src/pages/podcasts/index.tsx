"use client";
import {api} from "~/utils/api";


export default function Podcasts() {
  // const data = api.example.hello.useQuery({text: "hello"})
  const data = api.example.hello.useQuery({text: "test"});
  type VideoData = {
    items: {
      snippet: {
        title: string,
        description: string,
        thumbnails: {
          default: {
            url: string;
            width: number
            height: number
          }
        },
        resourceId: {
          videoId: string
        }
      }
    }[]
  } | undefined
  // const [videoData, setVideoData] = useState<VideoData>();

  // useEffect(() => {
  //   fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=UUxTaJgDzarpa7KPUAPoJUow&key=${process.env.YOUTUBE_API ?? ''}`).then((res) => res.json().then(data => setVideoData(data as VideoData))).catch(error => console.log(error))
  // }, [])

  return (
    <>
      {/*<p>{data.data?.greeting}</p>*/}
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
      {/*{videoData?.items.map((video, idx) => {*/}
      {/*  return (*/}
      {/*    <div key={idx}>*/}
      {/*      <p>{video.snippet.title}</p>*/}
      {/*    </div>*/}
      {/*  )*/}
      {/*})}*/}

    </>
  )
}