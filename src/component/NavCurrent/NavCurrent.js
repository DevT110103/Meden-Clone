import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './NavCurrent.module.scss';

const cx = classNames.bind(styles);

function NavCurrent({ to }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-nav')}>
        <Link
          to={to}
          className={cx('nav', {
            prev: true,
          })}
        >
          Home
        </Link>
        /
        <Link
          to={to}
          className={cx('nav', {
            current: true,
          })}
        >
          Sản phẩm
        </Link>
      </div>
    </div>
  );
}

export default NavCurrent;
