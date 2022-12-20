import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, onClick, className, loading = false }) {
  const classes = cx('btn', {
    [className]: className,
  });
  return (
    <button className={classes} onClick={onClick}>
      {loading ? <FontAwesomeIcon className={cx('loading')} icon={faSpinner}></FontAwesomeIcon> : children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

export default Button;
