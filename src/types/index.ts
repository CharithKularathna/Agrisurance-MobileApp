export interface registerFormData {
    fname: string 
    lname: string;
    nic:string;
    mobile:string;
    addressLine1:string;
    addressLine2:string;
    gn:string;
    city:string;
    password:string;
    confirmPassword:string;
}

export interface otp {
    d1: string;
    d2: string;
    d3: string;
    d4: string;
    d5: string;
    d6: string;
}

export interface verifyRequestData {
    otp: Number;
    phoneNo: string;
}

export interface claimDetails {
    description: string;
    office: string;
    disasterType: string;
    area: number;
}

export interface UserPhoto {
    filepath: string;
    webviewPath?: string;
}

export interface LocationObject {
    lat: any;
    long: any;
}

export interface EvidenceObject {
    files: File[];
    location: LocationObject;
    token: string;
    details: claimDetails;

}