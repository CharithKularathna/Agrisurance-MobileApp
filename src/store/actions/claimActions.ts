import * as actionTypes from './types';
import axiosInstance from '../../axios-agri';
import { claimDetails } from '../../types';

export const setDetails = (data: claimDetails) => {
    return {
        description: data.description,
        office: data.office,
        disasterType: data.type,
        area: data.area,
        type: actionTypes.SET_DETAILS 
    }
}

export const submitClaim = ( data: any ) => {
    return
    // return (dispatch:any)  => {
    //     dispatch( loginStart() );
    //     axiosInstance.post( 'login', data )
    //         .then( response => {
    //             console.log( response.data );
    //             try {
    //                 dispatch( loginSuccess(response.data.token, response.data.role) );
    //             }
    //             catch {
    //                 dispatch( loginFailed( "Login Failed. Please Check Credentials!" ) )
    //             }
                
    //         } )
    //         .catch( error => {
    //             console.log( error );
    //             dispatch( loginFailed( "Login Failed. Please Check Credentials!" ) );
    //         } );
    // };
};