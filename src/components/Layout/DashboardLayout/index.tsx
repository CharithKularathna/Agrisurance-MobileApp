import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react'
import styles from './DashboardLayout.module.css'
import { homeOutline, settingsOutline, notificationsOutline } from 'ionicons/icons';

const DashboardLayout:React.FC<any> = ({children, title, footer}) => {
    const pageStyles = "ion-text-center " + styles.page
    return (
        <IonPage>
            {/* HEADER */}
            <IonHeader>
                <IonToolbar className={styles.toolbarCustom}>
                    <IonTitle className={styles.toolbarTitle}>
                        <IonText>{title}</IonText>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            {/* CONTENT */}
            <IonContent className={pageStyles}>
                {children}
            </IonContent>
            
            {/* FOOTER */}
            {footer ?
                (<IonFooter>
                    <IonToolbar className={styles.footer}>
                        <IonButtons slot="secondary">
                            <IonButton className={styles.footerBtn}><IonIcon color="customs" slot="icon-only" icon={homeOutline} /></IonButton>
                            <IonButton className={styles.footerBtn}><IonIcon color="customs" slot="icon-only" icon={notificationsOutline} /></IonButton>
                            <IonButton className={styles.footerBtn}><IonIcon color="customs" slot="icon-only" icon={settingsOutline} /></IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonFooter>)
                : null
            }
        </IonPage>
    )
}

export default DashboardLayout;