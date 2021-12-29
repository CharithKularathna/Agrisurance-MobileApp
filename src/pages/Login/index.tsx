import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import LoginControls from '../../components/Forms/LoginControls';
import Toolbar from '../../components/Nav/Toolbar';
import styles from './Login.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken, getLoginError, getLoading, getLang } from '../../store/selectors';
import { Alert } from '../../components/UI/Alert/Alert';
import { login } from '../../store/actions/userActions';
import { Redirect } from 'react-router';
import { getString, LOGIN_ERROR, TXT_LOGIN_BTN } from '../../localization';

const Login: React.FC<any> = () => {
  const pageStyles = "ion-text-center " + styles.page
  const buttonStyles = "" + styles.loginBtn

  const dispatch = useDispatch()
  //const dispatchResetUI = useDispatch()
  const [credentials, setCredentials] = useState({username: "", password: ""})
  //const [password, setpassword] = useState("")
  const token = useSelector(getAuthToken)
  let error = useSelector(getLoginError)
  const lang = useSelector(getLang)

  const content = token ? <Redirect to="/dashboard" /> : (
    <IonPage>
      <Toolbar>{getString(TXT_LOGIN_BTN,lang)}</Toolbar>
      <IonContent className={pageStyles} fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login to your Account</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonGrid>
            <IonRow>
                {/*<IonCol className={styles.loginTitle}>
                  Login to your Account
                  </IonCol>*/}
                
            </IonRow>
            <IonRow>
                <IonCol className={styles.loginSubTitle}>
                    
                </IonCol>
                
            </IonRow>
        </IonGrid>

        <IonGrid className={styles.bgContent}>
            <IonRow>
                <IonCol className={styles.loginControls}>
                    <LoginControls lang={lang} setCredentials={setCredentials} />
                </IonCol>
        
            </IonRow>
            {error &&
              <IonRow>
                  <IonCol>
                    <Alert type="error" message={getString(LOGIN_ERROR,lang)}/>
                  </IonCol>
              </IonRow>
            }
            <IonButton size="default" color="customs" className={buttonStyles} onClick={() => dispatch(login(credentials))}>{getString(TXT_LOGIN_BTN,lang)}</IonButton>
        </IonGrid>
        
        <IonGrid>
            <IonRow className={styles.copyrights}>
              Copyrights © Team MZJ - {new Date().getFullYear()}
            </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )

  return (
    <>
      {content}
    </>
    
  );
};

export default Login;
