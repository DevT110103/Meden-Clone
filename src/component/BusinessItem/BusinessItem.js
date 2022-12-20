import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './BusinessItem.module.scss';

const cx = classNames.bind(styles);

function BusinessItem({ title, description, img, className, right = false }) {
  const classes = cx('wrapper', {
    [className]: className,
  });
  return (
    <div className={classes}>
      <div
        className={cx('wrapper-text', {
          right,
        })}
      >
        <p className={cx('title')}>{title}</p>
        <p className={cx('description')}>{description}</p>
      </div>
      <div
        className={cx('wrapper-img', {
          right,
        })}
      >
        <img src={img} alt={title} className={cx('img')} />
      </div>
    </div>
  );
}

BusinessItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  classNames: PropTypes.string,
  right: PropTypes.bool,
};

export default BusinessItem;
