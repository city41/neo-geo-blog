import clsx from 'clsx';
import { AiOutlineNotification, AiOutlineFileText } from 'react-icons/ai';

import typographyClasses from '../../styles/typography.module.css';
import { dateToHumanString } from '../../util';

type PostEntryProps = {
	className?: string;
	meta: PostMeta;
	content: string;
	slug?: string;
};

const readableCategoryString: Record<Category, string> = {
	franic: 'franic!',
	neotools: 'tools',
	neobook: 'dev book',
};

function PostEntry({ className, meta, content, slug }: PostEntryProps) {
	const { title, description, date, announcement, category } = meta;

	const Icon = announcement ? AiOutlineNotification : AiOutlineFileText;

	const body = (
		<div
			className={clsx(
				className,
				'px-4 sm:px-0 border-b border-dotted border-gray-500 last:border-0'
			)}
		>
			<h2 className="group relative font-bold mb-4 text-2xl flex flex-row justify-between items-center">
				<Icon
					className="w-6 h-6 mr-4 text-white"
					title={announcement ? 'announcement' : 'article'}
				/>
				<div className="flex-1 flex flex-row gap-x-2 items-center">
					<div className="text-white flex flex-row gap-x-2 items-center">
						{title}
					</div>
					<div
						className={clsx('inline-block px-2 py-1 font-bold text-sm', {
							'bg-franic': category === 'franic',
							'bg-neotools': category === 'neotools',
							'bg-neobook': category === 'neobook',
						})}
					>
						{readableCategoryString[category]}
					</div>
				</div>
				<time className="text-sm text-gray-400" dateTime={date}>
					{dateToHumanString(date)}
				</time>
			</h2>
			{!!announcement && (
				<div
					className={clsx(typographyClasses.typography, 'ml-10')}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			)}
			{!announcement && (
				<div className={clsx(typographyClasses.typography, 'ml-10')}>
					{description}
				</div>
			)}
		</div>
	);

	if (announcement) {
		return body;
	} else {
		return <a href={`/blog/${slug}`}>{body}</a>;
	}
}

export { PostEntry };
