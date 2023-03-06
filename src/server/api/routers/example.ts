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

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .query(() => {
      return {
        greeting: YoutubeData,
      };
    }),
});
