import {  configureStore } from '@reduxjs/toolkit';

import counterReducer from './counter';
import authReducer from './auth';

const store = configureStore({
    reducer: /**counterSlice.reducer ako imamo jedan reducer */   
  { counter: counterReducer, auth: authReducer } /**Ako imamo više reducera pa da se odabere pravi */
}); 



export default store;