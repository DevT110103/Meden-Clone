/* eslint-disable jsx-a11y/heading-has-content */
import classNames from 'classnames/bind';
import styles from './StepItem.module.scss';

const cx = classNames.bind(styles);

function StepItem({ logo, title, description }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-logo')}>
        <img className={cx('logo')} src={logo} alt="" />
      </div>
      <div className={cx('wrapper-content')}>
        <h3 className={cx('title')}>{title}</h3>
        <p className={cx('description')}> {description} </p>
      </div>
    </div>
  );
}

export default StepItem;
