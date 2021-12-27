import { registerFormData } from "../types";

export const buildAddressStr = (fd: registerFormData) => {
    const temp = [fd.addressLine1, fd.addressLine2, fd.gn, fd.city]
    return (temp.join(", "))
}

export const getDateFromTimeStamp = (ts: string) => {
    return ts.slice(0,10)
}
    
