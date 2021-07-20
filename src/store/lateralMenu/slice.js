import { createSlice } from '@reduxjs/toolkit';
import books from '../../api/booksApi/books';

const initialState = {
    categories:[]
};

const {
    name,
    reducer,
    actions:{
        setCategories
    },
} = createSlice ({
    name:'categoriesList',
    initialState,
    reducers: {

        setCategories: (state, {payload}) => {
            return { ...state, categories: payload};
        }
    }
});

const getCategoriesList = () => {
    return (dispatch) => {
        books.getCategories().then((data) => {
            dispatch (setCategories(data))
        });
    };
};

export default reducer;
export {
    name as categoriesListName,
    setCategories,
    getCategoriesList
}