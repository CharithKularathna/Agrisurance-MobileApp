import styles from "./Claim.module.css"

import React, { useEffect, useState } from 'react'
import { IonButton, IonCol, IonGrid, IonItemDivider, IonRow, IonText, IonModal, IonSlides, IonSlide, IonImg, IonIcon } from "@ionic/react"
import DashboardLayout from "../../../components/Layout/DashboardLayout"
import PageCaption from "../../../components/UI/PageCaption"
import { useSelector, useDispatch } from "react-redux"
import { getApproveSuccess, getAuthToken, getClaimId, getDeclineSuccess } from "../../../store/selectors"
import axiosInstance from "../../../axios-agri"
import EnquirySection from "../../../components/UI/EnquirySection"
import { getDateFromTimeStamp } from "../../../utility/utility"
import { checkmarkDoneOutline, closeCircleOutline } from "ionicons/icons"
import { approveClaim, rejectClaim } from "../../../store/actions/respondActions"
import { Redirect } from "react-router"

const Claim:React.FC = () => {
    const [enquiryData, setEnquiryData] = useState<any>({})
    const token = useSelector(getAuthToken)
    const claimId = useSelector(getClaimId)
    const approveSuccess = useSelector(getApproveSuccess)
    const declineSuccess = useSelector(getDeclineSuccess)
    //const history = useHistory()

    let content;

    useEffect(()=>{
        const fd = new FormData()
        fd.append('complain_id', claimId)
        axiosInstance.post('getImages', fd, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }).then(response => {
            console.log( response.data );
            setEnquiryData(response.data)
            
        }).catch(err => {
            console.log( err );
        })
    }, [token, claimId])
    
    const [showModal, setShowModal] = useState(false)
    const dispatchSetId = useDispatch()
    const dispatchApproval = useDispatch()
    const dispatchRejection = useDispatch()

    const approveHandler = () => {
        dispatchApproval(approveClaim(token, claimId))
    }

    const rejectHandler = () => {
        dispatchApproval(rejectClaim(token, claimId))
    }

    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };

    if (approveSuccess || declineSuccess) {
        content = <Redirect to="response-success" />
    }

    else {
        content = (
            <DashboardLayout title="Enquiry" footer={true}>
            <IonGrid>
                {/* <DashboardCard routeStr="/respond" subTitle="Respond to" title="Enquiries">
                    <IonImg className={styles.cardImage} src={respondImg}></IonImg>
                </DashboardCard>
                <DashboardCard routeStr="/responses" subTitle="Enquiry" title="History">
                    <IonImg className={styles.cardImage} src={historyImg}></IonImg>
                </DashboardCard> */}
                <EnquirySection
                    header="User Details"
                    section1="Name"
                    section2="Mobile No."
                    data1={`${enquiryData.FirstName} ${enquiryData.LastName}`}
                    data2={enquiryData.Mobile}
                    cardType="half"
                />
                <EnquirySection
                    header="Location"
                    section1="Latitude"
                    section2="Longitude"
                    data1={enquiryData.latitude}
                    data2={enquiryData.longitude}
                    cardType="half"
                />
                <EnquirySection
                    header="Claim Details"
                    section1="Damage Type"
                    section2="Description"
                    section3="Date"
                    section4="Damage Area"
                    data1={enquiryData.damage_type}
                    data2={enquiryData.description}
                    data3={enquiryData.timestamp}
                    data4={enquiryData.damage_quantity}
                    cardType="full"
                />
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12">
                        <IonItemDivider className={styles.divider}>Evidence</IonItemDivider>
                    </IonCol>
                </IonRow>
                 <IonModal isOpen={showModal} cssClass='my-custom-class'>
                    <IonSlides pager={true} options={slideOpts}>
                        Image 01
                        {/* {enquiryData.files.map((file:any,index:number)=>(
                            <IonSlide key={index}>
                                <IonRow>
                                    <IonCol>
                                        
                                        <img src={file.image} />
                                    </IonCol>
                                </IonRow>
                            </IonSlide>
                        ))} */}
                    </IonSlides>
                    <IonButton color="customs" onClick={() => setShowModal(false)}>Close</IonButton>
                </IonModal>
                <IonButton color="customs" onClick={() => setShowModal(true)}>Show Evidence</IonButton>
                
                <IonRow style={{marginTop: "10px"}} className="ion-justify-content-center">
                    <IonCol size="6">
                        <IonButton color="success" onClick={() => approveHandler()}><IonIcon icon={checkmarkDoneOutline}></IonIcon>Approve</IonButton>
                    </IonCol>
                    <IonCol size="6">
                        <IonButton color="danger" onClick={() => rejectHandler()}><IonIcon icon={closeCircleOutline} ></IonIcon>Decline</IonButton>
                    </IonCol>
                </IonRow>
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

export default Claim
