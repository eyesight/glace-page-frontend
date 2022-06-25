//routes
export const Endpoint = 'http://localhost:1337';
export const RouteReceipt = `${Endpoint}/rezepts`;
export const RouteCategories = `${Endpoint}/category-groups`;
export const RouteReceiptAll = `${Endpoint}/rezepts`;
export const RouteCategoriesAll = `${Endpoint}/categories`;
export const RouteCategory = `${Endpoint}/category`;
export const RouteCollection = `${Endpoint}/collections`;
export const RouteLikes = `${Endpoint}/likes`;

// export const RouteReceipt = `http://localhost:1337/rezepts?[categories.id][0]=2&&[categories.id][1]=17`;
// export const RouteReceipt = `http://localhost:1337/rezepts?[categories.id][0]=3`;
//export const RouteReceipt = `${Endpoint}/rezepts?_limit=10`;
//limit, sort and pagination for strapi here: (default is the limit on 100)
//https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/sort-pagination.html#sorting


//queries
export const QueryCategory = '[categories.id]';