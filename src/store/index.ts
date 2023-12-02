import { configureStore } from '@reduxjs/toolkit';
import appStatesSlice from './appStates';
import storage from "redux-persist/lib/storage";
import { combineReducers } from '@reduxjs/toolkit';
import {persistReducer} from "redux-persist";
import {usersAPI} from "../api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query'

export const config = {
    key: 'root',
    storage: storage,
    blacklist: ['extras'],
};
const combinedReducers = combineReducers({
  [usersAPI.reducerPath]: usersAPI.reducer,

})

const persisted = persistReducer(config, combinedReducers);

export const store = configureStore({
	reducer: persisted,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(usersAPI.middleware)

})
setupListeners(store.dispatch)

