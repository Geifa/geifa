// Importa las utilidades de `astro:content`
import { z, defineCollection } from "astro:content";
// Define un `type` y un `schema` para cada colección
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string().default('/geifa/'),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
});

export const collections = {
  posts: postsCollection,
};