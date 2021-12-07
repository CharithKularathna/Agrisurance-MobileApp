import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonButton } from '@ionic/react';
import OTPControls from '../../components/Forms/OTPControls';
import Toolbar from '../../components/Nav/Toolbar';
import PageCaption from '../../components/UI/PageCaption';

import styles from './VerifyAccount.module.css';

const VerifyAccount: React.FC = () => {
  const pageStyles = "ion-text-center " + styles.page
  const buttonStyles = "" + styles.verifyBtn

  return (
    <IonPage>
      <Toolbar>Verify Account</Toolbar>
      <IonContent className={pageStyles} fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>

        <PageCaption>Enter the 6-digit OTP sent to your Mobile</PageCaption>

        <IonGrid className={styles.bgContent}>
            <IonRow>
                <IonCol className={styles.OTPControls}>
                    <OTPControls />
                </IonCol>
            </IonRow>
            <IonButton color="customs" size="default" className={buttonStyles}>Verify</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default VerifyAccount;
