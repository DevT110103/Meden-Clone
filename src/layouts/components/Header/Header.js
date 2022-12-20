/* eslint-disable jsx-a11y/anchor-is-valid */
import { faAddressCard, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faBlog, faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import { DownFile } from '~/component/Icons';
import styles from './Header.module.scss';
import config from '~/configs';
import logo from '~/assets/images/logo.png';
import Navigation from '~/component/Navigation';

const cx = classNames.bind(styles);

function Header() {
  return (
    <>
      <div className={cx('wrapper')}>
        <div className={cx('wrapper-top-header')}>
          <div className={cx('wrapper-content')}>
            <div className={cx('wrapper-list')}>
              <div className={cx('wrapper-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faEnvelope} />
                <a className={cx('link')} href="mailto:taic21a.th1@gmail.com">
                  info@medent.vn
                </a>
              </div>
              <div className={cx('wrapper-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faPhone} />
                <a className={cx('link')} href="tel:0865850073">
                  {' '}
                  HOTLINE: 1800 65 75
                </a>
              </div>
            </div>
            <div className={cx('wrapper-list')}>
              <div className={cx('wrapper-item')}>
                <DownFile width={16} height={16} />
                <Link className={cx('link')} to={config.routes.library}>
                  Tải tài liệu
                </Link>
              </div>
              <div className={cx('wrapper-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faBlog} />
                <Link className={cx('link')} to={config.routes.blogs}>
                  {' '}
                  Blog
                </Link>
              </div>
              <div className={cx('wrapper-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faAddressCard} />
                <Link className={cx('link')} to={config.routes.introduce}>
                  {' '}
                  Giới thiệu
                </Link>
              </div>
              <div className={cx('wrapper-item')}>
                <FontAwesomeIcon className={cx('icon')} icon={faAddressCard} />
                <Link className={cx('link')} to={config.routes.contact}>
                  {' '}
                  Liên hệ
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={cx('wrapper-header')}>
          <div className={cx('wrapper-header-content')}>
            <div className={cx('wrapper-header-content-item')}>
              <Link
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
                to={config.routes.home}
              >
                <img className={cx('logo')} src={logo} alt="logo" />
              </Link>
              <Navigation></Navigation>
            </div>
            <div className={cx('wrapper-header-content-item')}>
              <FontAwesomeIcon fontSize="18px" icon={faMagnifyingGlass}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
