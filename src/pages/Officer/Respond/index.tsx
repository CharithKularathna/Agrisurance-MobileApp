import { IonGrid } from '@ionic/react'
import React, { useEffect, useState } from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import PageCaption from '../../../components/UI/PageCaption'
import styles from './Respond.module.css'
import axiosInstance from '../../../axios-agri'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthToken, getClaimId } from '../../../store/selectors'
import EnquiryCard from '../../../components/UI/EnquiryCard'
import { getDateFromTimeStamp } from '../../../utility/utility'
import { setClaimId } from '../../../store/actions/respondActions'
import { Redirect, useHistory } from 'react-router'

const Respond:React.FC = () => {
    const [enquiryData, setEnquiryData] = useState<any[]>([])
    const token = useSelector(getAuthToken)
    const claimId = useSelector(getClaimId)
    //const history = useHistory()

    let content;

    

    const dispatchSetId = useDispatch()

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

    const onClickHandler = (id:string) => {
        console.log(id)
        dispatchSetId(setClaimId(id))
    }

    if (claimId) {
        content = <Redirect to="claim-by-id"/>
    }
    else {
        content = (
            <DashboardLayout title="Respond to Enquiries" footer={true}>
                <PageCaption>Enquiries</PageCaption>
                <IonGrid>
                    {/* <DashboardCard routeStr="/respond" subTitle="Respond to" title="Enquiries">
                        <IonImg className={styles.cardImage} src={respondImg}></IonImg>
                    </DashboardCard>
                    <DashboardCard routeStr="/responses" subTitle="Enquiry" title="History">
                        <IonImg className={styles.cardImage} src={historyImg}></IonImg>
                    </DashboardCard> */}
                    {enquiryData.map((enq)=> (
                        <EnquiryCard 
                            id={enq.complain_id} 
                            key={enq.complain_id} 
                            status={enq.status} 
                            date={getDateFromTimeStamp(enq.timestamp)}
                            clickHandler={onClickHandler}
                        />
                    ))}
                </IonGrid>
            </DashboardLayout>
        )
    }
    return (
        <>
            {content}
        </>
    )
}


export default Respond
