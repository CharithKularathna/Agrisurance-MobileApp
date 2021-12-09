import { store } from './store'

export const TXT_HOME_TITLE : string = (store.getState().user.lang == "si") ? "Agrisurance ජංගම යෙදුම වෙත සාදරයෙන් පිළිගනිමු" : "Welcome to Agrisurance Mobile App"
export const TXT_LOGIN_BTN : string = (store.getState().user.lang == "si") ? "ලොග් වන්න" : "Login"
export const TXT_REGISTER_BTN : string = (store.getState().user.lang == "si") ? "ලියාපදිංචි වීමට" : "Register"



