import { FARMER, OFFICER } from '../../constants';
import * as actionTypes from '../actions/types';

type User = {
    lang: string
    token: string | null
    user: any
    is_logged_in: boolean
    user_type: string | null
    isLoading: boolean
    error: string
}

const initialState = {
    lang: "",
    token: null,
    is_logged_in: false,
    user: null,
    user_type: null,
    isLoading: false,
    error: ""
} as User

export function userReducer(state = initialState, action: any) {
    switch ( action.type ) {
        case actionTypes.SET_LANG_ENG:
            return {
                ...state,
                lang: "en"
            }
        case actionTypes.SET_LANG_SIN:
            return {
                ...state,
                lang: "si"
            }
        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true,
                error: "",
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                error: "",
                success: true,
                loading: false,
                token: action.token,
                user_type: action.role
            }
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
                success: false,
                loading: false,
                error: action.error
            }
        default:
            return state 
      
    }
}

