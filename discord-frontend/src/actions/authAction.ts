
import { useNavigate } from 'react-router-dom';

import * as api from '../../api'
import {AxiosResponse} from 'axios'

import store from '../store/store'

const authActions = {
    SET_USER_DETAILS : 'AUTH.SET_USER_DETAILS'
}

export const getActions  = (dispatch : typeof store.dispatch)=>{    
    return {
        login : (userDetails : any, navigate : any ) => dispatch(login(userDetails ,navigate)),
        register : (userDetails :any , navigate: any) => dispatch(register(userDetails , navigate))
    }
}

const setUserDetails = (userDetails : any)=>{
    return {
        type : authActions.SET_USER_DETAILS,
        userDetails 
    }
} 

const login = (userDetails : any ,navigate :any) : any   =>{
    
    return async (dispatch : typeof store.dispatch) =>{
        try{
            const response : AxiosResponse<any> = await api.login(userDetails) as AxiosResponse<any>;
            const {userDetails1  } = response?.data;
            localStorage.setItem('userDetails   1', JSON.stringify(userDetails1));
            dispatch(setUserDetails(userDetails1));
            navigate('/dashboard')

        }
        catch(error : unknown){
            alert(JSON.stringify(error));
        }
      
    }
}

const register = (userDetails : any ,navigate :any) : any   =>{
    
    return async (dispatch : typeof store.dispatch) =>{
        try{
            const response : AxiosResponse<any> = await api.register(userDetails) as AxiosResponse<any>;
            const {userDetails1  } = response?.data;
            localStorage.setItem('userDetails   1', JSON.stringify(userDetails1));
            dispatch(setUserDetails(userDetails1));
            navigate('/dashboard')

        }
        catch(error : unknown){
            alert(JSON.stringify(error));
        }
      
    }
}
