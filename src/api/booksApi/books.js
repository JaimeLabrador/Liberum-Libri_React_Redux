const baseUrl = 'https://www.etnassoft.com/api/v1/get/';

const getCategories = () => {
    return fetch(`${baseUrl}?get_categories=all`, {
        method: 'GET',
        cors: true
    }).then((response)=>response.json())
};

const getSubcategories = (id) => {
    return fetch(`${baseUrl}?get_subcategories_by_category_ID=${id}`, {
        method: 'GET',
        cors: true
    }).then((response)=>response.json())
};

const getLastPublications = () => {
    return fetch (`${baseUrl}?publisher_date=2019&num_items=99`, {
        method:'GET',
        cors: true
    }).then ((response) => response.json())
};

const getBooksOfCategory = (id, fromIndex, itemsPerPage) => {
    return fetch (`${baseUrl}?category_id=${id}&results_range=${fromIndex}&num_items=${itemsPerPage}`, {
        method:'GET',
        cors: true
    }).then ((response) => response.json())
}

const getBooksOfCategoryLength = (id) => {
    return fetch (`${baseUrl}?category_id=${id}&count_items=true`, {
        method:'GET',
        cors: true
    }).then ((response) => response.json())
}

const getBookDetail = (id) => {
    return fetch (`${baseUrl}?id=${id}`, {
        method:'GET',
        cors: true
    }).then ((response) => response.json())
}

const getCustomSearch = (any) => {
    return fetch (`${baseUrl}?any_tags=[${any}]`, {
        method:'GET',
        cors: true
    }).then ((response) => response.json())
}



export default {
    getCategories,
    getSubcategories,
    getLastPublications,
    getBooksOfCategory,
    getBookDetail,
    getCustomSearch,
    getBooksOfCategoryLength
}