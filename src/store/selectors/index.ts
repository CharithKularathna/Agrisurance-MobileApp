import { RootState } from '../reducers/rootReducer'

export const getLang = (state: RootState) => state.user.lang
export const getAuthToken = (state: RootState) => state.user.token
export const getLoginError = (state: RootState) => state.user.error
export const getLoading = (state: RootState) => state.user.isLoading
export const getUserType = (state: RootState) => state.user.user_type

export const getRegisterSuccess = (state: RootState) => state.register.regSuccess
export const getRegisterError = (state: RootState) => state.register.regError
export const getRegisterLoading = (state: RootState) => state.register.isLoading
export const getUserMobile = (state: RootState) => state.register.user
export const getVerifyError = (state: RootState) => state.register.verifyError
export const getVerifySuccess = (state: RootState) => state.register.verifySuccess
