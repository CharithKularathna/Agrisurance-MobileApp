import { IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonItemDivider, IonSelect, IonSelectOption, IonTextarea } from '@ionic/react'
import React from 'react'
import { claimDetails } from '../../../types'
import styles from './DetailsFormControls.module.css'

const DetailsFormControls: React.FC<any> = ({ setdetails, details } : { setdetails : ({}) => void , details: claimDetails}) => {
    const offices = ["Ratnapura", "Pelmadulla", "Gampaha", "Kahawatta", "Embilipitiya"]
    const disasterTypes = [
        "Wild Elephant/Animal Attacks", 
        "Pests or Insects", 
        "Crop Disease", 
        "Natural Disaster (Flood, Land slide, etc.)", 
        "Other"
    ]

    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.detailsInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Name of the Land Owner</IonLabel>
                        <IonInput className={styles.field} type="text" placeholder="Name" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.detailsInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Disaster Type</IonLabel>
                        <IonSelect value={details.disasterType} placeholder="Select One" onIonChange={(e: any) => setdetails({...details, disasterType: e.detail.value})}>
                            {disasterTypes.map((dType, index) => (
                                <IonSelectOption value={dType} key={index}>{dType}</IonSelectOption>
                            ))}
                            {/*<IonSelectOption value="female">Female</IonSelectOption>
                            <IonSelectOption value="male">Male</IonSelectOption>*/}
                        </IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
            
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.detailsTextAreaContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Description</IonLabel>
                        <IonTextarea rows={5} onIonChange={(e: any) => setdetails({...details, description: e.detail.value})} className={styles.field} placeholder="Description" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.detailsInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Area of Land Affected (in perches)</IonLabel>
                        <IonInput onIonChange={(e: any) => setdetails({...details, area: e.detail.value})} className={styles.field} type='number' placeholder="Area" required={true}/>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItem className={styles.detailsInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Nearest Office</IonLabel>
                        <IonSelect value={details.office} placeholder="Select One" onIonChange={(e: any) => setdetails({...details, office: e.detail.value})}>
                            {offices.map((office, index) => (
                                <IonSelectOption value={office} key={index}>{office}</IonSelectOption>
                            ))}
                            {/*<IonSelectOption value="female">Female</IonSelectOption>
                            <IonSelectOption value="male">Male</IonSelectOption>*/}
                        </IonSelect>
                    </IonItem>
                </IonCol>
            </IonRow>
        </IonGrid>
    )
}

export default DetailsFormControls
