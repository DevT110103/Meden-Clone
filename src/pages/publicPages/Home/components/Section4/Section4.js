import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import BusinessItem from '~/component/BusinessItem';
import { logo10, logo4, logo5, logo6, logo7, logo8, logo9 } from '~/utils/images';
import styles from './Section4.module.scss';

const cx = classNames.bind(styles);

const BUSINESS_LIST = [
  {
    title: 'Nha Khoa',
    description: 'Cung cấp giải pháp toàn diện, góp phần giải quyết nâng cao dịch vụ Nha khoa',
    img: logo4,
  },
  {
    title: 'Implant',
    description: 'Giải pháp Implant hiện đại, kỹ thuật số góp phần nâng cao tính an toàn, hiệu quả cho trong điều trị.',
    img: logo6,
  },
  {
    title: 'Lâm sàn',
    description:
      'Medent cung cấp vật liệu trong lâm sàng đến từ các thương hiệu hàng đầu thế giới. Với danh mục sản phẩm đa dạng, đáp ứng được mọi nhu cầu lâm sàng',
    img: logo7,
  },
  {
    title: 'Labo',
    description: 'Giải pháp phục hình hiệu quả, nhanh chóng, chính xác và đảm bảo an toàn tuyệt đối.',
    img: logo8,
    right: true,
  },
  {
    title: 'Thiết bị',
    description: 'Phân phối độc quyền sản phẩm cao cấp, dịch vụ hậu mãi nhanh chóng và hiệu quả',
    img: logo9,
    right: true,
  },
  {
    title: 'Chỉnh nha',
    description:
      'Medent cung cấp những giải pháp chỉnh nha/niềng răng từ nhiều thương hiệu nổi tiếng có uy tín trên toàn thế giới',
    img: logo10,
    right: true,
  },
];

function Section4() {
  const BUSINESS_LIST_LEFT = [];
  const BUSINESS_LIST_RIGHT = [];
  BUSINESS_LIST.map((item) => {
    if (item.right) {
      return BUSINESS_LIST_RIGHT.push(item);
    } else {
      return BUSINESS_LIST_LEFT.push(item);
    }
  });

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className="wrapper-content">
          <div className={cx('wrapper-header')}>
            <Zoom>
              <p className={cx('title')}>
                Công ty MEDENT cung cấp thiết bị nha khoa, vật liệu nha khoa, dụng cụ nha khoa từ các thương hiệu lớn trên thế
                giới.
              </p>
            </Zoom>
            <Zoom>
              <p className={cx('sub-title')}>Bạn đã sẵn sàng liên hệ với Medent chưa?</p>
            </Zoom>
            <Zoom>
              <div className={cx('description')}>
                Medent không những cung cấp những sản phẩm cao cấp đến từ các hãng lớn mà còn đem đến các giải pháp tối ưu dành
                cho Quý Nha Sĩ, Kỹ Thuật Viên và khách hàng...
              </div>
            </Zoom>
          </div>
          <Zoom>
            <div className={cx('wrapper-body')}>
              <div className={cx('wrapper-icon')}>
                {BUSINESS_LIST_LEFT.map((item, index) => {
                  return (
                    <BusinessItem
                      key={index}
                      className={cx('item')}
                      title={item.title}
                      img={item.img}
                      description={item.description}
                      right={item.right}
                    ></BusinessItem>
                  );
                })}
              </div>
              <div className={cx('wrapper-img')}>
                <img className={cx('img')} src={logo5} alt="" />
              </div>
              <div className={cx('wrapper-icon')}>
                {BUSINESS_LIST_RIGHT.map((item, index) => {
                  return (
                    <BusinessItem
                      key={index}
                      className={cx('item', { right: item.right })}
                      title={item.title}
                      img={item.img}
                      description={item.description}
                      right={item.right}
                    ></BusinessItem>
                  );
                })}
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </section>
  );
}

export default Section4;
