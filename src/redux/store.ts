

import { configureStore,createStore,getDefaultMiddleware,Middleware } from '@reduxjs/toolkit'
import reducers from './reducers/bankReducer';
import { usersAPI } from '../api/apiSlice';
import { combineReducers } from '@reduxjs/toolkit';

import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
export const config = {
    key: 'root',
    storage: storage,
    blacklist: ['extras'],
};
const combinedReducers = combineReducers({
  bank:reducers,
  [usersAPI.reducerPath]:usersAPI.reducer,
})
const persisted = persistReducer(config, combinedReducers);

export const store = configureStore({
	reducer: persisted,
	middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(usersAPI.middleware),

})