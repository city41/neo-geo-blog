import clsx from 'clsx';
import { ReactNode } from 'react';
import { Root } from '../layout/Root';

import franicTitleScreenPng from './franicTitleScreen.png';
import helloWorldPng from './helloWorld.png';
import neoSpriteViewerPng from './neoSpriteViewer.png';

type HeroItemProps = {
	className?: string;
	title: string;
	children: ReactNode;
};

function HeroItem({ className, title, children }: HeroItemProps) {
	return (
		<div className={clsx(className, 'flex flex-col items-center')}>
			<div>{children}</div>
			<div className="w-full text-center py-1 bg-gray-900 text-white font-bold text-xl">
				{title}
			</div>
		</div>
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
				<div className="flex flex-row">
					<HeroItem className="flex-1" title="Franic!">
						<img
							src={franicTitleScreenPng.src}
							width={franicTitleScreenPng.width}
							height={franicTitleScreenPng.height}
							alt="Franic title screen"
						/>
					</HeroItem>
					<HeroItem className="flex-1" title="Dev Book">
						<img
							src={helloWorldPng.src}
							width={helloWorldPng.width}
							height={helloWorldPng.height}
							alt="Hello World app from the book screenshot"
						/>
					</HeroItem>
					<HeroItem className="flex-1" title="Tools">
						<img
							src={neoSpriteViewerPng.src}
							width={neoSpriteViewerPng.width}
							height={neoSpriteViewerPng.height}
							alt="Neo Sprite Viewer screenshot closeup"
						/>
					</HeroItem>
				</div>
			</div>
		</Root>
	);
}

export { IndexPage };
