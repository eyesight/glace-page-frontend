interface IReceipt {
	isFetching: boolean;
	data: RezeptType;
	items: RezeptType[];
	oneItem: RezeptType;
	portions: number;
	filteredItems: RezeptType[];
	value: string;
	filterText: string;
	randomItems: RezeptType[];
}

interface ICategories {
	isFetching: boolean;
	data?: {
		items?: CategoryGroupType[];
	};
	items?: CategoryGroupType[];
	selectedItem: string;
	selectedCategory: {
		data: CategoryType[];
	};
}

interface ILOADER {
	title: string;
	anikey: string;
}

interface IPages {
	isFetching: boolean;
	items: PageType[];
	selectedPage: PageType;
	data?: {
		items: PageType[];
	};
}

interface ICollections {
	pw?: string;
	secret?: string;
	name?: string;
	collectionItem: CollectionType;
	data: CollectionType;
	isFetching: boolean;
	id?: string;
	isRegistered: boolean;
	input: String;
	isAccessed: boolean;
}

interface ICursor {
	isOnElement: boolean;
	cursorPosition: CursorType;
}

interface ILike {
	item: LikeType[];
	data: LikeType[];
	error: any;
	isFetching: boolean;
}

type Inputs = {
	name: string;
	pw: string;
	nameRequired: string;
	pwRequired: string;
};

type ReceiptState = {
	receipt: IReceipt;
};

type CategoryState = {
	categories: ICategories;
};

type LoaderState = {
	loader: ILOADER;
};

type CollectionState = {
	collections: ICollections;
};

type CursorState = {
	cursor: ICursor;
};

type LikeState = {
	likes: ILike;
};

type PagesState = {
	pages: IPages;
};

type ReceiptAction = {
	type: string;
	payload: IReceipt;
};

type CategoryAction = {
	type: string;
	payload: ICategories;
};

type LoaderAction = {
	type: string;
	payload: ILOADER;
};

type CursorAction = {
	type: string;
	payload: ICursor;
};

type CollectionAction = {
	type: string;
	payload: ICollections;
};

type LikeAction = {
	type: string;
	payload: ILike;
};

type PageAction = {
	type: string;
	payload: IPage;
};

type DispatchType = (
	args:
		| ReceiptAction
		| CategoryAction
		| CursorAction
		| CollectionAction
		| LikeAction
		| PageAction
		| LoaderAction
) =>
	| ReceiptAction
	| CategoryAction
	| CursorAction
	| CollectionAction
	| LikeAction
	| PageAction
	| LoaderAction;

type RezeptType = {
	id: string;
	attributes: {
		title: string;
		image: ImageType;
		imageUrl: string;
		categories: {
			data: CategoryType[];
		};
		steps: [
			{
				id: string;
				titleOfStep: string;
				text: string;
				infobox: [
					{
						id: string;
						title: string;
						text: string;
					}
				];
			}
		];
		ingredients: [
			{
				id: string;
				mass: number;
				ingredient_item: IngredientsItemType;
				unit: Unit;
			}
		];
		portions: number;
		optional_Ingredients: [
			{
				id: string;
				mass: number;
				ingredient_item: IngredientsItemType;
				unit: Unit;
			}
		];
		collections: [
			{
				id: string;
				name: string;
				password: string;
				receipts: [string];
				admin_users: [string];
				published_at: string;
				created_by: string;
				updated_by: string;
			}
		];
		published_at: string;
		isVisible: boolean;
		likeFunction: any;
		nr: number;
		likes: number;
		collectionsId?: string | undefined;
	};
};

type IngredientsItemType = {
	data: {
		id: string;
		attributes: {
			name: string;
			names: string;
			published_at: string;
			created_by: string;
			updated_by: string;
			unit: {
				data: {
					id: string;
					attributes: {
						long: string;
						short: string;
						ingredients: [string];
						nameId: string;
						published_at: string;
						created_by: string;
						updated_by: string;
					};
				};
			};
			image: ImageType;
			imageUrl: string;
		};
	};
};

type ImageType = {
	data: {
		id: string;
		attributes: {
			name: string;
			alternativeText: string;
			caption: string;
			width: number;
			height: number;
			formats: {};
			hash: string;
			ext: string;
			mime: string;
			size: number;
			url: string;
			previewUrl: string;
			provider: string;
			provider_metadata: {};
			related: string;
			created_by: string;
			updated_by: string;
		};
	};
};

type CategoryType = {
	id: string;
	attributes: {
		name: string;
		adjektiv: string;
		receipts: RezeptType[];
		category_groups: [
			{
				id: string;
				title: string;
				categories: string[];
				published_at: string;
				created_by: string;
				updated_by: string;
			}
		];
		published_at: string;
	};
};

type CategoryGroupType = {
	id: string;
	attributes: {
		title: string;
		categories: CategoryType[];
		published_at: string;
	};
};

type CursorType = {
	x: number;
	y: number;
	className: string;
};

type CollectionType = {
	id: string;
	attributes: {
		likers?: {
			data: LikersType[];
		};
		name: string;
		password: string;
		receipts: {
			data: RezeptType[];
		};
		admin_users: [];
		published_at: string;
		Title: string;
		description: string;
		likes?: { data: LikeType[] };
		secret: string;
		isAccessed: boolean;
	};
};

type LikeType = {
	id: string;
	attributes: {
		collections: [];
		receipts: [];
		liker: string;
		collectionId: string;
		receiptId: string;
		published_at: string;
		created_by: string;
		updated_by: string;
	};
};

type LikersType = {
	id: string;
	attributes: {
		collections: [];
		name: string;
		email: string;
		published_at: string;
		created_by: string;
		updated_by: string;
	};
};

type PageType = {
	id: string;
	attributes: {
		pagename: string;
		header: {
			id: string;
			title: string;
			lead?: string;
		};
		content: any[];
		header: any;
	};
};

type Unit = {
	data: {
		id: string;
		attributes: {
			short: string;
		};
	};
};
