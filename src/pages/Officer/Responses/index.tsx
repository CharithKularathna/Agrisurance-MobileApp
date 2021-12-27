import styles from './Responses.module.css'

import React, { useEffect, useState } from 'react'
import { IonCol, IonGrid, IonItem, IonLabel, IonRow, IonSelect, IonSelectOption, IonText } from '@ionic/react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import PageCaption from '../../../components/UI/PageCaption'
import { useSelector } from 'react-redux'
import { getAuthToken } from '../../../store/selectors'
import axiosInstance from '../../../axios-agri'
import { getDateFromTimeStamp } from '../../../utility/utility'
import EnquiryCard from '../../../components/UI/EnquiryCard'

const Responses:React.FC = () => {
    const types = ["Approved", "Declined"]
    const token = useSelector(getAuthToken)
    const [type,setType] = useState("")
    const [responses, setResponses] = useState<any>([])

    useEffect(()=>{
        if (type != ""){
            const fd = new FormData()
            fd.append('status',type)
            axiosInstance.post('officer/getComplain', fd, {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }).then(response => {
                console.log( response.data );
                setResponses(response.data)
                
            }).catch(err => {
                console.log( err );
            })
        }
    },[token, type])

    return (
        <DashboardLayout title="Responses" footer={true}>
            <PageCaption>Enquiries</PageCaption>
            <IonGrid>
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12">
                        <IonItem className={styles.detailsInputContainer} lines="none">
                            <IonLabel position="stacked" color="customs">Response Type</IonLabel>
                            <IonSelect value={type} placeholder="Select One" onIonChange={(e: any) => setType(e.detail.value)}>
                                {types.map((dType, index) => (
                                    <IonSelectOption value={dType} key={index}>{dType}</IonSelectOption>
                                ))}
                                {/*<IonSelectOption value="female">Female</IonSelectOption>
                                <IonSelectOption value="male">Male</IonSelectOption>*/}
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                {responses ? responses.map((response:any, index:number)=> (
                    <EnquiryCard 
                        id={response.complain_id} 
                        key={index} 
                        status={response.status} 
                        date={getDateFromTimeStamp(response.timestamp)}
                        clickHandler={()=>{}}
                    />
                )) : <IonText>No responses Found!</IonText>}
            </IonGrid>
        </DashboardLayout>
    )
}

export default Responses
