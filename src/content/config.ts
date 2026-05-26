import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    country: z.string().default('Bangladesh'),
    language: z.enum(['English', 'Bangla']),
    newspaper: z.string().optional(),
    publishedDate: z.string().optional(),
    summary: z.string(),
    clipping: z.string().optional(),
    externalUrl: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  articles,
};
