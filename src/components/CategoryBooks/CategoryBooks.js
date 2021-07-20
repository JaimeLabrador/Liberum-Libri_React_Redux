import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, generatePath } from 'react-router-dom';
import routes from '../../config/routes';
import { getBooks, booksOfCategoryName, getNumberOfItems} from '../../store/categoryBooks';
import './categoryBooks.scss'

const ITEMS_PER_PAGE = 12;
const calculateIndex = (page) => {
   return (page-1)*ITEMS_PER_PAGE
}

const CategoryBooks = () => {
    const {id, name} = useParams();
    const dispatch = useDispatch();
    const state = useSelector(fullState => fullState[booksOfCategoryName]);
    const { isLoading, categoryBookList, total} = state;
    const [activePage, setActivePage] = useState(1);

    useEffect (() => {
        dispatch(getNumberOfItems(id))
    },[id, dispatch])

    useEffect (() => {
        dispatch(getBooks(id, calculateIndex(activePage), ITEMS_PER_PAGE))
    }, [id, activePage, dispatch]);

    const handlePageChange = (pageNumber) => {
        setActivePage (pageNumber)
    }

    return( 
        <div className='wrapper'>
            {isLoading && <div>
                <img 
                    className='wrapper__loader' 
                    src='https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif' 
                    alt='loader'
                />
            </div>}
            {name? <h1 className='wrapper__title'>{name}</h1> : null}
            <div className='wrapper__list'>
                {categoryBookList?.map((book) => (
                    <Link key={book.title} className='wrapper__list__element' to={generatePath(routes.BookDetail, {id:book.ID})}>
                            <div className='hovered'>
                                <span className='fas fa-search bounce'></span>
                                <p>Ver más</p>
                            </div>
                            <img 
                                className='wrapper__list__element__image' 
                                src={book.cover} 
                                alt={book.title}
                            />
                            <h3 className='wrapper__list__element__title'>{book.title}</h3>
                            <p className='wrapper__list__element__author'>{book.author}</p>
                    </Link>
                ))}
            </div>
            <Pagination           
                activePage={activePage}
                itemsCountPerPage={ITEMS_PER_PAGE}
                totalItemsCount={total}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
            <Link 
                className='wrapper__return' 
                to={routes.Home}>
                <p>Regresar a home</p>
            </Link>
        </div>
    )
}

export default CategoryBooks