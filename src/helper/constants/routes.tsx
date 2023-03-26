//routes
export const Endpoint = 'http://localhost:1337/api';
export const EndpointAssets = 'http://localhost:1337';
export const Populates = '?populate=*';
export const PopulatesDetailReceipts = '?populate[ingredients][populate]=*&populate[categories][populate]=*&populate[steps][populate]=*&populate[infobox][populate]=*&populate[optional_Ingredients][populate]=*&populate[image][populate]=*';
export const PopulatesCollections = '?populate[likers][populate]=*';

export const FilterEqual = '?filters[name][$eq]=';
export const FilterCollections = '?filters[collections][id][$eq]=';

export const RouteReceipt = `${Endpoint}/receipts`;
export const RouteCategories = `${Endpoint}/category-groups${Populates}`;
export const RouteReceiptAll = `${Endpoint}/receipts${Populates}`;
export const RouteCategoriesAll = `${Endpoint}/categories`;
export const RouteCategory = `${Endpoint}/category`;
export const RouteCollection = `${Endpoint}/collections`;
export const RouteLikes = `${Endpoint}/likes`;


//limit, sort and pagination for strapi here: (default is the limit on 100)
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/sort-pagination.html#sorting

//queries
export const QueryCategory = '[categories.id]';

// route to populate everything
//http://localhost:1337/api/receipts/1?populate[ingredients][populate]=*&populate[categories][populate]=*&populate[image][populate]=*

// route to filter
//http://localhost:1337/api/categories?filters[name][$eq]=schokoladig