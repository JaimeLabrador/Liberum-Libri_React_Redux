import React, { useEffect} from 'react';
import { generatePath, Link } from 'react-router-dom';
import './LateralMenu.scss';
import routes from '../../../config/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesList , categoriesListName } from '../../../store/lateralMenu/slice';
import {AnyTagName} from '../../../store/header'

const LateralMenu = () => {

    const dispatch = useDispatch();
    const state = useSelector(fullState => fullState[categoriesListName]);
    const {categories} = state;

    const state2 = useSelector(fullState => fullState[AnyTagName]);

    useEffect(() => {
            dispatch(getCategoriesList())
    }, []);

    return (
        <>
            {state2.visivility?
                <div className='lateralMenu'>
                    <ul className='lateralMenu__list'>
                        {categories.map((category) => (
                            <li key={category.name} className='lateralMenu__list__item hvr-forward'> 
                                <span className="fas fa-chevron-right "></span>
                                <Link to={generatePath(routes.Category, {id:category.category_id, name:category.name})}>
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            : null}
        </>
    )
}

export default LateralMenu