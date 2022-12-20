import classNames from 'classnames/bind';
import styles from './Emax.module.scss';

const cx = classNames.bind(styles);

function Emax() {
  return (
    <div className={cx('wrapper')}>
      {' '}
      <h1>Emax page</h1>
    </div>
  );
}

export default Emax;
