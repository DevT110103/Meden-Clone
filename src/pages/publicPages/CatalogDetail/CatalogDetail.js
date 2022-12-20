import classNames from 'classnames/bind';
import styles from './CatalogDetail.module.scss';

const cx = classNames.bind(styles);

function CatalogDetail() {
  return <div className={cx('wrapper')}>Catalog Detail</div>;
}

export default CatalogDetail;
