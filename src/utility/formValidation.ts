import { otp } from "../types";

export const isFormFilled = (formData : Object) => {
    return Object.values(formData).every(x => x != '');
}

export const numberModifier = (number: string) => {
    return ("+94" + number.slice(1))
}

export const parseOtpToInt = (otp: otp) => {
    const otpNum = Object.values(otp)
    return Number.parseInt(otpNum.join(""))
}