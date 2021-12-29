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


// LABELS

export const REGISTER_Title : string[] = ["Fill in the following and Register","පහත දෑ පුරවා ලියාපදිංචි වන්න"]
export const REGISTER_FNAME : string[] = ["First Name","මුල් නම"]
export const REGISTER_LNAME : string[] = ["Last Name","වාසගම"]
export const REGISTER_NIC : string[] = ["NIC","ජා.හැ. අංකය"]
export const REGISTER_ADDRESS : string[] = ["Address","ලිපිනය"]
export const REGISTER_ADDRESS_LINE1 : string[] = ["Address Line 1","ලිපිනය - පළමු පේලිය"]
export const REGISTER_ADDRESS_LINE2 : string[] = ["Address Line 2","ලිපිනය - දෙවන පේලිය"]
export const REGISTER_GN_DIVISION : string[] = ["GN Division","ග්‍රාම නිලධාරි කොට්ඨාසය"]
export const REGISTER_CITY : string[] = ["City","නගරය"]
export const REGISTER_PASSWORD : string[] = ["Password","මුරපදය"]
export const REGISTER_CONFIRM_PASS : string[] = ["Confirm Password","මුරපදය සනාථ කරන්න"]

export const LOGIN_USERNAME : string[] = ["Mobile No.","දුරකථන අංකය"]
export const LOGIN_PASSWORD : string[] = ["Password","මුරපදය"]
export const LOGIN_ERROR : string[] = ["Failed to login. Please check the Credentials.", "ලොග් වීම අසාර්ථක විය. කරුණාකර විස්තර නැවත පරීක්ෂා කරන්න. "]
export const REGISTER_ERROR : string[] = ["Failed to register. Please check the details and re-submit.", "ලියාපදිංචි වීම අසාර්ථක විය. කරුණාකර විස්තර පරීක්ෂා කර නැවත ඉදිරිපත් කරන්න."]



