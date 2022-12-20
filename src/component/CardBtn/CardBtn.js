import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardBtn.module.scss';
import Button from '~/component/Button';

const cx = classNames.bind(styles);

function CardBtn({ img, label, to, secondary = false, title }) {
  return (
    <div
      className={cx('wrapper', {
        secondary,
      })}
    >
      <img src={img} alt={label} />

      {secondary && (
        <div className={cx('wrapper-content')}>
          <h2 className={cx('title')}>{title}</h2>
          <Button to={to} className={cx('btn')}>
            {label}
          </Button>
        </div>
      )}
      {!secondary && (
        <Button to={to} className={cx('btn')}>
          {label}
        </Button>
      )}
    </div>
  );
}

CardBtn.propTypes = {
  img: PropTypes.string,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  center: PropTypes.bool,
  title: PropTypes.string,
};

export default CardBtn;
