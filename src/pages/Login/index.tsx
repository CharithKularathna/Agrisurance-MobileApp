import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import LoginControls from '../../components/Forms/LoginControls';
import Toolbar from '../../components/Nav/Toolbar';
import styles from './Login.module.css';

const Login: React.FC = () => {
  return (
    <IonPage style={{background:"#222428"}}>
      <Toolbar>Login to your Account</Toolbar>
      <IonContent className="ion-text-center" fullscreen>
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
