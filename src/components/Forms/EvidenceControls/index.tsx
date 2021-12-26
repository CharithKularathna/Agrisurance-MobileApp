import { IonGrid, IonRow, IonCol, IonItemDivider, IonItem, IonLabel, IonInput } from '@ionic/react'
import React from 'react'
import styles from './EvidenceControls.module.css'

const EvidenceControls:React.FC<any> = ({ setEvidence, evidence } : { setEvidence : ({}) => void , evidence: any}) => {
    return (
        <IonGrid className="">
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItemDivider className={styles.divider}>Photo Evidence</IonItemDivider>
                </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    {/* <IonItem className={styles.registerInputContainer} lines="none">
                        <IonLabel position="stacked" color="customs">Password</IonLabel>
                        <IonInput onIonChange={(e: any) => setEvidence({...evidence, photo: e.detail.value})} className={styles.field} type="file" placeholder="Photo" required={true}/>
                    </IonItem> */}
                </IonCol>
            </IonRow>
            
        </IonGrid>
    )
}

export default EvidenceControls
