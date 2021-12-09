import * as actionTypes from './types';
import axiosInstance from '../../axios-agri';

export const loginStart = () => {
    return {
        type: actionTypes.LOGIN_START,
    };
}

export const loginSuccess = (token: string) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        token: token
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
                    dispatch( loginSuccess(response.data.token) );
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