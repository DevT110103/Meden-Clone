import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './LogTag.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function LogTag({ active, err, warn, children }) {
  return (
    <div
      className={cx('wrapper', {
        active,
      })}
    >
      {warn && <FontAwesomeIcon className={cx('icon')} icon={faExclamationCircle}></FontAwesomeIcon>}
      {err && <FontAwesomeIcon className={cx('icon')} icon={faExclamationTriangle}></FontAwesomeIcon>}

      <p className={cx('desc')}>{children}</p>
    </div>
  );
}

LogTag.propTypes = {};
export default LogTag;
