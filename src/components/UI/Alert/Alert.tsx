import React from 'react';

import { IonChip, IonIcon, IonLabel  } from '@ionic/react';
import { checkmarkDone, alertCircle } from 'ionicons/icons';

import styles from './Alert.module.css';

type AlertProps = {
    type: 'error' | 'success';
    message: string
};

export const Alert: React.FC<AlertProps> = ({type, message}) => {
    const color = type == "error" ? "danger" : "success";
    const icon = type == "error" ? alertCircle: checkmarkDone;
    return(
        <>
            <IonChip className={styles.alertChip} style={{width: '95%'}} color={color}>
                <IonIcon icon={icon} color={color} size="large"/>
                <IonLabel className={styles.alertLabel}>{message}</IonLabel>
            </IonChip>
        </>
    )
}