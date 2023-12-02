import React from 'react';
import './App.css';
import SignUp from './components/pages/signUp';
import OverLay from "./components/pages/overlay";
// import Users from './components/pages/users';
import { Route, Routes,Navigate} from "react-router-dom";
import Dashboard from './components/pages/dashboard';
import Login from './components/pages/login';
import {Suspense} from 'react';
// import {LanguageToggle} from './components/pages/languageToggle';
import DrawerPersistant from './components/common/drawer/drawer';
import { useSelector, useDispatch } from 'react-redux';
import OtpRegister from "./components/pages/otpRegister";
import OtpLogin from "./components/pages/otpLogin";
import {LanguageToggle} from "./components/pages/languageToggle";
import Users from './components/pages/users';
import BigTable from './components/pages/bigTable';

import "./utils/langs/ttf/IRANSansWeb(FaNum).ttf"
function App() {
  const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);
  const token = localStorage.getItem('token')  
  return(
  <div >
        <React.Fragment>
          <DrawerPersistant />
        </React.Fragment>
    
      <Routes>
          <React.Fragment>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp-register" element={<OtpRegister />} />
            <Route path="/otp-login" element={<OtpLogin />} />
            <Route
              path="/drawer"
              element={<DrawerPersistant/>}
            />
            <Route
              path="/dashboard"
              element={<Dashboard/>}
            />
            <Route
              path="/bank"
              element={<OverLay/>}
            />
            <Route
              path="/language-toggle"
              element={<LanguageToggle/>}
            />
            <Route
              path="/users"
              element={<Users/>}
            />
            <Route
              path="/big-table"
              element={<BigTable/>}
            />
          </React.Fragment>
        
      </Routes>
    </div>
  );
};


export default App;
