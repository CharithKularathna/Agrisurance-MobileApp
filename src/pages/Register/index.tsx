import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonText, IonItemDivider } from '@ionic/react';
import RegisterControls from '../../components/Forms/RegisterControls';
import Toolbar from '../../components/Nav/Toolbar';
import PageCaption from '../../components/UI/PageCaption';
import styles from './Register.module.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthToken, getRegisterError, getLoading } from '../../store/selectors';
import { Alert } from '../../components/UI/Alert/Alert';
import { register } from '../../store/actions/registerActions';
import { isFormFilled } from '../../utility/formValidation';


const Register: React.FC = () => {
  const pageStyles = "ion-text-center " + styles.page
  const buttonStyles = "" + styles.registerBtn
  let formFilled = false;
  let passwordMismatch = false;
  
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

  const token = useSelector(getAuthToken)
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
                    <RegisterControls credentials={credentials} setCredentials={setCredentials} />
                </IonCol>
            </IonRow>
            {error &&
              <IonRow>
                  <IonCol>
                    <Alert type="error" message="Failed to register. Please check the details and re-submit."/>
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
            <IonButton disabled={!formFilled} color="customs" size="default" className={buttonStyles} onClick={() => dispatch(register(credentials))}>Register</IonButton>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;

