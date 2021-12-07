import { IonGrid, IonInput, IonItem, IonLabel, IonRow, IonCol, IonIcon, IonList, IonItemDivider } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { personOutline, lockClosedOutline } from 'ionicons/icons';

import styles from './RegisterControls.module.css'

const RegisterControls: React.FC = () => {
    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">First Name</IonLabel>
                        <IonInput className={styles.field} type="text" placeholder="First Name" required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Last Name</IonLabel>
                        <IonInput className={styles.field} type="text" placeholder="Last Name" required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">NIC Number</IonLabel>
                        <IonInput className={styles.field} type="text" placeholder="NIC Number" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Mobile Number</IonLabel>
                        <IonInput className={styles.field} type="tel" placeholder="07XXXXXXXX" required={true}/>
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
                        <IonInput className={styles.field} type="text" placeholder="Address Line 1" required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Address Line 2</IonLabel>
                        <IonInput className={styles.field} type="text" placeholder="Address Line 2" required={true}/>
                    </IonItem>
                </IonCol>
                
            </IonRow>

            <IonRow className="ion-justify-content-center">
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">GN Division</IonLabel>
                        <IonInput className={styles.field} type="text" placeholder="GN Division" required={true}/>
                    </IonItem>
                </IonCol>
                
                <IonCol size="6">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">City</IonLabel>
                        <IonInput className={styles.field} type="text" placeholder="City" required={true}/>
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
                        <IonInput className={styles.field} type="password" placeholder="Password" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Confirm Password</IonLabel>
                        <IonInput className={styles.field} type="password" placeholder="Confirm Password" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}


export default RegisterControls;