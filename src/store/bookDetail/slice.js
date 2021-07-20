import { createSlice } from '@reduxjs/toolkit';
import books from '../../api/booksApi/books';

const initialState = {
    bookDetail: [],
    isLoading: false
};

const {
    name,
    reducer,
    actions: {
        activateLoading,
        setBookDetail
    },
} = createSlice({
    name:'bookDeatilName',
    initialState,
    reducers: {
        activateLoading: (state) => {
            return {...state, isLoading:true}
        },
        setBookDetail: (state, {payload}) => {
            return {...state, isLoading:false, bookDetail:payload}
        }
    }
});

const getBooks = (id) => (dispatch) => {
    dispatch(activateLoading());
    books.getBookDetail(id).then(data => {
        dispatch(setBookDetail(data))
    })
};

export default reducer;
export {
    activateLoading,
    setBookDetail,
    getBooks,
    name as bookDetailName
}