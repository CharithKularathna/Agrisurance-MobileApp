import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import React from 'react'
import Toolbar from '../../components/Nav/Toolbar'
import { Alert } from '../../components/UI/Alert/Alert'
import PageCaption from '../../components/UI/PageCaption'
import styles from './Verified.module.css'

const Verified: React.FC<any> = ({history}) => {
    return (
        <IonPage>
            <Toolbar>Verify Account</Toolbar>
            <IonContent className={styles.pageStyles} fullscreen>
                {/* <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Register</IonTitle>
                </IonToolbar>
                </IonHeader> */}
                
                <PageCaption>Verification Status</PageCaption>

                <Alert type="success" message='Account was Verified Successfully! You can login to your Account.'></Alert>

                
                <IonButton color="customs" className={styles.button} routerLink='/login'>Log In</IonButton>
                
            </IonContent>
        </IonPage>
    )
}

export default Verified;
