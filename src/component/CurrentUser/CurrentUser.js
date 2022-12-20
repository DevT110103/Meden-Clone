import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CurrentUser.module.scss';

const cx = classNames.bind(styles);

function CurrentUser() {
  return (
    <div className={cx('wrapper')}>
      <img src="https://picsum.photos/30" alt="" />
    </div>
  );
}

CurrentUser.propTypes = {};
export default CurrentUser;
