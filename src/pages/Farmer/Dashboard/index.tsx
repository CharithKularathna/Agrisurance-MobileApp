import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow } from '@ionic/react'
import React from 'react'
import FarmerLayout from '../../../components/Layout/FarmerLayout'
import DashboardCard from '../../../components/UI/DashboardCard'
import PageCaption from '../../../components/UI/PageCaption'
import { paperPlaneSharp, documentTextSharp } from 'ionicons/icons'
import enquiryImg from '../../../assets/img/enquiry-card-gray.png'
import historyImg from '../../../assets/img/history-card-gray.png'

import styles from './Dashboard.module.css'

const Dashboard:React.FC = ({history}:any) => {
    return (
        <FarmerLayout title="Dashboard" footer={true}>
            <PageCaption>Welcome Back Farmer!</PageCaption>
            <IonGrid>
                <DashboardCard routeStr="/enquiry" subTitle="Submit" title="Enquiry">
                    <IonImg className={styles.cardImage} src={enquiryImg}></IonImg>
                </DashboardCard>
                <DashboardCard routeStr="/history" subTitle="Enquiry" title="History">
                    <IonImg className={styles.cardImage} src={historyImg}></IonImg>
                </DashboardCard>
                    
                
            </IonGrid>
        </FarmerLayout>
    )
}

export default Dashboard
