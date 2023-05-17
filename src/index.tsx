import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { usersAPI } from './api/apiSlice';
import { Provider } from 'react-redux';
import "./lib/i18n/i18n"
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import {store} from "./redux/store"
import "./lib/i18n/i18n"
import { BrowserRouter } from 'react-router-dom'

const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
   
      <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
            <App />
            </PersistGate>
      </BrowserRouter>
      
     
   
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
