import { IonGrid, IonInput, IonItem, IonLabel, IonRow, IonCol, IonIcon, IonList, IonItemDivider } from '@ionic/react';
import React from 'react';

import { personOutline, lockClosedOutline } from 'ionicons/icons';

import styles from './RegisterControls.module.css'

import { registerFormData } from '../../../types';

const RegisterControls: React.FC<any> = ({ setCredentials, credentials } : { setCredentials : ({}) => void , credentials: registerFormData}) => {
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
                        <IonLabel position="stacked" color="customs">First Name</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, fname: e.detail.value})} className={styles.field} type="text" placeholder="First Name" required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Last Name</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, lname: e.detail.value})} className={styles.field} type="text" placeholder="Last Name" required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">NIC Number</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, nic: e.detail.value})} className={styles.field} type="text" placeholder="NIC Number" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Mobile Number</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, mobile: e.detail.value})} className={styles.field} type="tel" placeholder="07XXXXXXXX" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItemDivider className={styles.divider}>Address</IonItemDivider>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Address Line 1</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, addressLine1: e.detail.value})} className={styles.field} type="text" placeholder="Address Line 1" required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Address Line 2</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, addressLine2: e.detail.value})} className={styles.field} type="text" placeholder="Address Line 2" required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>

            <IonRow className="ion-justify-content-center">
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">GN Division</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, gn: e.detail.value})} className={styles.field} type="text" placeholder="GN Division" required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">City</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, city: e.detail.value})} className={styles.field} type="text" placeholder="City" required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItemDivider className={styles.divider}>Password</IonItemDivider>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Password</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, password: e.detail.value})} className={styles.field} type="password" placeholder="Password" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Confirm Password</IonLabel>
                        <IonInput onIonChange={(e: any) => setCredentials({...credentials, confirmPassword: e.detail.value})} className={styles.field} type="password" placeholder="Confirm Password" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}


export default RegisterControls;