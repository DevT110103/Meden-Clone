import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ children }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{children}</h2>
    </div>
  );
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Title;
