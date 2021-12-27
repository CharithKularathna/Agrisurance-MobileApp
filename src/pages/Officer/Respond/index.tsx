import { IonGrid } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import PageCaption from '../../../components/UI/PageCaption'
import styles from './Respond.module.css'
import axiosInstance from '../../../axios-agri'
import { useSelector } from 'react-redux'
import { getAuthToken } from '../../../store/selectors'
import EnquiryCard from '../../../components/UI/EnquiryCard'
import { getDateFromTimeStamp } from '../../../utility/utility'

const Respond:React.FC = () => {
    const [enquiryData, setEnquiryData] = useState<any[]>([])

    const token = useSelector(getAuthToken)

    useEffect(()=>{
        const fd = new FormData()
        fd.append('status','Pending')
        axiosInstance.post('officer/getComplain', fd, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log( response.data );
            setEnquiryData(response.data)
            
        }).catch(err => {
            console.log( err );
        })
    }, [token])

    return (
        <DashboardLayout title="Dashboard" footer={true}>
            <PageCaption>Enquiries</PageCaption>
            <IonGrid>
                {/* <DashboardCard routeStr="/respond" subTitle="Respond to" title="Enquiries">
                    <IonImg className={styles.cardImage} src={respondImg}></IonImg>
                </DashboardCard>
                <DashboardCard routeStr="/responses" subTitle="Enquiry" title="History">
                    <IonImg className={styles.cardImage} src={historyImg}></IonImg>
                </DashboardCard> */}
                {enquiryData.map((enq)=> (
                    <EnquiryCard id={enq.complain_id} key={enq.complain_id} status={enq.status} date={getDateFromTimeStamp(enq.timestamp)} />
                ))}
            </IonGrid>
        </DashboardLayout>
    )
}


export default Respond
