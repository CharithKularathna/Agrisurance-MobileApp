import { IonGrid, IonRow, IonCol, IonButton, IonIcon, IonText, IonImg } from '@ionic/react'
import React, { useState } from 'react'
import EvidenceControls from '../../../components/Forms/EvidenceControls'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import PageCaption from '../../../components/UI/PageCaption'
import { usePhotoGallery } from '../../../hooks/usePhotoGallery'
import styles from './EnquiryEvidence.module.css'
import { camera } from 'ionicons/icons'
import { submitClaim } from '../../../store/actions/claimActions'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthToken, getClaimDetails, getSubmitClaimSuccess } from '../../../store/selectors'
import { Redirect } from 'react-router'


const EnquiryEvidence: React.FC = () => {
    const { photos, takePhoto, imagePaths, files, location } = usePhotoGallery()
    const [evidence, setEvidence] = useState({
        photos: []
    });

    const token = useSelector(getAuthToken)
    const claimDetails = useSelector(getClaimDetails)
    const success = useSelector(getSubmitClaimSuccess)
    
    let content;

    if (success) {
        content = <Redirect to='/claim-success' />
    }
    else {
        content = (
            <DashboardLayout title="Dashboard" footer={true}>
                <PageCaption>Step 2 - Attach Evidence</PageCaption>
                <IonGrid>
                    <IonRow>
                        
                        <EvidenceControls evidence={evidence} setEvidence={setEvidence} />
                        <IonRow>
                            <IonCol size='12'>
                                <IonText color='customs'> Take upto 5 photos as Evidence (The GPS location will also be recorded) </IonText>
                            </IonCol>
                        </IonRow>
                        {/* PHOTO PREVIEW */}
                        <IonRow>
                            {photos.map((photo, index) => (
                                <IonCol size="6" key={index}>
                                <IonImg src={photo.webviewPath} />
                                </IonCol>
                            ))}
                        </IonRow>
                        <IonRow>
                            <IonCol size='12' className="ion-text-center">
                                
                            </IonCol>
                        </IonRow>
                        
                    </IonRow>
                    
                    <IonButton color="customs" size="default" onClick={() => takePhoto()}><IonIcon icon={camera}></IonIcon></IonButton>
                    {/* <IonButton disabled={!formFilled} color="customs" size="default" className={buttonStyles} onClick={() => dispatch(setdetails(details))}>Proceed</IonButton> */}
                    <IonRow>
                        <IonCol>
                            <IonButton color="customs" size="default" onClick={() => dispatch(submitClaim({files:files, location:location, token: token, details: {
                                area:claimDetails.area!,
                                description: claimDetails.description,
                                disasterType: claimDetails.disasterType,
                                office: claimDetails.office
                            }}))}>Submit</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </DashboardLayout>
        )
    }
    const dispatch = useDispatch()
    console.log(files)
    return (
        <>
            {content}
        </>
    )
}

export default EnquiryEvidence
