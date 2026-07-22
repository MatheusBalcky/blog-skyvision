import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.mdx' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(10).max(90),
			description: z.string().min(40).max(180),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.string().min(2),
			tags: z.array(z.string()).min(1),
			cover: image(),
			coverAlt: z.string().min(10),
			author: z.string().default('Equipe Sky Vision'),
			type: z.enum(['article', 'review', 'guide', 'comparison']).default('article'),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { articles };
