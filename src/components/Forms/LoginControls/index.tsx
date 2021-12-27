import { IonGrid, IonInput, IonItem, IonLabel, IonRow, IonCol, IonIcon } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import { personOutline, lockClosedOutline } from 'ionicons/icons';

import styles from './LoginControls.module.css'
import { getString, LOGIN_PASSWORD, LOGIN_USERNAME } from '../../../localization';

const LoginControls: React.FC<any> = ( { setCredentials, lang } : { setCredentials : ({}) => void, lang:string }) => {

    const [username, setU] = useState<string>("")
    const [password, setP] = useState<string>("")
    useEffect(() => {
        if (username.length > 0 && password.length > 0) {
            setCredentials({ username: username, password: password })
        }
    },[username, password])

    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.loginInputContainer} lines="none">
                        <IonIcon className="" icon={personOutline} slot="start" />
                        <IonInput onIonChange={(e: any) => setU(e.detail.value)} className={styles.field} color="customs" type="text" placeholder={getString(LOGIN_USERNAME,lang)} required/>
                    </IonItem>
                </IonCol>
                
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="11">
                    <IonItem className={styles.loginInputContainer} lines="none">
                        <IonIcon className="" icon={lockClosedOutline} slot="start" />
                        <IonInput onIonChange={(e: any) => setP(e.detail.value)} className={styles.field} color="customs" type="password" placeholder={getString(LOGIN_PASSWORD,lang)} required/>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}


export default LoginControls;

