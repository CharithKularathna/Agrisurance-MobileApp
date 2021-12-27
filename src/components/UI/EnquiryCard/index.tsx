import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonText } from '@ionic/react'
import styles from 'EnquiryCard.module.css'
import React from 'react'

const EnquiryCard:React.FC<any> = ({id, status, date, clickHandler, cardType}) => {
    let color;
    if (status == "Pending"){
        color = "customs"
    }
    else if (status == "Approved"){
        color = "success"
    }
    else {
        color = "danger"
    }
    return (
        <IonCard onClick={(e) => clickHandler(id)}>
            <IonCardHeader>
                <IonCardSubtitle>Enquiry ID - {id}</IonCardSubtitle>
                <IonCardTitle>Status - <IonText color={color}>{status}</IonText></IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                Date - {date}
            </IonCardContent>
        </IonCard>
    )
}

export default EnquiryCard
