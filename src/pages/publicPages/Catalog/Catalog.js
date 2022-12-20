import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import CardBtn from '~/component/CardBtn';
import Search from '~/component/Search';
import { image5 } from '~/utils/images';
import styles from './Catalog.module.scss';
import Section1 from './components/Section1';

const cx = classNames.bind(styles);

const CARD_DENTISTRY = [
  {
    label: 'Xem Thêm',
    img: image5,
    title: 'Chỉnh nha',
    secondary: true,
    to: './@product-1',
    category: 'chinhNha',
  },
  {
    label: 'Xem Thêm',
    img: image5,
    title: 'Implant',
    secondary: true,
    to: './@product-2',
  },
  {
    label: 'Xem Thêm',
    img: image5,
    title: 'Lâm sàng',
    secondary: true,
    to: './@product-3',
  },
  {
    label: 'Xem Thêm',
    img: image5,
    title: 'Dụng cụ nha khoa',
    secondary: true,
    to: './@product-4',
  },
  {
    label: 'Xem Thêm',
    img: image5,
    title: 'Dụng cụ nha khoa',
    secondary: true,
    to: './@product-5',
  },
  {
    label: 'Xem Thêm',
    img: image5,
    title: 'Thiết bị nha khoa',
    secondary: true,
    to: './@product-6',
  },
];

function Catalog() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <Search></Search>
        <Section1></Section1>

        <section className={cx('section-2')}>
          <h2 className={cx('title')}> Nha khoa</h2>
          <Row gutter={[32, 32]}>
            {CARD_DENTISTRY.map((card, index) => {
              return (
                <Col key={index} span={24} lg={{ span: 8 }}>
                  <CardBtn label={card.label} img={card.img} to={card.to} secondary={card.secondary} title={card.title}></CardBtn>
                </Col>
              );
            })}
          </Row>
        </section>

        <section className={cx('section-3')}>
          <h2 className={cx('title')}>La bo</h2>
          <Row gutter={[32, 32]}>
            {CARD_DENTISTRY.map((card, index) => {
              return (
                <Col key={index} span={24} lg={{ span: 8 }}>
                  <CardBtn label={card.label} img={card.img} secondary={card.secondary} title={card.title}></CardBtn>
                </Col>
              );
            })}
          </Row>
        </section>
      </div>
    </div>
  );
}

export default Catalog;
