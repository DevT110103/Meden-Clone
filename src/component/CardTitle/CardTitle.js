import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardTitle.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function CardTitle({ children, img, to = '#' }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('wrapper-img')}>
        <img src={img} alt={children} className={cx('img')} />
      </div>

      <div className={cx('wrapper-content')}>
        <Link to={to}>
          <h2 className={cx('title')}>{children}</h2>
        </Link>
      </div>
    </div>
  );
}

CardTitle.propTypes = {
  children: PropTypes.string.isRequired,
  img: PropTypes.string,
};
export default CardTitle;
