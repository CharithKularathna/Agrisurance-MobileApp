import { IonHeader, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import styles from './Toolbar.module.css'

const Toolbar: React.FC<any> = (props) => {
    return(
        <IonHeader>
            <IonToolbar className={styles.toolbarCustom}>
                <IonTitle className={styles.toolbarTitle}><IonText>{props.children}</IonText></IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default Toolbar;