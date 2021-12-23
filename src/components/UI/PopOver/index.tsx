import { IonButton, IonContent, IonPopover } from '@ionic/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PopOver.module.css'

const PopOver: React.FC<any> = ({isOpen}) => {
    return (
        <IonContent className={styles.content}>
            <IonPopover isOpen={isOpen}>
                <IonContent>
                    Verification Successful!
                    <IonButton routerLink='/login' className={styles.button} fill="solid" color="customs">Log in</IonButton>
                </IonContent>
                
            </IonPopover>
        </IonContent>
            
    )
}

export default PopOver
