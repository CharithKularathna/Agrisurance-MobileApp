import * as actionTypes from './types';
import axiosInstance from '../../axios-agri';
import { registerFormData, verifyRequestData } from '../../types';
import { buildAddressStr } from '../../utility/utility';
import { numberModifier } from '../../utility/formValidation';

export const registerStart = () => {
    return {
        type: actionTypes.REGISTER_START,
    };
}

export const registerSuccess = (user: string) => {
    return {
        type: actionTypes.REGISTER_SENT,
        user: user
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
        axiosInstance.post( 'register', reqData )
            .then( response => {
                console.log( response.data );
                if (response.data.register_status != "Failed") {
                    dispatch( registerSuccess(reqData.username) );
                }
                else {
                    dispatch( registerFailed( "Register Failed. Please Check Credentials!" ) )
                }
                
            } )
            .catch( error => {
                console.log( error );
                dispatch( registerFailed( "Register Failed. Please Check Credentials!" ) );
            } );
    };
};

export const otpSend = ( user: string ) => {
    const userData = {
        phoneNo: numberModifier(user)
    } 
    return (dispatch:any)  => {
        axiosInstance.post( 'mobileNo', userData )
            .then( response => {
                console.log( response );
                // if (response.data.register_status != "Failed") {
                //     dispatch( verifySuccess() );
                // }
                // else {
                //     dispatch( verifyFailed( "Register Failed. Please Check Credentials!" ) )
                // }
                
            } )
            .catch( error => {
                console.log( error );
            } );
    };
};



export const verifyStart = () => {
    return {
        type: actionTypes.VERIFY_START,
    };
}

export const verifySuccess = () => {
    return {
        type: actionTypes.VERIFY_SUCCESS,
    };
}

export const verifyFailed = (error : string) => {
    return {
        type: actionTypes.VERIFY_FAILURE,
        error: error,
        
    };
}



export const verify = ( data: verifyRequestData ) => {
    
    return (dispatch:any)  => {
        dispatch( registerStart() );
        axiosInstance.post( 'otp', data )
            .then( response => {
                console.log( response.data );
                if (response.data != "OTP is not valid") {
                    dispatch( verifySuccess() );
                }
                else {
                    dispatch( verifyFailed( "Verification Failed. Please Check the OTP again!" ) )
                }
                
            } )
            .catch( error => {
                console.log( error );
                dispatch( verifyFailed( "Verification Failed. Please Check the OTP again!" ) );
            } );
    };
};