import { RootState } from '../reducers/rootReducer'

export const getLang = (state: RootState) => state.user.lang
export const getAuthToken = (state: RootState) => state.user.token
export const getLoginError = (state: RootState) => state.user.error
export const getLoading = (state: RootState) => state.user.isLoading

