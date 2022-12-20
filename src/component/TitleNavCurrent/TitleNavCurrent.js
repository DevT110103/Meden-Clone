import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '~/configs';
import { background1 } from '~/utils/images';
import styles from './TitleNavCurrent.module.scss';

const cx = classNames.bind(styles);

function TitleNavCurrent({ children, prevRoute, currentRoute, background = background1 }) {
  return (
    <div className={cx('wrapper')} style={{ backgroundImage: `url("${background}")` }}>
      <div className="container">
        <div className={cx('inner')}>
          <p className={cx('title')}>{children}</p>

          <div className={cx('wrapper-nav')}>
            <div className={cx('wrapper-nav-item')}>
              <Link className={cx('nav')} to={config.routes.home}>
                Home
              </Link>
              <span className={cx('separate')}>/</span>
              <Link className={cx('nav')} to={currentRoute}>
                {children}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TitleNavCurrent;
