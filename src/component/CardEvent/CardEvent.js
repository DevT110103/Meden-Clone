import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './CardEvent.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CardEvent({ img, title, link, desc, secondary = false, main = false }) {
  return (
    <div
      className={cx('wrapper', {
        main,
        secondary,
      })}
    >
      <div className={cx('wrapper-top-card')}>
        <img className={cx('image')} src={img} alt={title} />
        <div className={cx('wrapper-icon')}>
          <FontAwesomeIcon className={cx('icon-hover')} icon={faSearch}></FontAwesomeIcon>
        </div>
      </div>

      <div className={cx('wrapper-content')}>
        <h2 className={cx('title')}>
          <Link className={cx('link')} to={link}>
            {title}
          </Link>
        </h2>
        <p className={cx('desc')}>{desc}</p>
      </div>
    </div>
  );
}

CardEvent.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default CardEvent;
