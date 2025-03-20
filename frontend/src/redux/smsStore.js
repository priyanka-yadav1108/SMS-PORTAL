import { configureStore } from '@reduxjs/toolkit';
import getContactReducer from './slices/getContactSlice'

const smsStore = configureStore({
    reducer: {
        getContact: getContactReducer
    }    
})

export default smsStore;
