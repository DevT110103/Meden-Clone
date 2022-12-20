import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import styles from './Login.module.scss';
import FormLogin from '~/component/FormLogin';
import config from '~/configs';
const cx = classNames.bind(styles);

function Login() {
  document.title = 'Login';

  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.login.currentUser?.data.user);
  const err = useSelector((state) => state.auth.login.error);

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (currentUser) {
      if (token && currentUser?.role_id === 1) {
        navigate(config.routes.admin);
      } else {
        navigate('/');
        localStorage.removeItem('token');
      }
    }
  }, [currentUser, currentUser?.role, navigate, token]);

  useEffect(() => {
    if (err) {
      toast('Lỗi đăng nhập');
    }
  }, [err]);

  return (
    <div className="container">
      <div className={cx('wrapper')}>
        <FormLogin></FormLogin>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
}

export default Login;
