// interface IArticle {
//     id: number
//     title: string
//     body: string
//   }
  
//   type ArticleState = {
//     articles: IArticle[]
//   }
  
//   type ArticleAction = {
//     type: string
//     article: IArticle
//   }
  
//   type DispatchType = (args: ArticleAction) => ArticleAction

interface IReceipt {
    isFetching: boolean,
    items: RezeptType[],
    portions: number,
    filteredItems: RezeptType[],
    value: string,
    filterText: string,
    randomItems:  RezeptType[]
  }

interface ICategories {
    isFetching: boolean,
    items: CategoryGroupType[],
    selectedItem: string
}

interface ICursor {
    isOnElement: boolean,
    cursorPosition: CursorType
}

type ReceiptState = {
    receipt: IReceipt
}

type CategoryState = {
    categories: ICategories
}

type CursorState = {
    cursor: ICursor
}

type ReceiptAction = {
    type: string
    payload: IReceipt[]
  }

type CategoryAction = {
    type: string,
    payload: ICategories
}

type CursorAction = {
    type: string,
    payload: ICursor
}

type DispatchType = (args: ReceiptAction | CategoryAction | CursorAction) => ReceiptAction | CategoryAction | CursorAction
type DispatchTypeCategory = (args: CategoryAction) => CategoryAction

type RezeptType = {
    id:	string
    title: string
    image: {
        id: string
        name: string
        alternativeText: string
        caption: string
        width: number
        height: number
        formats: {}
        hash: string
        ext: string
        mime: string
        size: number
        url: string
        previewUrl: string
        provider: string
        provider_metadata: {}
        related: string
        created_by: string
        updated_by: string
    }
    categories:	[{
        id: string
        name: string
        receipts: [string]
        category_classes: [string]
        published_at: string
        created_by: string
        updated_by: string
        }]
    steps: [{
        id: string
        titleOfStep: string
        text: string
        infobox: [{
        id: string
        title: string
        text: string
        }]
    }]
    ingredients: [{
        id: string
        mass: number
        ingredient_item: {
        id: string
        name: string
        unit: string
        names: string
        published_at: string
        created_by: string
        updated_by: string
        }
        unit: {
        id: string
        long: string
        short: string
        ingredients: [string]
        nameId: string
        published_at: string
        created_by: string
        updated_by: string
        }
    }]
    portions: number
    optional_Ingredients: [{
        id: string
        mass: number
        ingredient_item: {
        id: string
        name: string
        unit: string
        names: string
        published_at: string
        created_by:string
        updated_by: string
        }
        unit: {
        id: string
        long: string
        short: string
        ingredients: [string]
        nameId: string
        published_at: string
        created_by: string
        updated_by: string
        }
    }]
    published_at: string
}

type CategoryType = {
    id: string
    name: string
    receipts: RezeptType[]
    category_classes: [{
        id: string
        title: string
        categories: string[]
        published_at: string
        created_by: string
        updated_by: string
    }]
    published_at: string
}

type CategoryGroupType = {
    id: string
    title: string
    categories: CategoryType[]
    published_at: string
}

type CursorType = {
    x: number
    y: number
    className: string
}