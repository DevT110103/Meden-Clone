import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import styles from './AddCategory.module.scss';
import config from '~/configs';
import { useEffect } from 'react';
import { post } from '~/utils/request';

const cx = classNames.bind(styles);

function AddCategory() {
  const currentUser = useSelector((state) => state.auth.login.currentUser?.data.user);

  const [loading, setLoading] = useState(false);
  const [nameCategory, setNameCategory] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isLogin = localStorage.getItem('token');
    if (!isLogin && currentUser?.role !== 'admin') {
      navigate(config.routes.login);
    }
  }, [currentUser?.role, navigate]);

  const handleSaveCategory = async () => {
    setLoading(true);
    const token = localStorage.getItem('token');
    if (nameCategory) {
      post(
        '/category/create',
        {
          name: nameCategory,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then(() => {
          setLoading(false);
          navigate(config.routes.admin);
        })
        .catch((err) => {
          toast('Lỗi Connect server');
          setLoading(false);
        });
    } else {
      toast('Vui lòng nhập tên');

      setTimeout(() => {
        setLoading(false);
      }, 1 * 1000);
    }
  };

  const handlePrevious = () => {
    navigate(config.routes.admin);
  };

  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>
        <Button onClick={handlePrevious} className={cx('btn')}>
          <FontAwesomeIcon className={cx('icon')} icon={faArrowLeft}></FontAwesomeIcon>
          Category
        </Button>
      </div>
      <Form>
        <FormGroup className={cx('form-group')}>
          <Label for="name-category">Name Category</Label>
          <Input
            style={{
              padding: '10px 5px',
              fontSize: '1.8rem',
            }}
            className={cx('input')}
            onChange={(e) => {
              setNameCategory(e.target.value);
            }}
            value={nameCategory}
            id="name-category"
            name="name"
            placeholder="Input name..."
            type="text"
          ></Input>
        </FormGroup>

        <Button className={cx('btn')} onClick={handleSaveCategory} loading={loading}>
          {loading || (
            <>
              <FontAwesomeIcon className={cx('icon')} icon={faFloppyDisk}></FontAwesomeIcon>
              <span>Save</span>
            </>
          )}
        </Button>
      </Form>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default AddCategory;
