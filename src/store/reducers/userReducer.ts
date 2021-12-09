type User = {
    lang: string
    token: string | null
    user: any
    is_logged_in: boolean
    user_type: string | null
}

const initialState = {
    lang: "si",
    token: null,
    is_logged_in: false,
    user: null,
    user_type: null,
} as User

export function userReducer(state = initialState, action: any) {
    return state   
}