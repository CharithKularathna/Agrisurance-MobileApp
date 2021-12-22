import { IonGrid, IonInput, IonItem, IonRow, IonCol } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { otp } from '../../../types';

import styles from './OTPControls.module.css'

const OTPControls: React.FC<any> = ({ setOtp, otp } : { setOtp : ({}) => void , otp: otp }) => {
    
    // Number of input fields that make up SSN
    const numOfFields = 6;

    const handleChange = (e:any) => {
        
        const maxLength : number = 1
        const { value, name } = e.target;
        const [fieldName, fieldIndex] = [name.charAt(0), name.charAt(1)];
        //console.log("In handle change...")
        //console.log({ maxLength, value, name })

        //Set State at the Parent Component
        

        //CODE - GO TO NEXT INPUT FIELD UPON ENTERING A VALUE
        // Check if they hit the max character length
        if (value.length >= maxLength) {
            //console.log("In if 1...")
            
            // Check if it's not the last input field
            if (parseInt(fieldIndex, 10) < numOfFields) {
            // Get the next input field
            const nextSibling = document.querySelector(
                `input[name=d${parseInt(fieldIndex, 10) + 1}]`
            );

            // If found, focus the next field
            if (nextSibling !== null) {
                (nextSibling as HTMLInputElement).focus();
            }
            }
        }
        setOtp({
            ...otp,
            [name]: value
        })
    }

    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="d1" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="d2" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="d3" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="d4" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="d5" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>
                <IonCol size="2">
                    <IonItem className={styles.OTPInputContainer} lines="none">
                        <IonInput name="d6" className={styles.field} type="text" color="customs" maxlength={1} required={true} onIonChange={e => handleChange(e)}/>
                    </IonItem>
                </IonCol>     
            </IonRow>
        </IonGrid>
    )
}

export default OTPControls;