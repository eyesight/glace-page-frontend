//routes
export const Endpoint = process.env.NODE_ENV === 'production'
  ? 'https://glace-page-backend-production.up.railway.app/api'
  : 'http://localhost:1337/api';

  export const EndpointAssets = process.env.NODE_ENV === 'production'
  ? 'https://glace-page-backend-production.up.railway.app'
  : 'http://localhost:1337';

export const Populates = '?populate=*';
export const SortingTitles = `&sort[0]=title`;
export const PopulatesDetailReceipts = '?populate[ingredients][populate]=ingredient_item.image&populate[ingredients][populate]=unit&populate[optional_Ingredients][populate]=ingredient_item.image&populate[optional_Ingredients][populate]=unit&populate[categories][populate]=*&populate[steps][populate]=*&populate[infobox][populate]=*&populate[image][populate]=*';
export const PopulatesCollections = '?populate[receipts][populate]=*&populate[likers][populate]=*&populate[likes][populate]=*';
export const PopulatesPageContent = '?populate[content][populate]=*&populate[header][populate]=*';

export const FilterEqual = '?filters[name][$eq]=';
export const FilterCategoriesEqual = '&filters[categories][name][$eq]=';
export const FilterCollections = '?filters[collections][id][$eq]=';
export const FilterPages = '&filters[id][$eq]=';

export const RouteReceipt = `${Endpoint}/receipts`;

export const RouteCategories = `${Endpoint}/category-groups${Populates}`;
export const RouteReceiptAll = `${Endpoint}/receipts${Populates}${SortingTitles}`;
export const RouteCategoriesAll = `${Endpoint}/categories`;
export const RouteCategory = `${Endpoint}/category`;
export const RouteCollection = `${Endpoint}/collections`;
export const RouteLikes = `${Endpoint}/likes`;
export const RoutePages = `${Endpoint}/pages`;


//limit, sort and pagination for strapi here: (default is the limit on 100)
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/sort-pagination.html#sorting

//queries
export const QueryCategory = '[categories.id]';

// route to populate everything
//https://glace-page-backend-production.up.railway.app//api/receipts/1?populate[ingredients][populate]=*&populate[categories][populate]=*&populate[image][populate]=*

// route to filter
//https://glace-page-backend-production.up.railway.app//api/categories?filters[name][$eq]=schokoladig
