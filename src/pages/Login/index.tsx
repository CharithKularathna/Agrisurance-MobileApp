import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import LoginControls from '../../components/Forms/LoginControls';
import Toolbar from '../../components/Nav/Toolbar';
import styles from './Login.module.css';

const Login: React.FC = () => {
   const pageStyles = "ion-text-center " + styles.page
   const buttonStyles = "" + styles.loginBtn

  return (
    <IonPage>
      <Toolbar></Toolbar>
      <IonContent className={pageStyles} fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login to your Account</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
            <IonRow>
                <IonCol className={styles.loginTitle}>
                    Welcome to Agrisurance
                </IonCol>
                
            </IonRow>
            <IonRow>
                <IonCol className={styles.loginSubTitle}>
                    Login to your Account to Proceed
                </IonCol>
                
            </IonRow>
        </IonGrid>

        <IonGrid className={styles.bgContent}>
            <IonRow>
                <IonCol className={styles.loginControls}>
                    <LoginControls />
                </IonCol>
            </IonRow>
            <IonButton size="default" className={buttonStyles}>LogIn</IonButton>
        </IonGrid>
        
        <IonGrid>
            <IonRow className={styles.copyrights}>
              Copyrights © Team MZJ {new Date().getFullYear()}
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
