import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, generatePath } from 'react-router-dom';
import routes from '../../config/routes';
import { AnyTagName } from '../../store/header';
import { getBooks, CustomBookListName } from '../../store/customSearch'

const CustomSearch = () => {
    const dispatch = useDispatch();
    const state = useSelector(fullState => fullState[AnyTagName]);
    const state2 = useSelector(fullState => fullState[CustomBookListName]);
    const { isLoading, customBookList} = state2;


    useEffect (() => {
        dispatch(getBooks(state.anyTag.anyTag));
    },[state.anyTag.anyTag])

    return (
        <div className='wrapper'>
            {isLoading && <div>
                <img 
                    className='wrapper__loader' 
                    src='https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif' 
                    alt='loader'
                />
            </div>}
            <h1 className='wrapper__title'>Resultados de {state.anyTag.anyTag}</h1>
            <div className='wrapper__list'>
                {customBookList?.map((book) => (
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
            <Link 
                className='wrapper__return' 
                to={routes.Home}>
                <p>Regresar a home</p>
            </Link>
        </div>
    )
}

export default CustomSearch

