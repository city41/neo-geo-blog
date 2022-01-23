import { Root } from '../layout/Root';

import franicTitleScreenPng from '../index/franicTitleScreen.png';

function FranicPage() {
	return (
		<Root
			title="Franic! - Matt's Neo Geo Blog"
			metaDescription="My Neo Geo game, Franic!, a competitive platformer"
		>
			<div className="max-w-3xl mx-auto mt-8 flex flex-col gap-y-8">
				<p className="max-w-xl">
					<span className="bg-red-700 text-white font-bold px-2 py-1">
						Hey!
					</span>{' '}
					Early days! This page will flesh out more as the game progresses.
					Check out the{' '}
					<a href="/" className="text-blue-400 underline">
						main blog page
					</a>{' '}
					for updates, I will blog as I build the game.
				</p>
				<img
					src={franicTitleScreenPng.src}
					width={franicTitleScreenPng.width * 2}
					height={franicTitleScreenPng.height * 2}
					alt="Franic! title screen"
				/>
				<p className="max-w-xl">
					Franic! is a game I am making for the Neo Geo. It is a
					&quot;competitive platformer&quot;, a genre that I don&apos;t think
					has been explored much. It is essentially a cross between a fighter
					and a platformer.
				</p>
				<p className="max-w-xl">
					Like a fighter, you choose your character and fight on a stage. The
					winner of the game is decided best 2 out of 3. The goal is to collect
					as much loot as possible in the time limit, while navigating
					obstacles, avoiding enemies, wall jumping, air dashing, and generally
					surviving in a platformer oriented arena.
				</p>
				<h2 className="font-bold text-2xl">Status</h2>
				<ul className="list-disc flex flex-col gap-y-2">
					<li>
						<b>Engine:</b> well established and getting pretty mature.
					</li>
					<li>
						<b>Game design:</b> established but being iterated on
					</li>
					<li>
						<b>Graphics:</b> very early, mostly just placeholder for now
					</li>
					<li>
						<b>Audio:</b> extremely early, all placeholder or none at all
					</li>
				</ul>
				<h2 className="font-bold text-2xl">Wait, three players?</h2>
				<p>
					One goal I have is to make this a three player game. I plan to build a
					multitap for the Neo Geo using an Arduino. At this point, I am
					confident I can get a solid three player experience working. I am also
					pushing for four, but less confident there.
				</p>
				<h2 className="font-bold text-2xl">Help Wanted!</h2>
				<p>
					I&apos;d love to join up with a pixel artist and/or musician. My main
					skills are programming.
				</p>
			</div>
		</Root>
	);
}

export { FranicPage };
