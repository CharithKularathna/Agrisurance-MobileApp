import { store } from './store'

export const getString = (arr: Array<string>, lang: string) => {
    if (lang == "si"){
        return arr[1]
    }
    else {
        return arr[0]
    }
        

}

export const TXT_LANG_ENG : string = "Select the preferred Language"
export const TXT_LANG_SIN : string = "කැමති භාෂාව තෝරන්න"
export const TXT_ENG_BTN : string = "English"
export const TXT_SIN_BTN : string = "සිංහල"

export const TXT_HOME_TITLE : string[] = ["Welcome to Agrisurance Mobile App", "Agrisurance ජංගම යෙදුම වෙත සාදරයෙන් පිළිගනිමු" ]
export const TXT_LOGIN_BTN : string[] = ["Login", "ලොග් වන්න" ]
export const TXT_REGISTER_BTN : string[] = ["Register","ලියාපදිංචි වීමට"]



