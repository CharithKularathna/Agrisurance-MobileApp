import { RootState } from '../reducers/rootReducer'

export const getLang = (state: RootState) => state.user.lang
export const getAuthToken = (state: RootState) => state.user.token

