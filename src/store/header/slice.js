import { createSlice } from '@reduxjs/toolkit';
import books from '../../api/booksApi/books'

const initialState = {
    anyTag:'',
    visivility: false,
    isLoading: false
};

const {
    name,
    reducer,
    actions: {
        activateLoading,
        setAnyTag,
        toggleVisivility,
    },
} = createSlice({
    name:'AnyTagName',
    initialState,
    reducers: {
        activateLoading: (state) => {
            return {...state, isLoading:true}
        },
        setAnyTag: (state, {payload}) => {
            return {...state, isLoading:false, anyTag:payload}
        },
        toggleVisivility: (state) => {
            return {...state, visivility:!state.visivility}
        }
    }
});

export default reducer;
export {
    setAnyTag,
    name as AnyTagName,
    toggleVisivility
}