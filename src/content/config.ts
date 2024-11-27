import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({image}) => z.object({
    title: z.string(),
    url: z.string(),
    author: z.string(),
    date: z.string(),
    imageUrl: image(),
    external: z.boolean(),
    originalHost: z.string().optional(),
  })
});

export const collections = {
  blog: blogCollection,
};