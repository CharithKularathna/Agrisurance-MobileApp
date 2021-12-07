import { IonGrid, IonInput, IonItem, IonRow, IonCol } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import styles from './OTPControls.module.css'

const OTPControls: React.FC = () => {
    
    // Number of input fields that make up SSN
    const numOfFields = 6;

    const handleChange = (e:any) => {
        const maxLength : number = 1
        const { value, name } = e.target;
        const [fieldName, fieldIndex] = name.split("-");
        //console.log("In handle change...")
        //console.log({ maxLength, value, name })

        // Check if they hit the max character length
        if (value.length >= maxLength) {
            //console.log("In if 1...")
            
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < numOfFields) {
            // Get the next input field
            const nextSibling = document.querySelector(
                `input[name=otp-${parseInt(fieldIndex, 10) + 1}]`
            );

            // If found, focus the next field
            if (nextSibling !== null) {
                (nextSibling as HTMLInputElement).focus();
            }
            }
        }
    }

    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="otp-1" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="otp-2" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="otp-3" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="otp-4" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="otp-5" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="otp-6" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>     
            </IonRow>
        </IonGrid>
    )
}

export default OTPControls;