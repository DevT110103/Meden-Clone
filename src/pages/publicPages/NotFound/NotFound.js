import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NotFound.module.scss';
import { background4 } from '~/utils/images';
import { Link } from 'react-router-dom';
import config from '~/configs';

const cx = classNames.bind(styles);

function NotFound() {
  return (
    <div className={cx('wrapper')}>
      <h1 className={cx('title')}>404 Not Found</h1>
      <Link to={config.routes.home} className={cx('prev-btn')}>
        Home
      </Link>
    </div>
  );
}

NotFound.propTypes = {};
export default NotFound;
