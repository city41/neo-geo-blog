import { Root } from '../layout/Root';
import { HeroItem } from './HeroItem';

import franicTitleScreenPng from './franicTitleScreen.png';
import helloWorldPng from './helloWorld.png';
import neoSpriteViewerPng from './neoSpriteViewer.png';
import { PostEntry } from './PostEntry';

type IndexPageProps = {
	posts: Post[];
};

function IndexPage({ posts }: IndexPageProps) {
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
						type="franic"
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
						type="neobook"
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
						type="neotools"
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
				<h1 className="font-bold text-3xl mt-16 text-center">Latest Updates</h1>
				{posts.map((post, i) => {
					return (
						<PostEntry
							className={i === 0 ? 'mt-12' : 'mt-24'}
							key={post.slug}
							meta={post.meta}
							content={post.content}
							slug={post.slug}
						/>
					);
				})}
			</div>
		</Root>
	);
}

export { IndexPage };
export type { IndexPageProps };
