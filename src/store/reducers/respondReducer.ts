import * as actionTypes from '../actions/types';

type ResponseState = {
    claimId: string
}

const initialState = {
    claimId: ""
} as ResponseState

export function respondReducer(state = initialState, action: any) {
    switch ( action.type ) {
        default:
            return state 
    }

}