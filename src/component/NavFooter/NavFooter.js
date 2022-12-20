import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './NavFooter.module.scss';

const cx = classNames.bind(styles);

function NavFooter({ data = [], children }) {
  return (
    <div className={cx('wrapper')}>
      <h5 className={cx('title')}>{children}</h5>
      {data.map((item, index) => {
        return (
          <Link className={cx('link')} key={index} to={item.navLink}>
            {item.navName}
          </Link>
        );
      })}
    </div>
  );
}

export default NavFooter;
