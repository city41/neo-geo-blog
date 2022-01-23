import clsx from 'clsx';
import { ReactNode } from 'react';
import { Root } from '../layout/Root';

import franicTitleScreenPng from './franicTitleScreen.png';
import helloWorldPng from './helloWorld.png';
import neoSpriteViewerPng from './neoSpriteViewer.png';

type HeroItemProps = {
	className?: string;
	title: string;
	description: string;
	url: string;
	children: ReactNode;
};

function HeroItem({
	className,
	title,
	description,
	url,
	children,
}: HeroItemProps) {
	return (
		<a href={url}>
			<div
				className={clsx(
					className,
					'flex flex-col items-center group mx-auto border-t-4 border-transparent hover:border-blue-700'
				)}
				style={{ maxWidth: 320 }}
			>
				<div>{children}</div>
				<div className="w-full text-center py-1 bg-gray-900 group-hover:bg-blue-700 text-white font-bold text-xl">
					<div>{title}</div>
					<div className="w-full text-xs text-gray-300 font-normal">
						{description}
					</div>
				</div>
			</div>
		</a>
	);
}

function IndexPage() {
	return (
		<Root
			title="Neo Geo Development Blog"
			metaDescription="My journey making games, tools, and books for the Neo Geo"
		>
			<div className="max-w-3xl mx-auto">
				<p className="mx-auto my-8 text-center max-w-xl">
					Hi I&apos;m Matt, I like to hack on the Neo Geo.
				</p>
				<div className="flex flex-col gap-y-8 sm:flex-row">
					<HeroItem
						className="flex-1"
						title="Franic!"
						description="A Neo Geo game I am making"
						url="/franic"
					>
						<img
							src={franicTitleScreenPng.src}
							width={franicTitleScreenPng.width}
							height={franicTitleScreenPng.height}
							alt="Franic title screen"
						/>
					</HeroItem>
					<HeroItem
						className="flex-1"
						title="Dev Book"
						description="A book on how to code the Neo"
						url="https://neogeobook.mattgreer.dev"
					>
						<img
							src={helloWorldPng.src}
							width={helloWorldPng.width}
							height={helloWorldPng.height}
							alt="Hello World app from the book screenshot"
						/>
					</HeroItem>
					<HeroItem
						className="flex-1"
						title="Tools"
						description="Neo Geo tools I have created"
						url="/tools"
					>
						<img
							src={neoSpriteViewerPng.src}
							width={neoSpriteViewerPng.width}
							height={neoSpriteViewerPng.height}
							alt="Neo Sprite Viewer screenshot closeup"
						/>
					</HeroItem>
				</div>
				<h1 className="font-bold text-2xl mt-12">Latest Updates</h1>
			</div>
		</Root>
	);
}

export { IndexPage };
