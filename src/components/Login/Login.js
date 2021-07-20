import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import { NavLink } from 'react-router-dom';
import routes from '../../config/routes';
import {getUser,authName} from '../../store/authentication'
import { useDispatch, useSelector } from 'react-redux';
import './Login.scss'

const schema = yup.object().shape({
    name:yup.string().required(),
    password: yup.string().min(5).required()
})

const Login = () => {
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name:'',
            password:'',
        },
        resolver: yupResolver(schema)
    });

    const dispatch = useDispatch();
    const state = useSelector(fullState => fullState[authName]);
    const onSubmit = (data) => {
        dispatch(getUser(data.name, data.password));
    }

    return (
        <div className='login'>
            <form className='login__form' onSubmit={handleSubmit(onSubmit)}>
                <h3>Inicia sesión para para poder descargar tus libros favoritos.</h3>
                <label htmlFor="name">
                    <p>Nombre</p>
                    <input
                        type="name"
                        name="name"
                        placeholder="Nombre de usuario"
                        {...register('name')}
                    />
                    <p className='error'>{errors.name?.message}</p>
                </label>
                <label htmlFor="password">
                    <p>Contraseña</p>
                    <input
                        type="password"
                        name="password"
                        placeholder="Contraseña"
                        {...register('password')}
                    />
                    <p className='error'>{errors.password?.message}</p>
                </label>
                <p>Si aún no estás registrado puedes hacerlo  <NavLink to={routes.Register}> aquí </NavLink> </p>
                <button className="login__submit" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Login

