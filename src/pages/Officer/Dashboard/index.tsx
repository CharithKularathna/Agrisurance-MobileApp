import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import DashboardCard from '../../../components/UI/DashboardCard'
import PageCaption from '../../../components/UI/PageCaption'
import { paperPlaneSharp, documentTextSharp } from 'ionicons/icons'
import respondImg from '../../../assets/img/respond-card.png'
import historyImg from '../../../assets/img/history-card-gray.png'

import styles from './Dashboard.module.css'

const Dashboard:React.FC = ({history}:any) => {
    return (
        <DashboardLayout title="Dashboard" footer={true}>
            <PageCaption>Welcome Back Officer!</PageCaption>
            <IonGrid>
                <DashboardCard routeStr="/respond" subTitle="Respond to" title="Enquiries">
                    <IonImg className={styles.cardImage} src={respondImg}></IonImg>
                </DashboardCard>
                <DashboardCard routeStr="/responses" subTitle="Enquiry" title="History">
                    <IonImg className={styles.cardImage} src={historyImg}></IonImg>
                </DashboardCard>
            </IonGrid>
        </DashboardLayout>
    )
}

export default Dashboard