import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SidebarAdmin.module.scss';

const cx = classNames.bind(styles);

function SidebarAdmin() {
  return <div className={cx('wrapper')}>Side Bar</div>;
}

SidebarAdmin.propTypes = {};
export default SidebarAdmin;
