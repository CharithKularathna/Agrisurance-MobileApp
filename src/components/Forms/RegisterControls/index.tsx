import { IonGrid, IonInput, IonItem, IonLabel, IonRow, IonCol, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { personOutline, lockClosedOutline } from 'ionicons/icons';

import styles from './RegisterControls.module.css'

const RegisterControls: React.FC = () => {
    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonIcon className="" icon={personOutline} slot="start" />
                        <IonInput className="" type="text" placeholder="Name" required/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonIcon className="" icon={lockClosedOutline} slot="start" />
                        <IonInput className=""  type="text" placeholder="Password" required/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonIcon className="" icon={lockClosedOutline} slot="start" />
                        <IonInput className=""  type="text" placeholder="Password" required/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonIcon className="" icon={lockClosedOutline} slot="start" />
                        <IonInput className=""  type="password" placeholder="Password" required/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.registerInputContainer} lines="none">
                        <IonIcon className="" icon={lockClosedOutline} slot="start" />
                        <IonInput className=""  type="password" placeholder="Password" required/>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}


export default RegisterControls;