import { IonGrid, IonInput, IonItem, IonLabel, IonRow, IonCol, IonIcon, IonList, IonItemDivider } from '@ionic/react';
import React from 'react';

import { personOutline, lockClosedOutline } from 'ionicons/icons';

import styles from './RegisterControls.module.css'

import { registerFormData } from '../../../types';
import { getString, LOGIN_USERNAME, REGISTER_ADDRESS, REGISTER_ADDRESS_LINE1, REGISTER_ADDRESS_LINE2, REGISTER_CITY, REGISTER_CONFIRM_PASS, REGISTER_FNAME, REGISTER_GN_DIVISION, REGISTER_LNAME, REGISTER_NIC, REGISTER_PASSWORD } from '../../../localization';

const RegisterControls: React.FC<any> = ({ setCredentials, credentials, lang } : { setCredentials : ({}) => void , credentials: registerFormData, lang:string}) => {
    /*
    const [formData, setFormData] = useState<registerFormData>({
        fname: "", 
        lname: "",
        nic:"",
        mobile:"",
        addressLine1:"",
        addressLine2:"",
        gn:"",
        city:"",
        password:"",
        confirmPassword:""
    })
    */
    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_FNAME,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, fname: e.detail.value})} className={styles.field} type="text" placeholder={getString(REGISTER_FNAME,lang)} required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_LNAME,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, lname: e.detail.value})} className={styles.field} type="text" placeholder={getString(REGISTER_LNAME,lang)} required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_NIC,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, nic: e.detail.value})} className={styles.field} type="text" placeholder={getString(REGISTER_NIC,lang)} required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(LOGIN_USERNAME,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, mobile: e.detail.value})} className={styles.field} type="tel" placeholder="07XXXXXXXX" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItemDivider className={styles.divider}>{getString(REGISTER_ADDRESS,lang)}</IonItemDivider>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_ADDRESS_LINE1,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, addressLine1: e.detail.value})} className={styles.field} type="text" placeholder={getString(REGISTER_ADDRESS_LINE1,lang)} required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_ADDRESS_LINE2,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, addressLine2: e.detail.value})} className={styles.field} type="text" placeholder={getString(REGISTER_ADDRESS_LINE2,lang)} required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>

            <IonRow className="ion-justify-content-center">
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_GN_DIVISION,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, gn: e.detail.value})} className={styles.field} type="text" placeholder={getString(REGISTER_GN_DIVISION,lang)} required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_CITY,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, city: e.detail.value})} className={styles.field} type="text" placeholder={getString(REGISTER_CITY,lang)} required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItemDivider className={styles.divider}>{getString(REGISTER_PASSWORD,lang)}</IonItemDivider>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_PASSWORD,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, password: e.detail.value})} className={styles.field} type="password" placeholder={getString(REGISTER_PASSWORD,lang)} required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">{getString(REGISTER_CONFIRM_PASS,lang)}</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, confirmPassword: e.detail.value})} className={styles.field} type="password" placeholder={getString(REGISTER_CONFIRM_PASS,lang)} required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}


export default RegisterControls;