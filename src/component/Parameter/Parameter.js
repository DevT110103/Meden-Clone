import classNames from 'classnames/bind';
import styles from './Parameter.module.scss';
import CountUp from 'react-countup';

const cx = classNames.bind(styles);

function Parameter({ img, amount, name }) {
  return (
    <div className={cx('wrapper')}>
      <img className={cx('img')} src={img} alt="" />
      <CountUp className={cx('amount')} duration={5} start={0} end={amount}></CountUp>
      <div className={cx('name')}>{name}</div>
    </div>
  );
}

export default Parameter;
