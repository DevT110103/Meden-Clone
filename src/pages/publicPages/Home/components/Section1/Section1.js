import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import Parameter from '~/component/Parameter';
import { brandsItem, customerImg, partnersImg, slotionImg } from '~/utils/images';
import styles from './Section1.module.scss';

const cx = classNames.bind(styles);

const PARAMETER_LIST = [
  {
    img: slotionImg,
    amount: 20,
    name: 'Giải pháp',
  },
  {
    img: customerImg,
    amount: 1200,
    name: 'Khách hàng',
  },
  {
    img: partnersImg,
    amount: 12,
    name: 'Đối tác',
  },
  {
    img: brandsItem,
    amount: 6025,
    name: 'Sản phẩm',
  },
];

function Section1() {
  return (
    <section className={cx('section-1')}>
      <div className="container">
        <Zoom>
          <Row gutter={[32, 32]}>
            {PARAMETER_LIST.map((item, index) => {
              return (
                <Col key={index} span={24} lg={{ span: 6 }} md={{ span: 6 }}>
                  <Parameter amount={item.amount} name={item.name} img={item.img}></Parameter>
                </Col>
              );
            })}
          </Row>
        </Zoom>
      </div>
    </section>
  );
}

export default Section1;
