import { createSlice } from '@reduxjs/toolkit';
import books from '../../api/booksApi/books';

const initialState = {
    lastBooks:[],
    isLoading: false,
};

const {
    name,
    reducer,
    actions:{
        activateLoader,
        setLastBooks,
    },
} = createSlice ({
    name:'lastBooksList',
    initialState,
    reducers: {
        activateLoader: (state) => {
            return {...state, isLoading: true};
        },
        setLastBooks: (state, {payload}) => {
            return { ...state, lastBooks: payload, isLoading: false};
        },
    }
});

const getLastBooks = () => {
    return (dispatch) => {
        dispatch(activateLoader());
        books.getLastPublications().then((data) => {
            dispatch (setLastBooks(data))
        });
    };
};


export default reducer;
export {
    name as bookListName,
    activateLoader,
    setLastBooks,
    getLastBooks,
}