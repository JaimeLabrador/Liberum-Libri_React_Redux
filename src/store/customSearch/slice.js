import { createSlice } from '@reduxjs/toolkit';
import books from '../../api/booksApi/books';

const initialState = {
    customBookList: [],
    isLoading: false
};

const {
    name,
    reducer,
    actions: {
        activateLoading,
        setCustomBookList
    },
} = createSlice({
    name:'CustomBookListName',
    initialState,
    reducers: {
        activateLoading: (state) => {
            return {...state, isLoading:true}
        },
        setCustomBookList: (state, {payload}) => {
            return {...state, isLoading:false, customBookList:payload}
        }
    }
});

const getBooks = (any) => (dispatch) => {
    dispatch(activateLoading());
    books.getCustomSearch(any).then(data => {
        dispatch(setCustomBookList(data))
    })
};

export default reducer;
export {
    activateLoading,
    setCustomBookList,
    getBooks,
    name as CustomBookListName,
}