import { IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonCol, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import Toolbar from '../../components/Nav/Toolbar';
import styles from './Home.module.css';
import logo from '../../assets/img/logo-trans.png'
import { getString, TXT_HOME_TITLE, TXT_LOGIN_BTN, TXT_REGISTER_BTN } from '../../localization';
import { useSelector } from 'react-redux';
import { getLang } from '../../store/selectors';

const Home: React.FC = () => {
  const logoSrc = "../../assets/img/logo-trans.png"
  const pageStyles = "ion-text-center " + styles.page
  const lang = useSelector(getLang)

  return (
    <IonPage>
      {/*<Toolbar></Toolbar>*/}
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
              <IonText className={styles.captionText} color="customs" >{getString(TXT_HOME_TITLE, lang)}</IonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <IonButton routerLink="/login" fill="solid" color="customs" className={styles.button}>{getString(TXT_LOGIN_BTN, lang)}</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
                <IonButton routerLink="/register" fill="outline" color="customs" className={styles.button}>{getString(TXT_REGISTER_BTN, lang)}</IonButton>
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
