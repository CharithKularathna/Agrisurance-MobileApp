import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonText } from '@ionic/react';
import RegisterControls from '../../components/Forms/RegisterControls';
import Toolbar from '../../components/Nav/Toolbar';
import styles from './Register.module.css';

const Register: React.FC = () => {
  const pageStyles = "ion-text-center " + styles.page
  const buttonStyles = "" + styles.registerBtn

  return (
    <IonPage>
      <Toolbar>Register</Toolbar>
      <IonContent className={pageStyles} fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid>
            <IonRow>
                <IonCol className={styles.registerTitleContainer}>
                  <IonText className={styles.registerTitle} color="customs">Fill in the following and Register!</IonText>
                </IonCol>     
            </IonRow>
        </IonGrid>

        <IonGrid className={styles.bgContent}>
            <IonRow>
                <IonCol className={styles.registerControls}>
                    <RegisterControls />
                </IonCol>
            </IonRow>
            <IonButton color="customs" size="default" className={buttonStyles}>Register</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;

