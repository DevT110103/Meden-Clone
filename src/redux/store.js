import { configureStore } from '@reduxjs/toolkit';
import { NavigateSlice } from '~/layouts/AdminLayout/Components/HeaderAdmin/NavigateSlice';
import authReducer from '~/pages/publicPages/Login/authReducer';

export default configureStore({
  reducer: {
    auth: authReducer,
    navigate: NavigateSlice.reducer,
  },
});
