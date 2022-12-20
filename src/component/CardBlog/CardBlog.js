import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardBlog.module.scss';

const cx = classNames.bind(styles);

function CardBlog({ backgroundImage, day, years, route, title, description }) {
  return (
    <div
      className={cx('wrapper')}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        paddingTop: '60%',
      }}
    >
      <div className={cx('wrapper-content')}>
        <div className={cx('wrapper-top-content')}>
          <div className={cx('wrapper-date')}>
            <p className={cx('text')}>{day}</p>
            <p
              className={cx('text', {
                small: true,
              })}
            >
              {years}
            </p>
          </div>
          <Link to={route} className={cx('title')}>
            {title}
          </Link>
        </div>
        <div className={cx('wrapper-bottom-content')}>
          <p className={cx('description')}>{description}</p>
        </div>
      </div>
    </div>
  );
}

CardBlog.propTypes = {
  backgroundImage: PropTypes.string,
  day: PropTypes.string,
  years: PropTypes.string,
  route: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default CardBlog;
