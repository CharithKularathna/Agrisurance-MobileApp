import { IonGrid, IonInput, IonItem, IonLabel, IonRow, IonCol, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { personOutline, lockClosedOutline } from 'ionicons/icons';

import styles from './LoginControls.module.css'

const LoginControls: React.FC = () => {
    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.loginInputContainer} lines="none">
                        <IonIcon className="" icon={personOutline} slot="start" />
                        <IonInput className={styles.field} type="text" placeholder="Username" required/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.loginInputContainer} lines="none">
                        <IonIcon className="" icon={lockClosedOutline} slot="start" />
                        <IonInput className={styles.field} type="password" placeholder="Password" required/>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}


export default LoginControls;

