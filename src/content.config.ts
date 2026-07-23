import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { categoryNames } from './data/categories';

const products = defineCollection({
	loader: glob({ base: './src/content/products', pattern: '**/*.{yaml,yml,json}' }),
	schema: ({ image }) =>
		z.object({
			name: z.string().min(2).max(100),
			brand: z.string().min(2).max(60),
			slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
			image: image(),
			imageAlt: z.string().min(10),
			affiliateUrl: z.union([z.url(), z.literal('')]).optional(),
			affiliateStore: z.string().min(2).max(60).default('Mercado Livre'),
			active: z.boolean().default(true),
			updatedDate: z.coerce.date(),
			specifications: z.record(z.string(), z.string()).default({}),
		}),
});

const articles = defineCollection({
	loader: glob({ base: './src/content/articles', pattern: '**/*.mdx' }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(10).max(90),
			description: z.string().min(40).max(180),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			category: z.enum(categoryNames),
			tags: z.array(z.string()).min(1),
			products: z.array(reference('products')).default([]),
			cover: image(),
			coverAlt: z.string().min(10),
			author: z.string().default('Equipe Sky Vision'),
			type: z.enum(['article', 'review', 'guide', 'comparison']).default('article'),
			featured: z.boolean().default(false),
			draft: z.boolean().default(false),
		}),
});

export const collections = { articles, products };
