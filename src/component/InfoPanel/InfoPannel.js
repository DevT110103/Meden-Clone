import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './InfoPannel.module.scss';

const cx = classNames.bind(styles);

function InfoPanel({ icon, children }) {
  return (
    <Link to="#" className={cx('wrapper')}>
      {icon}
      <p className={cx('title')}>{children}</p>
    </Link>
  );
}

export default InfoPanel;
