import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import CardBtn from '~/component/CardBtn';
import config from '~/configs';
import { image5, image6, image7, image8 } from '~/utils/images';
import styles from './SectionProduct1.module.scss';

const cx = classNames.bind(styles);

const CARD_BTN_PRODUCT = [
  {
    img: image6,
    label: 'Chỉnh Nha',
    to: config.routes.home,
  },
  {
    img: image7,
    label: 'Implant',
    to: config.routes.home,
  },
  {
    img: image8,
    label: 'Lâm sàn',
    to: config.routes.home,
  },
  {
    img: image5,
    label: 'CAD/CAM',
    to: config.routes.home,
  },
  {
    img: image5,
    label: 'CAD/CAM',
    to: config.routes.home,
  },
  {
    img: image5,
    label: 'CAD/CAM',
    to: config.routes.home,
  },
];

function SectionProduct1({ title }) {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>{title}</h2>
      <Row gutter={[32, 32]}>
        {CARD_BTN_PRODUCT.map((item, index) => {
          return (
            <Col key={index} span={24} lg={{ span: 8 }}>
              <Zoom>
                <CardBtn to={item.to} img={item.img} label={item.label} />
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SectionProduct1;
