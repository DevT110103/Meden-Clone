import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavItem.module.scss';

const cx = classNames.bind(styles);

function NavItem() {
  return <div className={cx('wrapper')}></div>;
}

NavItem.propTypes = {};
export default NavItem;
