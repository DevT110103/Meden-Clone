import axios from 'axios';
import { loginFailed, loginStart, loginSuccess } from '~/pages/publicPages/Login/authReducer/authSlice';

export const loginUser = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${process.env.REACT_APP_URL}/auth/login`, user);
    const token = await res.data.data.access_token;
    await localStorage.setItem('token', token);

    dispatch(loginSuccess(res.data));
  } catch {
    dispatch(loginFailed());
  }
};

// export const getAllCategories = async (dispatch) => {
//   dispatch(getStart());
// };
