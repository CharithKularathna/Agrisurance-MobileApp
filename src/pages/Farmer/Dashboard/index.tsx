import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import PageCaption from '../../../components/UI/PageCaption'

const Dashboard:React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <PageCaption>Farmer Dashboard</PageCaption>
            </IonContent>
        </IonPage>
    )
}

export default Dashboard
