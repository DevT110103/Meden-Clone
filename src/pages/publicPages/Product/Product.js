import classNames from 'classnames/bind';
import SectionProduct1 from './Components/SectionProduct1';
import styles from './Product.module.scss';

const cx = classNames.bind(styles);

function Product() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <SectionProduct1 title="Sản Phẩm"></SectionProduct1>
        <SectionProduct1 title="Labo"></SectionProduct1>
      </div>
    </div>
  );
}

export default Product;
