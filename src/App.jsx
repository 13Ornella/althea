import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import IndexPage from './pages/offre.jsx';
import Layout from './Layout.jsx';
import RegisterPage from './pages/RegisterPage';
import home from './pages/home.jsx';
import loginPage from './pages/loginPage';
import accountPage from './pages/accountPage.jsx';
import candidature from './pages/candidature.jsx';
import entretien from './pages/entretien.jsx';
import dashboard from './pages/dashboard.jsx';
import dashgrid from './dashgrid.jsx';
import offre from './pages/offre.jsx';
import statistique from './pages/statistique.jsx';
import { FooterWithSocialLinks } from './pages/footer.jsx';
import Storefront from './pages/Storefront.jsx';
import admHome from './pages/admHome.jsx';
import Header from './Header.jsx';
import Barchart from './pages/barchart.jsx';
import CanOffre from './pages/canOffre.jsx';
import Sidebar from './pages/sidebar.jsx';
import FlyoutMenu from './pages/flyoutMenu.jsx';
import Flydash from './pages/Flydash.jsx';

///axios.defaults.baseURL = 'http://localhost:8080';


const App = () => {
  const [pages, setPage] = useState("layout");
  return (

   < BrowserRouter>
    <Routes>
      <Route path="/" Component={Layout}>
        <Route path='/' Component={FlyoutMenu}/>
        <Route path='/' Component={Flydash}/>
      <Route path='/foot' Component={FooterWithSocialLinks}/>
      <Route path='/canoffre' Component={CanOffre}/>
      <Route path="/offre" Component={offre}/>
      <Route path='/bar' Component={Barchart}/>
      <Route path='/adm' Component={admHome}/>
      <Route path='/store' Component={Storefront}/>
      <Route path="/login"  Component={loginPage} />
      <Route path="/register" Component={RegisterPage}/>
      <Route path='/stat' Component={statistique}/>
      <Route path="/home" Component={home}/>
      <Route path="/account" Component={accountPage}/>
      <Route path='/candidature' Component={candidature}/>
      <Route path='/entretien' Component={entretien}/>
      <Route index Component={dashboard}/>
      <Route path='/dashgrid' Component={dashgrid}/>
      <Route path='/flyout' Component={FlyoutMenu}/>
      <Route path='/' Component={Flydash}/>
      <Route path='/side' Component={Sidebar}/>
      <Route path='/statistique' Component={statistique}/>
            </Route>
    </Routes>
    </BrowserRouter>
      );    
}
export default App;