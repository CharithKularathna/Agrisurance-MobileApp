import * as actionTypes from '../actions/types'

type SubmissionState = {
    success: boolean
    error: boolean
    description: string
    office: string
    type: string
    area: number | null
    addDetailsSuccess: boolean
}

const initialState = {
    success: false,
    error: false,
    description: "",
    office: "",
    type: "",
    area: 0,
    addDetailsSuccess: false
} as SubmissionState

export function claimReducer(state = initialState, action: any) {
    switch ( action.type ) {
        case actionTypes.SET_DETAILS:
            return {
                ...state,
                description: action.description,
                office: action.office,
                type: action.disasterType,
                area: Number.parseInt(action.area),
                addDetailsSuccess: true
            }

        case actionTypes.SUBMIT_CLAIM_START:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case actionTypes.SUBMIT_CLAIM_SUCCESS:
            return {
                success: true,
                error: false,
                description: "",
                office: "",
                type: "",
                area: 0,
                addDetailsSuccess: true
            }
        case actionTypes.SUBMIT_CLAIM_FAILURE:
            return {
                ...state,
                success: false,
                error: true,
            }
        default:
            return state 
    }
}