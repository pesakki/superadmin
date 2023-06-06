import React from "react";

import Home1 from "./home1";
import NavBar from "./navData";
import DrawerWrapper from "./sideBar";
import {ReactProSideBar} from 'react-pro-sidebar'
import MainComponent from '../subscription/SubscriptionWizardmainComponent'
import DataList from "../subscription/DataList";
import Dashboard from "../dealership/Dashboard";
function HomePage() {
  return (
    <div>
      <div>
        <Home1 />
        <NavBar/>
         <MainComponent/> 
        {/* <Dashboard/> */}
      </div>
    
    </div>
  );
}

export default HomePage;
