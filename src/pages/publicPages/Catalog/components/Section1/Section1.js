import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Fade } from 'react-reveal';
import CardCatalog from '~/component/CardCatalog';
import { image10, image11 } from '~/utils/images';
import styles from './Section1.module.scss';

const cx = classNames.bind(styles);

const CARD_CATALOG_LIST = [
  {
    img: image10,
    text: 'NexxZr + Multi',
  },
  {
    img: image10,
    text: 'NexxZr+',
  },
  {
    img: image11,
    text: 'NexxZr T',
  },
  {
    img: image11,
    text: 'NexxZr T Multi',
  },
  {
    img: image11,
    text: 'NexxZr T Multi',
  },
];

function Section1() {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Catalog Mới</h2>
      <Row gutter={[32, 32]}>
        <Col span={24} lg={{ span: 24 }}>
          <Row gutter={[32, 32]}>
            {CARD_CATALOG_LIST.map((item, index) => {
              return (
                <Col key={index} span={24} lg={{ span: 4 }}>
                  <Fade>
                    <CardCatalog img={item.img} text={item.text}></CardCatalog>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Section1;
