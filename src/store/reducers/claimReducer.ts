type Submission = {
    success: boolean
    error: boolean
}

const initialState = {
    success: false,
    error: false
} as Submission

export function claimReducer(state = initialState, action: any) {
    return state   
}