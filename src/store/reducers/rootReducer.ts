import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { claimReducer } from "./claimReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    claim: claimReducer
})

export type RootState = ReturnType<typeof rootReducer>;