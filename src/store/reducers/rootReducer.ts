import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { claimReducer } from "./claimReducer";
import { registerReducer } from "./registerReducer";
import { respondReducer } from "./respondReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    claim: claimReducer,
    register: registerReducer,
    respond: respondReducer
})

export type RootState = ReturnType<typeof rootReducer>;