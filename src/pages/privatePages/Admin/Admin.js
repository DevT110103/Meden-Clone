import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import styles from './Admin.module.scss';
import config from '~/configs';
import OptionsAdmin from '~/component/OptionsAdmin';
import AdminCategories from '../AdminCategories';
import { get } from '~/utils/request';

const cx = classNames.bind(styles);

function Admin() {
  const page = useSelector((state) => state.navigate.page);

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      get('/auth/profile', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(() => {})
        .catch(() => {
          navigate(config.routes.login);
        });
    } else {
      navigate(config.routes.login);
    }
  }, [navigate, page]);

  return (
    <div className={cx('wrapper')}>
      <OptionsAdmin></OptionsAdmin>
      {page === 1 ? (
        <AdminCategories></AdminCategories>
      ) : page === 2 ? (
        <h1>Page 2</h1>
      ) : page === 3 ? (
        <h1>Page 3</h1>
      ) : (
        <h1>Page 4</h1>
      )}
    </div>
  );
}

Admin.propTypes = {};
export default Admin;
