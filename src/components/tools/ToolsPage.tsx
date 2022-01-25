import clsx from 'clsx';
import { ReactNode } from 'react';
import { Root } from '../layout/Root';

import typographyClasses from '../../styles/typography.module.css';

type PostEntryProps = {
	className?: string;
	title: string;
	url: string;
	children: ReactNode;
};

function ToolEntry({ className, title, url, children }: PostEntryProps) {
	return (
		<div
			className={clsx(
				className,
				'px-4 sm:px-0 border-b border-dotted border-gray-500 last:border-0'
			)}
		>
			<h2 className="group relative font-bold mb-4 text-2xl flex flex-row justify-between items-center">
				<div className="flex-1 flex flex-row gap-x-2 items-baseline">
					<div className="text-white">{title}</div>
					<a className="text-base text-blue-400" href={url}>
						homepage
					</a>
				</div>
			</h2>
			<div className={typographyClasses.typography}>{children}</div>
		</div>
	);
}
function ToolsPage() {
	return (
		<Root
			title="Tools - Matt's Neo Geo Blog"
			metaDescription="Tools for Neo Geo development"
		>
			<div className="max-w-3xl mx-auto mt-8 flex flex-col gap-y-8">
				<h1 className="text-3xl font-bold text-center">Neo Geo Dev Tools</h1>
				<p className="text-center mb-8">
					All of these tools are open source (hosted on github) and cross
					platform
				</p>
				<ToolEntry title="neosdconv" url="https://github.com/city41/neosdconv">
					<p>
						A command line tool which converts Neo Geo ROMs into the format used
						by the NeoSD flash cart. It supports all commercial ROMs but was
						really built to aid in homebrew development. My testing between it
						and NeoBuilder (TerraOnion's official tool) shows it builds
						identical .neo files.
					</p>
					<p>
						There is now a{' '}
						<a href="https://toneosd.mattgreer.dev">web version</a>, convert a
						ROM right in your browser.
					</p>
				</ToolEntry>
				<ToolEntry title="sromcrom" url="https://github.com/city41/sromcrom">
					Converts pngs into S ROMs and C ROMs. Currently alpha quality at best,
					but I am continually working on it as I am using it to build my game.
					It is a rather powerful graphics converter, it supports:
					<ul>
						<li>Tile deduplication</li>
						<li>Palette merging</li>
						<li>LSPC Auto animations</li>
						<li>Eyecatcher</li>
						<li>Code generation</li>
					</ul>
					<p>
						It is also the graphics tool being used in my{' '}
						<a href="https://neogeobook.mattgreer.dev">
							Neo Geo Development Book
						</a>
						.
					</p>
				</ToolEntry>
				<ToolEntry
					title="neospriteviewer"
					url="https://neospriteviewer.mattgreer.dev"
				>
					<p>
						A website for viewing the tiles in S and C ROMs. Very useful while
						developing to ensure your ROMs are getting created as you expect.
						Also fun to peak at commercial games with it.
					</p>
				</ToolEntry>
				<ToolEntry
					title="Neo Geo Gif Maker"
					url="https://city41.github.io/nggm"
				>
					<p>
						Not a development tool, and also very raw and experimental, but what
						the hell. This tool lets you create animated gifs from Neo Geo
						backgrounds. I used it to add more backgrounds to my{' '}
						<a href="https://fgbg.art">fighting game backgrounds website</a>.
					</p>
				</ToolEntry>
			</div>
		</Root>
	);
}

export { ToolsPage };
