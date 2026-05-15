import { defineCollection, z } from "astro:content";

const standardsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional().default(false),
    publishedAt: z.date(),
  }),
});

export const collections = {
  standards: standardsCollection,
};
