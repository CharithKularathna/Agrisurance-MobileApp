import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonText, IonItemDivider } from '@ionic/react';
import RegisterControls from '../../components/Forms/RegisterControls';
import Toolbar from '../../components/Nav/Toolbar';
import PageCaption from '../../components/UI/PageCaption';
import styles from './Register.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken, getRegisterError, getLoading, getRegisterSuccess, getLang } from '../../store/selectors';
import { Alert } from '../../components/UI/Alert/Alert';
import { register } from '../../store/actions/registerActions';
import { isFormFilled } from '../../utility/formValidation';
import { Redirect } from 'react-router';
import { getString, REGISTER_ERROR, REGISTER_Title, TXT_LOGIN_BTN, TXT_REGISTER_BTN } from '../../localization';


const Register: React.FC = () => {
  const pageStyles = "ion-text-center " + styles.page
  const buttonStyles = "" + styles.registerBtn
  let formFilled = false;
  let passwordMismatch = false;
  const lang = useSelector(getLang)
  
  const dispatch = useDispatch()
  //const dispatchResetUI = useDispatch()
  const [credentials, setCredentials] = useState({
    fname: "", 
    lname: "",
    nic:"",
    mobile:"",
    addressLine1:"",
    addressLine2:"",
    gn:"",
    city:"",
    password:"",
    confirmPassword:""
  })

  const regSuccess = useSelector(getRegisterSuccess)
  let error = useSelector(getRegisterError)

  //Check Password and Confirm Password
  if ((credentials.confirmPassword.length > 0) && (credentials.password != credentials.confirmPassword)) {
      passwordMismatch = true
  }
  else if (credentials.password === credentials.confirmPassword) {
      passwordMismatch = false
  }

  //Check Form filled
  formFilled = (isFormFilled(credentials) && !passwordMismatch )

  const content = regSuccess ? <Redirect to="/verify" /> : (
    <IonPage>
    <Toolbar>{getString(TXT_REGISTER_BTN, lang)}</Toolbar>
    <IonContent className={pageStyles} fullscreen>
      {/* <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Register</IonTitle>
        </IonToolbar>
      </IonHeader> */}

      <PageCaption>{getString(REGISTER_Title, lang)}</PageCaption>

      <IonGrid className={styles.bgContent}>
          <IonRow>
              <IonCol className={styles.registerControls}>
                  <RegisterControls lang={lang} credentials={credentials} setCredentials={setCredentials} />
              </IonCol>
          </IonRow>
          {error &&
            <IonRow>
                <IonCol>
                  <Alert type="error" message={getString(REGISTER_ERROR,lang)}/>
                </IonCol>
            </IonRow>
          }
          {passwordMismatch &&
            <IonRow>
                <IonCol>
                  <Alert type="error" message="Password and Confirm Password do not match."/>
                </IonCol>
            </IonRow>
          }
          <IonButton disabled={!formFilled} color="customs" size="default" className={buttonStyles} onClick={() => dispatch(register(credentials))}>{getString(TXT_REGISTER_BTN,lang)}</IonButton>
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

export default Register;

