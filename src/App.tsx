import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Verify from './pages/VerifyAccount';
import Verified from './pages/Verified';
import SelectLang from './pages/SelectLang';
import FarmerDashboard from './pages/Farmer/Dashboard'
import OfficerDashboard from './pages/Officer/Dashboard'
import FarmerEnquiryDetails from './pages/Farmer/EnquiryDetails'
import FarmerEnquiryEvidence from './pages/Farmer/EnquiryEvidence'
import FarmerEnquirySuccess from './pages/Farmer/EnquirySuccess';
import Respond from './pages/Officer/Respond'
import Claim from './pages/Officer/Claim';
import FarmerEnquiryHistory from './pages/Farmer/History';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';


/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useSelector } from 'react-redux';
import { getUserType } from './store/selectors';
import { FARMER } from './constants';
import RespondSuccess from './pages/Officer/RespondSuccess';
import Responses from './pages/Officer/Responses';





const App: React.FC = () => {
  const userType = useSelector(getUserType)
  // const farmerAuthroutes = [
  //     <Route exact path="/dashboard" component={FarmerDashboard}></Route>,
  //     <Route exact path="/enquiry" component={FarmerEnquiry}></Route>,
  //     <Route exact path="/history" component={FarmerHistory}></Route>
  // ]
  
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          {/* {userType == FARMER ? <Route exact path="/dashboard" component={FarmerDashboard}></Route> : null} */}
          <Route exact path="/responses" component={Responses} ></Route>
          <Route exact path="/history" component={FarmerEnquiryHistory} ></Route>
          <Route exact path="/response-success" component={RespondSuccess} ></Route>
          <Route exact path="/claim-by-id" component={Claim} ></Route>
          <Route exact path="/respond" component={Respond} ></Route>
          <Route exact path="/claim-success" component={FarmerEnquirySuccess} ></Route>
          <Route exact path="/attach-evidence" component={FarmerEnquiryEvidence} ></Route>
          <Route exact path="/enquiry-details" component={FarmerEnquiryDetails} ></Route>
          <Route exact path="/dashboard" component={userType == FARMER ? FarmerDashboard : OfficerDashboard}></Route>
          <Route exact path="/verified" ><Verified /></Route>
          <Route exact path="/verify" ><Verify /></Route>
          <Route exact path="/register" ><Register /></Route>
          <Route exact path="/login" ><Login /></Route>
          <Route exact path="/home" ><Home /></Route>
          <Route exact path="/lang" component={SelectLang} ></Route>
          <Route exact path="/"> <Redirect to="/lang" /> </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
