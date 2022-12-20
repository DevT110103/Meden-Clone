import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import Button from '~/component/Button/Button';
import { background2 } from '~/utils/images';
import styles from './Section3.module.scss';

const cx = classNames.bind(styles);

function Section3() {
  return (
    <section className={cx('wrapper')}>
      <img className={cx('img')} src={background2} alt="" />
      <div className="container">
        <div className={cx('wrapper-content')}>
          <Zoom>
            <p className={cx('title')}>Hotline CSKH 24/24</p>
            <div className={cx('description')}>
              Để nhận được hỗ trợ tư vấn sản phẩm, bảo hành, đăng ký các chương trình do Medent tổ chức. 1800 6575
            </div>
            <Button>Liên hệ</Button>
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default Section3;
