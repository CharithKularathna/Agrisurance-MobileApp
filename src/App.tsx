import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Verify from './pages/VerifyAccount';
import Verified from './pages/Verified';
import SelectLang from './pages/SelectLang';

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


const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
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
);

export default App;
