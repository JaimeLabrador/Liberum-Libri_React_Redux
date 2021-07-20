import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLastBooks, bookListName,} from '../../store/home/slice';
import { generatePath, Link } from 'react-router-dom';
import routes from '../../config/routes';
import './home.scss';

const Home = () => {
    const dispatch = useDispatch();
    const state = useSelector(fullState => fullState[bookListName]);
    const {lastBooks, isLoading,} = state;
    
    useEffect(() => {
        dispatch(getLastBooks());
    }, [])

    return (

        <div className='wrapper'>
            <h1 className='wrapper__title'>Novedades:</h1>
            {isLoading && <div>
                <img 
                    className='wrapper__loader'    
                    src='https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif' 
                    alt='loader'
                />
                </div>}
            <div className='wrapper__list'>
                {lastBooks.map((book)=> (
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
        </div>
    )
}

export default Home