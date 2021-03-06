import React from 'react';
import clsx from 'clsx';
import styles from './Root.module.css';
import logoSvg from './logo.svg';

type HeaderProps = {
	className?: string;
};

function MenuLink(props: JSX.IntrinsicElements['a']) {
	return (
		<a
			{...props}
			className={clsx(
				props.className,
				'text-link cursor-pointer hover:underline'
			)}
		/>
	);
}

function Header({ className }: HeaderProps) {
	return (
		<header className={clsx(className, 'bg-gray-900 w-full')}>
			<div className="mx-auto max-w-7xl w-full">
				<div className="pl-20 sm:pl-8  h-32 sm:h-16 mt-2 mb-4 sm:mt-0 sm:mb-0 flex flex-col flex-wrap sm:flex-row items-start sm:items-center justify-start space-y-2 sm:space-y-0 sm:space-x-8 max-w-7xl mx-auto w-full">
					<div className="absolute top-1 left-1 sm:static flex flex-row items-center">
						<a href="/" className={clsx(styles.logo, 'block lg:-ml-4')}>
							<img
								className="w-full h-full"
								src={logoSvg.src}
								alt="smaghetti logo"
								width={52}
								height={52}
							/>
						</a>
						<div className="hidden sm:block text-2xl text-focal font-light text-center pl-4">
							<a href="/">Matt&apos;s Neo Stuff</a>
						</div>
					</div>
					<MenuLink href="/franic">Franic!</MenuLink>
					<MenuLink href="https://neogeobook.mattgreer.dev">
						Neo Geo Dev Book
					</MenuLink>
					<MenuLink href="/tools">Neo Geo Tools</MenuLink>
					<MenuLink href="mailto:matt.e.greer@gmail.com">Contact</MenuLink>
				</div>
			</div>
		</header>
	);
}

export { Header };
