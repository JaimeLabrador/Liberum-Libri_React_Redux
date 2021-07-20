import { NavLink } from "react-router-dom";
import React from 'react';
import routes from '../../../config/routes';
import './Header.scss';
import { authName } from "../../../store/authentication";
import { AnyTagName, setAnyTag, toggleVisivility } from "../../../store/header";
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';


const Header = () => {
    const state = useSelector(fullState => fullState[authName]);
    const state2 = useSelector(fullState => fullState[AnyTagName])
    const dispatch = useDispatch();

    const {register, handleSubmit} = useForm({
        defaultValues:{
            anyTag:''
        },
    });

    const onSubmit = (data) => {
        dispatch(setAnyTag(data));
    }

    const viewMenu = () => {
        dispatch(toggleVisivility())
    }

    return(
        <header>
            <div className='nav'>
                <p className='nav__link'><NavLink to={routes.Home}><img src='data:image/png;base64,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' alt='logo'/></NavLink></p>
                {state.user.name != null ? 
                <p className='nav__user'>{(state.user.name)}</p>
                :<p className='nav__login'><NavLink to={routes.Login}>Login</NavLink></p> 
                }
                <div className='nav__position'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="name">
                            <input
                                type="search"
                                name="anyTag"
                                className='nav__input'
                                {...register('anyTag')}
                            />
                        </label>
                        <button className='nav__button' type="submit"><NavLink to={routes.CustomSearch}><span className='fas fa-search'></span></NavLink></button>
                        <button onClick={viewMenu} className='nav__button move'><span className="fas fa-bars"></span></button>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Header

