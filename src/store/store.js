import { combineReducers, configureStore } from '@reduxjs/toolkit';
import home, {bookListName} from './home';
import categoryBooks, {booksOfCategoryName} from './categoryBooks';
import lateralMenu, { categoriesListName } from './lateralMenu/slice';
import bookDetail, {bookDetailName} from './bookDetail';
import authentication, {authName} from './authentication'; 
import customSearch, { CustomBookListName } from './customSearch';
import anyTag, { AnyTagName } from './header';

const store = configureStore({
    reducer: combineReducers({
        [bookListName]:home,
        [booksOfCategoryName]:categoryBooks,
        [categoriesListName]:lateralMenu,
        [bookDetailName]:bookDetail,
        [authName]:authentication,
        [CustomBookListName]:customSearch,
        [AnyTagName]:anyTag
    }),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store