import React from 'react';
import './App.css';
import SignUp from './components/pages/signUp';
import Bank from "./components/pages/bank";
// import Users from './components/pages/users';
import { Route, Routes,Navigate} from "react-router-dom";
import Dashboard from './components/pages/dashboard';
import Login from './components/pages/login';
import {Suspense} from 'react';
// import {LanguageToggle} from './components/pages/languageToggle';
import DrawerPersistant from './components/common/drawer/drawer';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from './store';
import OtpRegister from "./components/pages/otpRegister";
import OtpLogin from "./components/pages/otpLogin";
import "./utils/langs/ttf/IRANSansWeb(FaNum).ttf"
function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state:any) => state.auth.isAuthenticated);
  console.log("isAuthenticated",isAuthenticated);
  const token = localStorage.getItem('token')
  console.log(token);
  
  return(
  <div >
      {isAuthenticated && 
        <React.Fragment>
          <DrawerPersistant />
        </React.Fragment>
    }
      <Routes>
        {isAuthenticated? (
          <React.Fragment>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/submenu" replace />
                ) : (
                  <>
                  <Navigate to="/login" replace />
                  <Navigate to="/signup" replace />
                  <Navigate  to="/otp-register" replace />
                  <Navigate to="/otp-login" replace />
                  </>
                  
                  
                )
              }
            />

            <Route
              path="/submenu"
              element={
                <Dashboard/>
              }
            />

            
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/otp-register" element={<OtpRegister />} />
            <Route path="/otp-login" element={<OtpLogin />} />
          </React.Fragment>
        )}
      </Routes>
    </div>
  );
};


export default App;
