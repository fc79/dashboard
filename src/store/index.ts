import { configureStore } from '@reduxjs/toolkit';
import authSlice from './auth';
import appStatesSlice from './appStates';
import storage from "redux-persist/lib/storage";
import { combineReducers } from '@reduxjs/toolkit';
import {persistReducer} from "redux-persist";

export const config = {
    key: 'root',
    storage: storage,
    blacklist: ['extras'],
};
const combinedReducers = combineReducers({
  auth: authSlice.reducer,
  appStates:appStatesSlice.reducer
})

const persisted = persistReducer(config, combinedReducers);

export const store = configureStore({
	reducer: persisted,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),

})
export const authActions = authSlice.actions;
export const appStatesActions = appStatesSlice.actions;
export default store;