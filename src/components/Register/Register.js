import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import usersPetitions from '../../api/usersApi/users';
import './Register.scss'

yup.addMethod(yup.string, 'comparePasswords', function (errorMessage) {
    return this.test('samePassword', errorMessage, function(value) {
        const {path, createError, state} = this;
        console.log(state.password.value)
           return (
           state.password.value === state.passwordRepeat.value || 
           createError({path, message: errorMessage})
        );
    });
});

const schema = yup.object().shape({
    name:yup.string().required(),
    age: yup.number().required(),
    gendre:yup.string().required(),
    email:yup.string().email().required(),
    password: yup.string().min(5).required(),
    passwordRepeat: yup.string().required().oneOf([yup.ref('password')], 'Las contraseñas han de coincidir.')
}).defined();


const Register = () => {
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name:'',
            age:'',
            gendre:'',
            email:'',
            password:'',
            passwordRepeat:''
        },
        resolver: yupResolver(schema),
    });

    const onSubmit = (data) =>{
        console.log(data)
        usersPetitions.postUsers(data)
    }
    return (
        <div className='register'>
            <form className='register__form' onSubmit={handleSubmit(onSubmit)}>
                <h3>Regístrate para descargar tus libros favoritos.</h3>
                <label htmlFor="name">
                    <p>Nomre:</p>
                    <input
                        type="text"
                        name="name"
                        {...register('name')}
                    />
                    <p>{errors.name?.message}</p>
                </label>
                <label htmlFor="age">
                    <p>Edad:</p>
                    <input
                        type="number"
                        name="age"
                        {...register('age')}
                    />
                    <p>{errors.age?.message}</p>
                </label>
                <label htmlFor="gendre">
                    <p>Género:</p>
                    <input
                        type="sex"
                        name="gendre"
                        {...register('gendre')}
                    />
                    <p>{errors.gendre?.message}</p>
                </label>
                <label htmlFor="email">
                    <p>Email</p>
                    <input
                        type="email"
                        name="email"
                        {...register('email')}
                    />
                    <p>{errors.email?.message}</p>
                </label>
                <label htmlFor="password">
                    <p>Contraseña</p>
                    <input
                        type="password"
                        name="password"
                        {...register('password')}
                    />
                    <p>{errors.password?.message}</p>
                </label>
                <label htmlFor="passwordRepeat">
                    <p>Repita la contraseña</p>
                    <input
                        type="password"
                        name="passwordRepeat"
                        {...register('passwordRepeat')}
                    />
                    <p>{errors.passwordRepeat?.message}</p>
                </label>
                <button className="register__submit" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Register