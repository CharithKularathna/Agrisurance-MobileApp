import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonPage, IonRow } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import DashboardCard from '../../../components/UI/DashboardCard'
import PageCaption from '../../../components/UI/PageCaption'
import enquiryImg from '../../../assets/img/enquiry-card-gray.png'
import historyImg from '../../../assets/img/history-card-gray.png'

import styles from './Dashboard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { getAuthToken } from '../../../store/selectors'
import axiosInstance from '../../../axios-agri'

const Dashboard:React.FC = () => {
    const [userData, setUserData] = useState<any>({})
    const history = useHistory()
    const dispatch = useDispatch()

    const token = useSelector(getAuthToken)
    if (!token && token!="") {
        history.push("/login")
    }

    useEffect(()=>{
        axiosInstance.get('user/profile', {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log( response.data );
            setUserData(response.data)
            
        }).catch(err => {
            console.log( err );
        })
    }, [token])

    return (
        <DashboardLayout title="Dashboard" footer={true}>
            <PageCaption>Welcome Back Farmer!</PageCaption>
            <IonGrid>
                <DashboardCard routeStr="/enquiry-details" subTitle="Submit" title="Enquiry">
                    <IonImg className={styles.cardImage} src={enquiryImg}></IonImg>
                </DashboardCard>
                <DashboardCard routeStr="/history" subTitle="Enquiry" title="History">
                    <IonImg className={styles.cardImage} src={historyImg}></IonImg>
                </DashboardCard>
            </IonGrid>
        </DashboardLayout>
    )
}

export default Dashboard
