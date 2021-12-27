import { IonContent, IonGrid, IonPage } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import axiosInstance from '../../../axios-agri'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import EnquiryCard from '../../../components/UI/EnquiryCard'
import PageCaption from '../../../components/UI/PageCaption'
import { getAuthToken } from '../../../store/selectors'
import { getDateFromTimeStamp } from '../../../utility/utility'

const History:React.FC = () => {
    const [enquiryData, setEnquiryData] = useState<any[]>([])
    const token = useSelector(getAuthToken)
    
    useEffect(()=>{
        axiosInstance.get('getComplain', {
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
        <DashboardLayout title="Enquiry History" footer={true}>
            <PageCaption>Enquiries List</PageCaption>
            <IonGrid>
            {enquiryData.map((enq)=> (
                        <EnquiryCard 
                            id={enq.complain_id} 
                            key={enq.complain_id} 
                            status={enq.status} 
                            date={getDateFromTimeStamp(enq.timestamp)}
                            clickHandler={()=>{}}
                        />
            ))}
            </IonGrid>
        </DashboardLayout>
    )
}

export default History
