import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { claimReducer } from "./claimReducer";
import { registerReducer } from "./registerReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    claim: claimReducer,
    register: registerReducer
})

export type RootState = ReturnType<typeof rootReducer>;