import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './NavAdmin.module.scss';

const cx = classNames.bind(styles);

function NavAdmin({ children, active, onClick }) {
  return (
    <div className={cx('wrapper')}>
      <p
        onClick={onClick}
        className={cx('nav', {
          active,
        })}
      >
        {children}
      </p>
    </div>
  );
}

NavAdmin.propTypes = {};
export default NavAdmin;
