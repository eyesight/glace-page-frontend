const ObjectReceipt = {
    id:	'',
    title: '',
    image: {
        id: '',
        name: '',
        alternativeText: '',
        caption: '',
        width: 0,
        height: 0,
        formats: {},
        hash: '',
        ext: '',
        mime: '',
        size: 0,
        url: '',
        previewUrl: '',
        provider: '',
        provider_metadata: {},
        related: '',
        created_by: '',
        updated_by: ''
    },
    categories:	[
        {
            id: '',
            name: '',
            receipts: [''],
            category_classes: [''],
            published_at: '',
            created_by: '',
            updated_by: ''
        }
    ],
    steps: [
        {
        id: '',
        titleOfStep: '',
        text: '',
        infobox: [{
            id: '',
            title: '',
            text: ''
        }]
    }
],
    ingredients: [
        {
        id: '',
        mass: 0,
        ingredient_item: {
            id: '',
            name: '',
            unit: '',
            names: '',
            published_at: '',
            created_by: '',
            updated_by: '',
        },
        unit: {
            id: '',
            long: '',
            short: '',
            ingredients: [],
            nameId: '',
            published_at: '',
            created_by: '',
            updated_by: '',
        }
    }
],
    portions: 0,
    optional_Ingredients: [
        {
        id: '',
        mass: 0,
        ingredient_item: {
            id: '',
            name: '',
            unit: '',
            names: '',
            published_at: '',
            created_by:'',
            updated_by: '',
        },
        unit: {
            id: '',
            long: '',
            short: '',
            ingredients: [],
            nameId: '',
            published_at: '',
            created_by: '',
            updated_by: ''
        }
    }
],
    published_at: ''
}

export const ReceiptModel = {
    isFetching: false,
    items: [],
    oneItem: {} as RezeptType,
    portions: 0,
    filteredItems: [],
    value: '',
    filterText: '',
    randomItems: []
}