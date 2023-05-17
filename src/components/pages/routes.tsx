import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Login } from './login';
import Bank from "./bank";
import Users from './users';
import {Suspense} from 'react';
import {LanguageToggle} from './languageToggle';
​
function Approutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                <Route path='/bank' element={<Bank/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/toggle' element={<LanguageToggle/>}/>
            </Routes>
        </BrowserRouter>
    )
}
​
export default Approutes;