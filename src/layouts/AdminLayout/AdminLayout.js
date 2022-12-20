import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AdminLayout.module.scss';
import HeaderAdmin from './Components/HeaderAdmin';
import { Col, Row } from 'antd';
import SidebarAdmin from './Components/SidebarAdmin';
import { useState } from 'react';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
  const [page, setPage] = useState();

  return (
    <div className={cx('wrapper')}>
      <Row>
        <Col span={24} lg={{ span: 4 }}>
          <SidebarAdmin></SidebarAdmin>
        </Col>
        <Col span={24} lg={{ span: 20 }}>
          <HeaderAdmin></HeaderAdmin>
          <div className={cx('content')}>{children}</div>
        </Col>
      </Row>
    </div>
  );
}

AdminLayout.propTypes = {};
export default AdminLayout;
