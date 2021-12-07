import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonText, IonItemDivider } from '@ionic/react';
import RegisterControls from '../../components/Forms/RegisterControls';
import Toolbar from '../../components/Nav/Toolbar';
import PageCaption from '../../components/UI/PageCaption';
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

        <PageCaption>Fill in the following and Register!</PageCaption>

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

