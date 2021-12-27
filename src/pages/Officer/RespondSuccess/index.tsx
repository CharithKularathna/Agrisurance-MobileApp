import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonButton } from '@ionic/react'
import React from 'react'
import Toolbar from '../../../components/Nav/Toolbar'
import { Alert } from '../../../components/UI/Alert/Alert'
import PageCaption from '../../../components/UI/PageCaption'
import styles from './RespondSuccess.module.css'

const RespondSuccess: React.FC<any> = ({history}) => {
    return (
        <IonPage>
            <Toolbar>Claim Response</Toolbar>
            <IonContent className={styles.pageStyles} fullscreen>
                {/* <IonHeader collapse="condense">
                <IonToolbar>
                    <IonTitle size="large">Register</IonTitle>
                </IonToolbar>
                </IonHeader> */}
                
                <PageCaption>Response Status</PageCaption>

                <Alert type="success" message='You responded to the claim Successfully!'></Alert>

                
                <IonButton color="customs" className={styles.button} routerLink='/dashboard'>Back to Dashboard</IonButton>
                
            </IonContent>
        </IonPage>
    )
}

export default RespondSuccess;