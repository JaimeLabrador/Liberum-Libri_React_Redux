import { createSlice } from '@reduxjs/toolkit';
import users from '../../api/usersApi/users';

const initialState = {
    isLogged:false,
    user:{}
}

const{
    name,
    reducer,
    actions: {
        setUser
    },
} = createSlice ({
    name:'authName',
    initialState,
    reducers: {
        setUser: (state, {payload}) => {
            return {...state, isLogged:true, user:payload}
        }
    }
});

const getUser = (name, password) => (dispatch) => {
    users.users().then(data => {
        const userExist = data.map(item => {
            return(item.name===name? true : false) 
        });
        const passwordExist = data.map(item => {
            return(item.password===password? true : false)
        });
        return (userExist.includes(true) && passwordExist.includes(true) ? dispatch(setUser({name})): null)
    })
}

export default reducer;
export {
    name as authName,
    setUser,
    getUser
}