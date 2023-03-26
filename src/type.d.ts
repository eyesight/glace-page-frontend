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
		data: CategoryType[]
	};
}

interface ICollections {
	pw?: string;
	secret?: string;
	name?: string;
	item: CollectionType;
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

type CollectionState = {
	collections: ICollections;
};

type CursorState = {
	cursor: ICursor;
};

type LikeState = {
	likes: ILike;
};

type ReceiptAction = {
	type: string;
	payload: IReceipt;
};

type CategoryAction = {
	type: string;
	payload: ICategories;
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

type DispatchType = (
	args: ReceiptAction | CategoryAction | CursorAction | CollectionAction | LikeAction
) => ReceiptAction | CategoryAction | CursorAction | CollectionAction | LikeAction;

type RezeptType = {
	id: string;
	attributes: {
		title: string;
		image: {
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
				}
			}
		};
		categories: {
			data: CategoryType[];
		}
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
				ingredient_item: {
					data: {
						id: string;
						attributes: {
							name: string;
							unit: string;
							names: string;
							published_at: string;
							created_by: string;
							updated_by: string;
						}
					}
				};
				unit: {
					data:{
						id: string;
						attributes: {
							long: string;
							short: string;
							ingredients: [string];
							nameId: string;
							published_at: string;
							created_by: string;
							updated_by: string;
						}
					}
				};
			}
		];
		portions: number;
		optional_Ingredients: [
			{
				id: string;
				mass: number;
				ingredient_item: {
					data: {
						id: string;
						attributes: {
							name: string;
							unit: string;
							names: string;
							published_at: string;
							created_by: string;
							updated_by: string;
						}
					}
				};
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
						}
					}
				};
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
	}
};

type CategoryGroupType = {
	id: string;
	attributes: {
		title: string;
		categories: CategoryType[];
		published_at: string;
	}
};

type CursorType = {
	x: number;
	y: number;
	className: string;
};

type CollectionType = {
	likers?: LikersType[];
	id: string;
	name: string;
	password: string;
	receipts: RezeptType[];
	admin_users: [];
	published_at: string;
	Title: string;
	description: string;
	likes: [];
	secret: string;
	isAccessed: boolean;
};

type LikeType = {
	id: string;
	collections: [];
	receipts: [];
	liker: string;
	collectionId: string;
	receiptId: string;
	published_at: string;
	created_by: string;
	updated_by: string;
};

type LikersType = {
	id: string;
	collections: [];
	name: string;
	email: string;
	published_at: string;
	created_by: string;
	updated_by: string;
};
