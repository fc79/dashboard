import React from 'react';
import './App.css';
import { Login } from './components/pages/login';
import Bank from "./components/pages/bank";
import Users from './components/pages/users';
import {Suspense} from 'react';
import {LanguageToggle} from './components/pages/languageToggle';
import DrawerPersistant from './components/common/drawer/drawer';
function App() {
  return (
    <>
  <Suspense fallback="...Loading">
    <DrawerPersistant/>

    
    {/* <LanguageToggle/>
  <Login/>
  <Bank/>
  <Users/> */}
  </Suspense>
  </>)
}

export default App;
