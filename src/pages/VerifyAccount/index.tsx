import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import styles from './VerifyAccount.module.css';

const VerifyAccount: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Verify Account</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Verify Account</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default VerifyAccount;
