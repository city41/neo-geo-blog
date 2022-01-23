import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import markdownToHtml from './markdown';

const postsDirectory = join(process.cwd(), 'posts');

function isString(v: unknown): boolean {
	const vs = v as string;

	return typeof vs === 'string' && vs.trim().length > 0;
}

function isCategory(v: unknown): boolean {
	return v === 'franic' || v === 'neobook' || v === 'neotools';
}

function isBoolean(v: unknown): boolean {
	const vs = String(v);

	return vs === 'true' || vs === 'false';
}

function verifyMeta(meta: unknown): meta is PostMeta {
	return !!(
		meta != null &&
		typeof meta === 'object' &&
		isString((meta as any).title) &&
		isString((meta as any).date) &&
		isCategory((meta as any).category) &&
		(typeof (meta as any).description === 'undefined' ||
			(isString((meta as any).description) &&
				(typeof (meta as any).announcement === 'undefined' ||
					isBoolean((meta as any).announcement))))
	);
}

async function getPostBySlug(slug: string): Promise<Post> {
	const fullPath = join(postsDirectory, slug, 'index.md');
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	data.date = data.date.toString();

	if (!verifyMeta(data)) {
		throw new Error(`${slug} has missing or invalid meta data`);
	}

	const parsedContent = await markdownToHtml(content);

	return { slug, meta: data, content: parsedContent };
}

async function getAllPosts(): Promise<Post[]> {
	const slugs = fs.readdirSync(postsDirectory);
	const docs = slugs.map((slug) => getPostBySlug(slug));

	return Promise.all(docs);
}

export { getPostBySlug, getAllPosts };
