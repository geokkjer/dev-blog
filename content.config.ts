import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSeoCollection } from "@nuxtjs/seo/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection(
      asSeoCollection({
        type: "page",
        source: "blog/*.md",
        schema: z.object({
          title: z.string(),
          description: z.string(),
          date: z.string(),
          tags: z.array(z.string()).optional(),
          author: z.string().default("Student"),
        }),
      })
    ),
    projects: defineCollection(
      asSeoCollection({
        type: "page",
        source: "projects/*.md",
        schema: z.object({
          title: z.string(),
          description: z.string(),
          url: z.string().optional(),
          icon: z.string().optional(),
          status: z.enum(["active", "archived", "wip"]).default("active"),
          tags: z.array(z.string()).optional(),
        }),
      })
    ),
  },
});
