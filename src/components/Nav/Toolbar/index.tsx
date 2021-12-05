import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

import styles from './Toolbar.module.css'

const Toolbar: React.FC<any> = (props) => {
    return(
        <IonHeader>
            <IonToolbar className={styles.toolbarCustom}>
                <IonTitle>{props.children}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
}

export default Toolbar;