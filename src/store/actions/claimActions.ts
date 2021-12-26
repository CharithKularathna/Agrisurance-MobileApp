import * as actionTypes from './types';
import axiosInstance from '../../axios-agri';
import { claimDetails, EvidenceObject } from '../../types';
import { useSelector } from 'react-redux';
import { getAuthToken, getClaimDetails } from '../selectors';

export const setDetails = (data: claimDetails) => {
    return {
        description: data.description,
        office: data.office,
        disasterType: data.disasterType,
        area: data.area,
        type: actionTypes.SET_DETAILS 
    }
}

export const submitClaimStart = () => {
    return {
        type: actionTypes.SUBMIT_CLAIM_START
    }
}

export const submitClaimSuccess = () => {
    return {
        type: actionTypes.SUBMIT_CLAIM_SUCCESS
    }
}

export const submitClaimFail = () => {
    return {
        type: actionTypes.SUBMIT_CLAIM_FAILURE
    }
}

export const submitClaim = ( data: EvidenceObject ) => {
    return (dispatch:any)  => {
        dispatch(submitClaimStart())
        const claimDetails = data.details
        const token = data.token
        const fd = new FormData()
        data.files.forEach((file)=>{
            fd.append('files', file, file.name)
        })
        fd.append('latitude',data.location.lat)
        fd.append('longitude', data.location.long)
        fd.append('agri_area', claimDetails.office)
        fd.append('description', claimDetails.description)
        fd.append('damage_type', claimDetails.disasterType)
        fd.append('damage_quantity', String(claimDetails.area))

        axiosInstance.post('setComplain', fd, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log( response.data );
            dispatch(submitClaimSuccess)
        }).catch(err => {
            dispatch(submitClaimFail)
            console.log( err );
        })
    };

};