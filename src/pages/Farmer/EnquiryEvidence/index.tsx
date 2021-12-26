import { IonGrid, IonRow, IonCol } from '@ionic/react'
import React from 'react'
import DashboardLayout from '../../../components/Layout/DashboardLayout'
import PageCaption from '../../../components/UI/PageCaption'
import styles from './EnquiryEvidence.module.css'

const EnquiryEvidence: React.FC = () => {
    return (
        <DashboardLayout title="Dashboard" footer={true}>
            <PageCaption>Attach Evidence and Submit!</PageCaption>
            <IonGrid>
                <IonRow>
                    <IonCol className={styles.registerControls}>
                        {/* <DetailsFormControls details={details} setdetails={setdetails} /> */}
                    </IonCol>
                </IonRow>
                {/* <IonButton disabled={!formFilled} color="customs" size="default" className={buttonStyles} onClick={() => dispatch(setdetails(details))}>Proceed</IonButton> */}
            </IonGrid>
        </DashboardLayout>
    )
}

export default EnquiryEvidence
