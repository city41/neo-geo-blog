import {
	GetStaticPathsContext,
	GetStaticPathsResult,
	GetStaticPropsContext,
	GetStaticPropsResult,
} from 'next';
import { PostPage } from '../../components/blog/PostPage';
import type { PostPageProps } from '../../components/blog/PostPage';
import { getAllPosts, getPostBySlug } from '../../lib/posts';
import markdownToHtml from '../../lib/markdown';

export const config = {
	unstable_runtimeJS: false,
};

type NextSlugPageProps = PostPageProps;

export async function getStaticProps({
	params,
}: GetStaticPropsContext<{
	slug: string;
}>): Promise<GetStaticPropsResult<NextSlugPageProps>> {
	const post = await getPostBySlug(params!.slug as string);

	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			...post,
			content,
		},
	};
}

export async function getStaticPaths(
	_context: GetStaticPathsContext
): Promise<GetStaticPathsResult> {
	const posts = await getAllPosts();

	return {
		paths: posts
			.filter((p) => !p.meta.announcement)
			.map((post) => {
				return {
					params: {
						slug: post.slug,
					},
				};
			}),
		fallback: false,
	};
}

export default function NextSlugPage(props: NextSlugPageProps) {
	return <PostPage {...props} />;
}
