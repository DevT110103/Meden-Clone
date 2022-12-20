import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link, NavLink } from 'react-router-dom';
import config from '~/configs';
import styles from './Navigation.module.scss';

const cx = classNames.bind(styles);

function Navigation() {
  const handleClickTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <ul className={cx('wrapper')}>
      <li className={cx('item')}>
        <NavLink onClick={handleClickTop} className={cx('link')} to={config.routes.product}>
          Sản phẩm
          <FontAwesomeIcon className={cx('icon')} icon={faCaretDown}></FontAwesomeIcon>
        </NavLink>
        <ul className={cx('sub-list')}>
          <li className={cx('sub-item')}>
            <Link onClick={handleClickTop} className={cx('sub-link')} to="#">
              Nha Khoa
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link onClick={handleClickTop} to={config.routes.dentalEquipment} className={cx('sub-link-1')}>
                  Thiết bị nha khoa
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link onClick={handleClickTop} to={config.routes.clinical} className={cx('sub-link-1')}>
                  Lâm sàn
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link onClick={handleClickTop} to={config.routes.dentistryTools} className={cx('sub-link-1')}>
                  Dụng cụ nha khoa
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link onClick={handleClickTop} to={config.routes.orthodontic} className={cx('sub-link-1')}>
                  Chỉnh nha
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  Implant
                </Link>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <Link onClick={handleClickTop} className={cx('sub-link')} to="#">
              Labo
            </Link>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <Link onClick={handleClickTop} to={config.routes.laboTools} className={cx('sub-link-1')}>
                  Thiết bị Labo
                </Link>
              </li>
              <li className={cx('sub-item-1')}>
                <Link onClick={handleClickTop} to={config.routes.materialLabo} className={cx('sub-link-1')}>
                  Vật liệu Labo
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className={cx('item')}>
        <NavLink onClick={handleClickTop} to={config.routes.solution} className={cx('link')}>
          Giải pháp
          <FontAwesomeIcon className={cx('icon')} icon={faCaretDown}></FontAwesomeIcon>
        </NavLink>
        <ul className={cx('sub-list')}>
          <li className={cx('sub-item')}>
            <NavLink onClick={handleClickTop} className={cx('sub-link')} to="#">
              CAD Cam
            </NavLink>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <NavLink onClick={handleClickTop} className={cx('sub-link')} to="#">
              Chuẩn đoán hình ảnh
            </NavLink>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  Giải pháp chẩn đoán hình ảnh – Orthophos SL 3D
                </NavLink>
              </li>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  CHỤP PHIM CONEBEAM CT
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <NavLink onClick={handleClickTop} className={cx('sub-link')} to="#">
              Điều trị nha chu
            </NavLink>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  GIẢI PHÁP ĐIỀU TRỊ NHA CHU
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <NavLink onClick={handleClickTop} className={cx('sub-link')} to="#">
              Giải pháp chỉnh nha
            </NavLink>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  CS5
                </NavLink>
              </li>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  Aligner Chewies
                </NavLink>
              </li>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  KÍNH LÚP NHA KHOA – GIẢI PHÁP BẢO VỆ CỘT SỐNG CHO NHA SĨ
                </NavLink>
              </li>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  Hệ Thống Chỉnh Nha CS4
                </NavLink>
              </li>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  Ống Bọc Lò Xo Dynaflex
                </NavLink>
              </li>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  GIẢI PHÁP CẢI TIẾN VƯỢT TRỘI CHO DÂY TMA
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <NavLink onClick={handleClickTop} className={cx('sub-link')} to="#">
              Giải pháp cho labo
            </NavLink>
            <ul className={cx('sub-list-1')}>
              <li className={cx('sub-item-1')}>
                <NavLink onClick={handleClickTop} to="#" className={cx('sub-link-1')}>
                  Giải pháp thẩm mỹ tự nhiên như răng thật
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={cx('sub-item')}>
            {' '}
            <NavLink onClick={handleClickTop} className={cx('sub-link')} to="#">
              Giải pháp lâm sàn
            </NavLink>
          </li>
        </ul>
      </li>
      <li className={cx('item')}>
        <Link onClick={handleClickTop} to={config.routes.catalog} className={cx('link')}>
          Catalog
        </Link>
      </li>
      <li className={cx('item')}>
        <Link onClick={handleClickTop} to={config.routes.news} className={cx('link')}>
          Tin tức& Sự kiện
        </Link>
      </li>
      <li className={cx('item')}>
        <Link onClick={handleClickTop} to={config.routes.education} className={cx('link')}>
          Huấn luyện& Đào tạo
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;
