import { IonContent, IonGrid, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonButton } from '@ionic/react';
import OTPControls from '../../components/Forms/OTPControls';
import Toolbar from '../../components/Nav/Toolbar';
import PageCaption from '../../components/UI/PageCaption';
import React, {useEffect, useState} from 'react';


import styles from './VerifyAccount.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUserMobile, getVerifyError, getVerifySuccess } from '../../store/selectors';
import { otpSend, verify } from '../../store/actions/registerActions';
import { numberModifier, parseOtpToInt } from '../../utility/formValidation';
import { Alert } from '../../components/UI/Alert/Alert';
import PopOver from '../../components/UI/PopOver';
import { Redirect } from 'react-router';

const VerifyAccount: React.FC<any> = ({history}) => {
  const pageStyles = "ion-text-center " + styles.page
  const buttonStyles = "" + styles.verifyBtn

  const [otp, setOtp] = useState({
    d1: "",
    d2: "",
    d3: "",
    d4: "",
    d5: "",
    d6: ""
  })

  console.log(otp)
  const userMobile = useSelector(getUserMobile)
  let verifyError = useSelector(getVerifyError)
  const verifySuccess = useSelector(getVerifySuccess)
  const otpSendDispatch = useDispatch()
  const verifyDispatch = useDispatch()

  useEffect(()=>{
    //console.log("Inside Verify useEffect")
    otpSendDispatch(otpSend(userMobile))
  }, [])
  
  if (verifySuccess) {
    history.push("/verified")
  }
  
  return (
    <IonPage>
      <Toolbar>Verify Account</Toolbar>
      <IonContent className={pageStyles} fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <PageCaption>Enter the 6-digit OTP sent to your Mobile</PageCaption>

        <IonGrid className={styles.bgContent}>
            <IonRow>
                <IonCol className={styles.OTPControls}>
                    <OTPControls otp={otp} setOtp={setOtp} />
                </IonCol>
            </IonRow>
            {verifyError &&
            <IonRow>
                <IonCol>
                  <Alert type="error" message={verifyError}/>
                </IonCol>
            </IonRow>
            }
            <IonButton onClick={() => verifyDispatch(verify({otp: parseOtpToInt(otp), phoneNo: numberModifier(userMobile)}))} color="customs" size="default" className={buttonStyles}>Verify</IonButton>
        </IonGrid>
        {/* <PopOver isOpen={true} /> */}
      </IonContent>
    </IonPage>
  );
};

export default VerifyAccount;
