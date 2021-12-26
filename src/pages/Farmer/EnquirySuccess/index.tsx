import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import React from 'react'
import Toolbar from '../../../components/Nav/Toolbar'
import { Alert } from '../../../components/UI/Alert/Alert'
import PageCaption from '../../../components/UI/PageCaption'
import styles from './EnquirySuccess.module.css'

const EnquirySuccess: React.FC<any> = () => {
    return (
        <IonPage>
            <Toolbar>Verify Account</Toolbar>
            <IonContent className={styles.pageStyles} fullscreen>
                {/* <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Register</IonTitle>
                </IonToolbar>
                </IonHeader> */}
                
                <PageCaption>Enquiry Status Status</PageCaption>

                <Alert type="success" message='Your Enquiry was submitted Successfully!'></Alert>

                
                <IonButton color="customs" className={styles.button} routerLink='/dashboard'>Back to Dashboard</IonButton>
                
            </IonContent>
        </IonPage>
    )
}

export default EnquirySuccess;