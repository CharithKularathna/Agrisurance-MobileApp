import * as actionTypes from './types';
import axiosInstance from '../../axios-agri';
import { registerFormData } from '../../types';
import { buildAddressStr } from '../../utility/utility';

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START,
    };
}

export const registerSuccess = () => {
    return {
        type: actionTypes.REGISTER_SENT,
    };
}

export const registerFailed = (error : string) => {
    return {
        type: actionTypes.REGISTER_FAILURE,
        error: error,
        
    };
}



export const register = ( data: registerFormData ) => {
    const reqData = {
        First_Name: data.fname,
        Last_Name: data.lname,
        username: data.mobile,
        NIC: data.nic,
        Address: buildAddressStr(data),
        password: data.password
    }
    return (dispatch:any)  => {
        dispatch( registerStart() );
        axiosInstance.post( 'register', data )
            .then( response => {
                console.log( response.data );
                try {
                    dispatch( registerSuccess() );
                }
                catch {
                    dispatch( registerFailed( "Register Failed. Please Check Credentials!" ) )
                }
                
            } )
            .catch( error => {
                console.log( error );
                dispatch( registerFailed( "Register Failed. Please Check Credentials!" ) );
            } );
    };
};