import { z } from "zod";

import fredData from "../../../../public/fredData.json";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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

const YoutubeData: VideoData = fredData;
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&playlistId=UUxTaJgDzarpa7KPUAPoJUow&key=AIzaSyAF3oSdYZroKWEqlGZEGS8HlE8V1SBzZCA").then((res) => res.json().then(data => YoutubeData = data as VideoData)).catch(err => console.log(err))

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .query(() => {
      return {
        greeting: YoutubeData,
      };
    }),
});
