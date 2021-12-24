import { IonRow, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonImg } from '@ionic/react';
import React from 'react'
import { useHistory } from 'react-router';

import styles from './DashboardCard.module.css'
const DashboardCard:React.FC<any> = ({subTitle, title, routeStr, children}:any) => {
    const history = useHistory()
    return (
        <IonRow>
                <IonCol size="12">
                <IonCard onClick={() => history.push(routeStr)} className={styles.card}>
                    <IonCardHeader className={styles.cardHeader}>
                        <IonItem lines='none' className={styles.iconWrapper}>
                            {children}
                        </IonItem> 
                        <IonCardSubtitle className={styles.cardSubtitle}  color="customs">{subTitle}</IonCardSubtitle>
                        <IonCardTitle color="customs" className={styles.cardTitle}>{title}</IonCardTitle>
                    </IonCardHeader>
                </IonCard>
                </IonCol>
        </IonRow>
    )
}

export default DashboardCard;
