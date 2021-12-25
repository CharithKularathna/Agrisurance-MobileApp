import { IonContent, IonGrid, IonHeader, IonImg, IonPage, IonRow, IonCol, IonTitle, IonToolbar, IonButton, IonText } from '@ionic/react';
import Toolbar from '../../components/Nav/Toolbar';
import styles from './SelectLang.module.css';
import logo from '../../assets/img/logo-trans.png'
import { TXT_LANG_ENG, TXT_LANG_SIN, TXT_SIN_BTN, TXT_ENG_BTN } from '../../localization';
import { useDispatch, useSelector } from 'react-redux';
import { getLang } from '../../store/selectors';
import { setLang } from '../../store/actions/userActions';
import { useEffect } from 'react';
import { useHistory } from 'react-router';

const SelectLang: React.FC = () => {
  const logoSrc = "../../assets/img/logo-trans.png"
  const pageStyles = "ion-text-center " + styles.page
  const dispatch = useDispatch();
  const lang = useSelector(getLang)
  const history = useHistory()

  useEffect(() => {
    if(lang && lang!=="") {
      history.push('/home')
    }
  },[lang])

  return (
    <IonPage>
      <IonContent className={pageStyles} fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <IonImg className={styles.logo} src={logo} />

        <IonGrid>
          <IonRow >
            <IonCol className={styles.caption}>
              <IonText className={styles.captionText} color="customs" >{TXT_LANG_ENG}</IonText>
            </IonCol>
          </IonRow>
          <IonRow >
            <IonCol className={styles.caption}>
              <IonText className={styles.captionText} color="customs" >{TXT_LANG_SIN}</IonText>
            </IonCol>
          </IonRow>
          <IonRow style={{marginTop:'10px'}}>
            <IonCol size='1'>
            </IonCol>
            <IonCol size='5'>
                <IonButton fill="outline" color="customs" className={styles.button} onClick={() => dispatch(setLang("si"))}>{TXT_SIN_BTN}</IonButton>
            </IonCol>
            <IonCol size='5'>
                <IonButton fill="outline" color="customs" className={styles.button} onClick={() => dispatch(setLang("en"))}>{TXT_ENG_BTN}</IonButton>
            </IonCol>
            <IonCol size='1'>
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

export default SelectLang;
