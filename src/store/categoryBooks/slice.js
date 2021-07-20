import { createSlice } from '@reduxjs/toolkit';
import books from '../../api/booksApi/books';

const initialState = {
    category:'',
    categoryBookList: [],
    isLoading: false,
    activePage:1,
    total:0

};

const {
    name,
    reducer,
    actions: {
        setCategory,
        activateLoading,
        setCategoryBookList,
        setTotal
    },
} = createSlice({
    name:'bookList',
    initialState,
    reducers: {
        activateLoading: (state) => {
            return {...state, isLoading:true}
        },
        setCategoryBookList: (state, {payload}) => {
            return {...state, isLoading:false, categoryBookList:payload}
        },
        setCategory: (state, {payload}) => {
            return {...state, category:payload}
        },
        setTotal: (state, { payload } )=> {
            return {...state, total:payload}
        }
    }
});

const getBooks = (id, fromIndex, itemsPerPage) => (dispatch) => {
    dispatch(activateLoading());
    dispatch(setCategory(id));
    books.getBooksOfCategory(id, fromIndex, itemsPerPage).then(data => {
        dispatch(setCategoryBookList(data))
    })
};

const getNumberOfItems = (id) => (dispatch) => {
    books.getBooksOfCategoryLength(id).then(data => {
        dispatch(setTotal(data.num_items))
    })
}

export default reducer;
export {
    activateLoading,
    setCategoryBookList,
    getBooks,
    name as booksOfCategoryName,
    getNumberOfItems
}