import * as actionTypes from '../actions/types';

type Register = {
    data: Object
    user: any
    is_logged_in: boolean
    isLoading: boolean
    regError: string
    regSuccess: boolean
    verifyError: string
    verifySuccess: boolean
}

const initialState = {
    data: {},
    user: "",
    is_logged_in: false,
    isLoading: false,
    regError: "",
    regSuccess: false,
    verifyError: "",
    verifySuccess: false
} as Register

export function registerReducer(state = initialState, action: any) {
    switch ( action.type ) {
        case actionTypes.REGISTER_START:
            return {
                ...state,
                isLoading: true,
                regError: "",
                user: "",
            }
        case actionTypes.REGISTER_SENT:
            return {
                ...state,
                regError: "",
                regSuccess: true,
                isLoading: false,
                user:action.user
            }
        case actionTypes.REGISTER_FAILURE:
            return {
                ...state,
                regSuccess: false,
                isLoading: false,
                regError: action.error,
                user:""
            }
        case actionTypes.VERIFY_START:
            return {
                ...state,
                isLoading: true,
                verifyError: "",
            }
        case actionTypes.VERIFY_SUCCESS:
            return {
                ...state,
                verifyError: "",
                verifySuccess: true,
                isLoading: false,
                user:"",
            }
        case actionTypes.VERIFY_FAILURE:
            return {
                ...state,
                verifySuccess: false,
                isLoading: false,
                verifyError: action.error
            }
        default:
            return state 
      
    }
}