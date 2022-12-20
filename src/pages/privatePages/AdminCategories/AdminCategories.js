import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import TableCategoryList from '~/component/TableCategoryList';
import styles from './AdminCategories.module.scss';
import { deleteRequest, get } from '~/utils/request';
import config from '~/configs';

const cx = classNames.bind(styles);

function AdminCategories() {
  document.title = 'Admin';

  const [loading, setLoading] = useState(false);
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoading(true);
    get('/category/get-all-category', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        setLoading(false);
        const categories = res.data;
        const msg = res.message;
        toast(msg);
        setData(categories);
      })
      .catch((err) => {
        setLoading(false);
        console.log('err ->', err);
        const msg = err.response.data.msg;
        toast(msg);
      });
  }, []);

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    setLoadingDelete(true);
    deleteRequest(`${process.env.REACT_APP_URL}/category/delete`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        id,
      },
    })
      .then((res) => {
        const msg = res.message;
        const newDate = data.filter((item) => {
          return item.id !== id;
        });
        setData(newDate);

        toast(msg);
        setLoadingDelete(false);
      })
      .catch(() => {
        toast('xóa thất bại');
        setLoadingDelete(false);
      });
  };

  const handleEditCategory = async (id) => {
    navigate(config.routes.adminEditCategory, {
      state: id,
    });
  };

  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>Category Editor</h1>
      <TableCategoryList
        categoryList={data}
        loading={loading}
        handleDelete={handleDelete}
        handleEditCategory={handleEditCategory}
        loadingDelete={loadingDelete}
      ></TableCategoryList>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default AdminCategories;
