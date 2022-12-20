import { useState } from 'react';
import { faHand } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useDispatch } from 'react-redux';

import styles from './HeaderAdmin.module.scss';
import NavAdmin from '../NavAdmin';
import CurrentUser from '~/component/CurrentUser';
import { NavigateSlice } from './NavigateSlice';

const cx = classNames.bind(styles);

function HeaderAdmin() {
  const [activeCategory, setActiveCategory] = useState(true);
  const [activeProduct, setActiveProduct] = useState(false);

  const dispatch = useDispatch();

  const handleNavigateCategory = () => {
    const action = {
      page: 1,
    };
    dispatch(NavigateSlice.actions.navigationPage(action));

    setActiveProduct(false);
    setActiveCategory(true);
  };

  const handleNavigateProduct = () => {
    const action = {
      page: 2,
    };
    dispatch(NavigateSlice.actions.navigationPage(action));
    setActiveCategory(false);
    setActiveProduct(true);
  };

  return (
    <div className={cx('wrapper')}>
      <nav className={cx('nav')}>
        <NavAdmin onClick={handleNavigateCategory} active={activeCategory}>
          Category
        </NavAdmin>
        <NavAdmin onClick={handleNavigateProduct} active={activeProduct}>
          Product
        </NavAdmin>
      </nav>

      <div className={cx('user')}>
        <CurrentUser></CurrentUser>
      </div>
    </div>
  );
}

HeaderAdmin.propTypes = {};
export default HeaderAdmin;
