import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './CardCatalog.module.scss';

const cx = classNames.bind(styles);

function CardCatalog({ img, text }) {
  return (
    <div className={cx('wrapper')}>
      <img src={img} alt="" className={cx('img')} />
      <div className={cx('wrapper-content')}>
        <Link to="#" className={cx('description')}>
          {text}
        </Link>
      </div>
    </div>
  );
}

export default CardCatalog;
