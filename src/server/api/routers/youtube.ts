import { z } from "zod";
import fetch from 'node-fetch';
import {env} from '../../../env.mjs';
import fredData from "../../../../public/fred-data.json";

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

// const YoutubeData: VideoData = fredData;

// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
const request = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2C%20snippet&maxResults=50&playlistId=UUxTaJgDzarpa7KPUAPoJUow&key=${env.YOUTUBE_API_KEY}`)
const YoutubeData: VideoData = await request.json() as VideoData;

export const youtubeRouter = createTRPCRouter({
  req: publicProcedure
    .query(() => {
      return {
        res: YoutubeData,
      };
    }),
});
