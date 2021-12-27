import styles from './EnquirySection.module.css'

import React from 'react'
import { IonRow, IonCol, IonItemDivider, IonText } from '@ionic/react'

const EnquirySection:React.FC<any> = ({header, section1, section2, section3, section4, data1, data2, data3, data4, cardType}) => {
    let content;

    if (cardType == "half") {
        content = (
            <>
                <IonRow className="ion-justify-content-center">
                    <IonCol size="12">
                        <IonItemDivider className={styles.divider}>{header}</IonItemDivider>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol size="6">
                        <IonText className={styles.semi} color="customs">{section1}</IonText>
                    </IonCol>
                    <IonCol size="6">
                        <IonText className={styles.semi} color="customs">{section2}</IonText>
                        
                    </IonCol>
                </IonRow>
                <IonRow className={styles.sectionBottom}>
                    <IonCol size="6">
                        {data1}
                    </IonCol>
                    <IonCol size="6">
                        {data2}
                    </IonCol>
                </IonRow>
            </>
        )
    }

    else {
        content = (
        <>
            <IonRow className="ion-justify-content-center">
                <IonCol size="12">
                    <IonItemDivider className={styles.divider}>{header}</IonItemDivider>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="12">
                    <IonText className={styles.semi} color="customs">{section1}</IonText>
                </IonCol>
            </IonRow>
            <IonRow className={styles.sectionBottom}>
                <IonCol size="12">
                    {data1}
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="12">
                    <IonText className={styles.semi} color="customs">{section2}</IonText>
                </IonCol>
            </IonRow>
            <IonRow className={styles.sectionBottom}>
                <IonCol size="12">
                    {data2}
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol size="6">
                    <IonText className={styles.semi} color="customs">{section3}</IonText>
                </IonCol>
                <IonCol size="6">
                    <IonText className={styles.semi} color="customs">{section4}</IonText>
                    
                </IonCol>
            </IonRow>
            <IonRow className={styles.sectionBottom}>
                <IonCol size="6">
                    {data3}
                </IonCol>
                <IonCol size="6">
                    {data4} perches
                </IonCol>
            </IonRow>
        </>
        )
    }

    return (
        <>
            {content}
        </>
    )
}

export default EnquirySection
