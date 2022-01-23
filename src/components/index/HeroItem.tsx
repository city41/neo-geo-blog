import { ReactNode } from 'react';
import clsx from 'clsx';

type HeroItemProps = {
	className?: string;
	title: string;
	description: string;
	url: string;
	type: 'franic' | 'neobook' | 'neotools';
	children: ReactNode;
};

function HeroItem({
	className,
	title,
	description,
	url,
	type,
	children,
}: HeroItemProps) {
	return (
		<a href={url}>
			<div
				className={clsx(
					className,
					'flex flex-col items-center group mx-auto border-t-4 border-transparent',
					{
						'hover:border-franic-fade': type === 'franic',
						'hover:border-neobook-fade': type === 'neobook',
						'hover:border-neotools-fade': type === 'neotools',
					}
				)}
				style={{ maxWidth: 320 }}
			>
				<div>{children}</div>
				<div
					className={clsx(
						'w-full text-center py-1 group-hover:bg-blue-700 text-white font-bold text-xl',
						{
							'bg-franic group-hover:bg-franic-fade': type === 'franic',
							'bg-neobook group-hover:bg-neobook-fade': type === 'neobook',
							'bg-neotools group-hover:bg-neotools-fade': type === 'neotools',
						}
					)}
				>
					<div>{title}</div>
					<div className="w-full text-xs text-gray-300 font-normal">
						{description}
					</div>
				</div>
			</div>
		</a>
	);
}

export { HeroItem };
