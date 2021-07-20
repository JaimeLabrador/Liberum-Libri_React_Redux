import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';
import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <p>Política de Privacidad</p>
            <p>Política de cookies</p>
            <p>términos de uso</p>
            <Link to={routes.Register}>Registro</Link>
            <div className='footer__info'>
                <p>Realizado por Jaime Labrador Toribio | 2021</p>
            </div>
        </div>
    )
}

export default Footer
