import classNames from 'classnames/bind';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './DateTime.module.scss';

const cx = classNames.bind(styles);

function DateTime({ children }) {
  return (
    <div className={cx('wrapper')}>
      <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>
      <p className={cx('text')}>{children}</p>
    </div>
  );
}

export default DateTime;
