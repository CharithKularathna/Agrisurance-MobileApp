import * as actionTypes from './types';
import axiosInstance from '../../axios-agri';
import { FARMER, OFFICER } from '../../constants';

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    };
}

export const loginSuccess = (token: string, role: string) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token,
        role: role == "USER" ? FARMER : OFFICER
    };
}

export const loginFailed = (error : string) => {
    return {
        type: actionTypes.LOGIN_FAILURE,
        error: error,
        
    };
}



export const login = ( data: any ) => {
    return (dispatch:any)  => {
        dispatch( loginStart() );
        axiosInstance.post( 'login', data )
            .then( response => {
                console.log( response.data );
                try {
                    dispatch( loginSuccess(response.data.token, response.data.role) );
                }
                catch {
                    dispatch( loginFailed( "Login Failed. Please Check Credentials!" ) )
                }
                
            } )
            .catch( error => {
                console.log( error );
                dispatch( loginFailed( "Login Failed. Please Check Credentials!" ) );
            } );
    };
};

export const setLang = (data : string) => {
    if (data == "si"){
        return {
            type: actionTypes.SET_LANG_SIN,
        };
    }

    else {
        return {
            type: actionTypes.SET_LANG_ENG,  
        };
    }
        
}