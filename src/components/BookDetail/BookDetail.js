import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import routes from '../../config/routes';
import {getBooks, bookDetailName} from '../../store/bookDetail';
import { authName } from '../../store/authentication';
import './BookDetail.scss'

const BookDetail = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const state = useSelector(fullState => fullState[bookDetailName]);
    const state2 = useSelector(fullState => fullState[authName]);
    const { isLoading, bookDetail} = state;

    useEffect (() => {
        dispatch(getBooks(id))
    }, [id]);

    return( 
        <div className='bookDetail'>
            {isLoading && <div>
                <img 
                    className='bookDetail__loader' 
                    src='https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif' 
                    alt='loader'
                />
            </div>}
            <div className='bookDetail__list'>
                {bookDetail?.map((book) => (
                    <div key={book.title} className='bookDetail__list__element'>
                        <img 
                            className='bookDetail__list__element__image' 
                            src={book.cover} 
                            alt={book.title}
                        />
                        <div className='bookDetail__list__element__container'>
                            <h3 className='bookDetail__list__element__container__title'>{book.title}</h3>
                            <p className='bookDetail__list__element__container__author'>Autor: {book.author}</p>
                            <p className='bookDetail__list__element__container__languaje'>Idioma: {book.language}</p>
                            <p className='bookDetail__list__element__container__date'>Año de publicación: {book.publisher_date}</p>
                            <h5>Descripción:</h5>
                            <p className='bookDetail__list__element__container__description'>{book.content}</p>
                            {state2.isLogged === true?
                            <a href={book.url_download} target='_blank' className='bookDetail__list__element__container__download'>
                                <span className='fas fa-download'></span>
                                <p>Descargar</p>
                            </a>
                            : 
                            <a href='#' onClick={()=>alert('Para poder descargar el libro primero tienes que iniciar sesión')} className='bookDetail__list__element__container__download'>
                                <span className='fas fa-download'></span>
                                <p>Descargar</p>
                            </a>
                            }
                        </div>
                    </div>
                ))}
                <Link 
                    className='bookDetail__return' 
                    to={routes.Home}>
                    <p>Regresar a la página principal</p>
                </Link>
            </div>
        </div>
    )
}

export default BookDetail
