type Category = 'franic' | 'neobook' | 'neotools';

type PostMeta = {
	title: string;
	description?: string;
	date: string;
	category: Category;
	announcement?: boolean;
};

type Post = {
	slug: string;
	meta: PostMeta;
	content: string;
};
