import * as actionTypes from './types';
import axiosInstance from '../../axios-agri';

export const setClaimId = (id: string) => {
    return {
        claimId: id,
        type: actionTypes.SET_CLAIM_ID
    }
}
export const approveClaimSuccess = () => {
    return {
        type: actionTypes.APPROVE_CLAIM_SUCCESS
    }
}

export const approveClaimFail = () => {
    return {
        type: actionTypes.APPROVE_CLAIM_FAIL
    }
}

export const approveClaim = (token: string, claimId: string) => {
    return (dispatch:any)  => {
        const fd = new FormData()
        fd.append('complain_id',claimId)
        fd.append('status', "Approved")

        axiosInstance.post('officer/checkComplain', fd, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log( response.data );
            dispatch(approveClaimSuccess())
        }).catch(err => {
            dispatch(approveClaimFail())
            console.log( err );
        })
    }
}

export const rejectClaimSuccess = () => {
    return {
        type: actionTypes.REJECT_CLAIM_SUCCESS
    }
}

export const rejectClaimFail = () => {
    return {
        type: actionTypes.REJECT_CLAIM_FAIL
    }
}

export const rejectClaim = (token: string, claimId: string) => {
    return (dispatch:any)  => {
        const fd = new FormData()
        fd.append('complain_id',claimId)
        fd.append('status', "Declined")

        axiosInstance.post('officer/checkComplain', fd, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log( response.data );
            dispatch(rejectClaimSuccess())
        }).catch(err => {
            dispatch(rejectClaimFail())
            console.log( err );
        })
    }
}