import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import {Appp} from './Controle2v1/Appp';
import {Afficher} from './links/affichage'
//import {Afficher} from './ordinateur/affichager'
import {Aficher} from './controle/Aficher'
import {Controle201v2} from './Controle201v2/Controle201v2'
import { BrowserRouter } from 'react-router-dom';
import Controle1V2 from './Controle1V2/Controle1V2';
import Afff from './control201/Affff';
import {GestionChambre} from './Controle2V11/GestionChambre'
import Contrôle1Devowfs204V1 from './contrôle1-devowfs204_v1/contrôle1-devowfs204_v1'
import Contrôle1Devowfs202 from './contrôle1-devowfs202/contrôle1-devowfs202'
import {App} from './contrôle 2 - devowfs202_v2/app'
import { legacy_createStore } from 'redux';
import { Affichagee } from "./redux/Affichageee";
import { Provider } from 'react-redux';
//import {reducer} from "./redux/store";
//import AppGestionHotel from './Controle2V11/AppGestionHotel';
import AppGestionHotelP2 from './Controle2V11P2/AppGestionHotelP2';
import { Controle2V11 } from './Controle2V11/store';
import AppControl2024 from './abdellatifcontrol/appControl2024'
import AppControle2V3 from './Controle2V3/AppControle2V3';
import Exercice8 from './Serie_Revision-react/EXERCICE8';
import Exercice1 from './Serie_Revision-react/EXERCICE1';
import Exercice4 from './Serie_Revision-react/EXERCICE4';
import Appcontrol202 from './controle202/Appcontrol202'
//const st1=legacy_createStore(reducer)
//const st2=legacy_createStore(Controle2V11)
import Apptool from './toolkit1er/Apptool';
import { storetool } from './toolkit1er/store'
import { Recettes } from './fadwatoolkit/app';
import { toolk } from './fadwatoolkit/sotre';
import Cher from './chercherbar/cher';
import { lis } from './chercherbar/store';
import AppVoitures from './ISTA-ALADARISSA-EFM/AppVoitures';
import APPApi from './ApiEX/APPApi';
import ProductList from './StoreProductsMiniProject/ProductList';
import APPTest from './TESTAPI/APPTest';
import AppApiControle2 from './contrôle2_v3Api/AppApiControle2';
import AppStagiaires from './EFMRegionaleFrontEnd/AppStagiaires';
import store from './EFMRegionaleFrontEnd/redux/store';
import AppRedux from './EFMRegionaleFrontEnd/redux/AppRedux';
import InfoProd from './ExamenFinModuleRegional/InfoProd';
import AppManga from './ProjetManga/AppManga';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
<AppManga/>
/* <><Provider store={lis}><Cher/></Provider></> */
//<BrowserRouter><AppApiControle2/></BrowserRouter>
//<Provider store={store}><AppRedux/></Provider>
)

