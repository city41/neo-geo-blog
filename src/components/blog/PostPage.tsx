import { dateToHumanString } from '../../util';
import { Root } from '../layout/Root';

import typographyClasses from '../../styles/typography.module.css';

type PostPageProps = {
	meta: PostMeta;
	content: string;
};

function PostPage({ meta, content }: PostPageProps) {
	return (
		<Root title={meta.title} metaDescription={meta.description ?? ''}>
			<div className="max-w-3xl mx-auto mt-8 flex flex-col">
				<h1 className="font-bold text-3xl">{meta.title}</h1>
				<time className="mt-2 mb-8">{dateToHumanString(meta.date)}</time>
				<div
					className={typographyClasses.typography}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</div>
		</Root>
	);
}

export { PostPage };
export type { PostPageProps };
