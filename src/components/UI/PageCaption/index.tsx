import { IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import React from "react";
import styles from './PageCaption.module.css'

const PageCaption : React.FC<any> = (props) => {
    return(
        <IonGrid>
            <IonRow>
                <IonCol className={styles.captionContainer}>
                  <IonText className={styles.caption} color="customs">{props.children}</IonText>
                </IonCol>     
            </IonRow>
        </IonGrid>
    )
}

export default PageCaption;