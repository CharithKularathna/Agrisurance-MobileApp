import { createStore } from 'redux'
import { rootReducer } from './store/reducers/rootReducer'



export const store = createStore(rootReducer)