import * as actionTypes from '../actions/types';

type ResponseState = {
    claimId: string
    approveSuccess: boolean
    approveFailed: boolean
    declineSuccess: boolean
    delineFailed: boolean
}

const initialState = {
    claimId: "",
    approveSuccess: false,
    approveFailed: false,
    declineSuccess: false,
    delineFailed: false,
} as ResponseState

export function respondReducer(state = initialState, action: any) {
    switch ( action.type ) {
        case actionTypes.SET_CLAIM_ID:
            return {
                ...state,
                claimId: action.claimId
            }
        case actionTypes.APPROVE_CLAIM_SUCCESS:
            return {
                ...state,
                approveSuccess: true,
                approveFailed: false,
            }
        case actionTypes.APPROVE_CLAIM_FAIL:
            return {
                ...state,
                approveSuccess: false,
                approveFailed: true,
            }
        case actionTypes.REJECT_CLAIM_SUCCESS:
            return {
                ...state,
                declineSuccess: true,
                declineFailed: false,
            }
        case actionTypes.REJECT_CLAIM_FAIL:
            return {
                ...state,
                declineSuccess: false,
                declineFailed: true,
            }
        default:
            return state 
    }

}