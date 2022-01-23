import { GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { IndexPage } from '../components/index/IndexPage';
import type { IndexPageProps } from '../components/index/IndexPage';
import { getAllPosts } from '../lib/posts';

export const config = {
	unstable_runtimeJS: false,
};

type NextIndexPageProps = IndexPageProps;

export async function getStaticProps({}: GetStaticPropsContext): Promise<
	GetStaticPropsResult<NextIndexPageProps>
> {
	const allPosts = await getAllPosts();

	return {
		props: {
			posts: allPosts.map((p) => ({
				slug: p.slug,
				meta: p.meta,
				content: p.content,
			})),
		},
	};
}

function NextIndex(props: NextIndexPageProps) {
	return <IndexPage {...props} />;
}

export default NextIndex;
