import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import DetailsFormControls from '../../../components/Forms/DetailsFormControls'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import PageCaption from '../../../components/UI/PageCaption'
import { setDetails } from '../../../store/actions/claimActions'
import { getAddDetailsSuccess, getClaimDetails } from '../../../store/selectors'

import { isFormFilled } from '../../../utility/formValidation';

import styles from './EnquiryDetails.module.css'

const EnquiryDetails:React.FC = () => {
    //const history = useHistory()
    const addDetailsSuccess = useSelector(getAddDetailsSuccess)
    /*
    if (addDetailsSuccess) {
        history.push('/attach-evidence')
    }
    */
    const [details, setdetails] = useState({
        type: '',
        description: '',
        area: 0,
        office: ''
    })
    

    const dispatch = useDispatch()

    const formFilled = isFormFilled(details)
    //console.log(details)
    const buttonStyles = "" + styles.proceedBtn
    
    const content = addDetailsSuccess ? <Redirect to="/attach-evidence" /> : (
        <DashboardLayout title="Submit Claim" footer={true}>
            <PageCaption>Enter all the details and Proceed!</PageCaption>
            <IonGrid>
                <IonRow>
                    <IonCol className={styles.registerControls}>
                        <DetailsFormControls details={details} setdetails={setdetails} />
                    </IonCol>
                </IonRow>
                <IonButton disabled={!formFilled} color="customs" size="default" className={buttonStyles} onClick={() => dispatch(setDetails(details))}>Proceed</IonButton>
            </IonGrid>
        </DashboardLayout>
    )

    return (
        <>
            {content}
        </>
    )
}

export default EnquiryDetails
