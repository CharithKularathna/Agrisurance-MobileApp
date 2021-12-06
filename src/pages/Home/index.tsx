import { IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonCol, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import Toolbar from '../../components/Nav/Toolbar';
import styles from './Home.module.css';
import logo from '../../assets/img/logo-green.jpg'

const Home: React.FC = () => {
  const logoSrc = "../../assets/img/logo-green.jpg"
  const pageStyles = "ion-text-center " + styles.page
  return (
    <IonPage>
      <Toolbar></Toolbar>
      <IonContent className={pageStyles} fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonImg className={styles.logo} src={logo} />

        <IonGrid>
          <IonRow >
            <IonCol className={styles.caption}>
              <IonText  color="success" >Welcome to Agrisurance Mobile App</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <IonButton fill="solid" color="warning" className={styles.button}>LOGIN</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <IonButton fill="outline" color="warning" className={styles.button}>SIGN UP</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
            <IonRow className={styles.copyrights}>
              Copyrights © Team MZJ - {new Date().getFullYear()}
            </IonRow>
        </IonGrid>

      </IonContent>
    </IonPage>
  );
};

export default Home;
