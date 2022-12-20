import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import CardBtn from '~/component/CardBtn';
import { image2, image3, image4, image5, image6, image9 } from '~/utils/images';
import styles from './Solution.module.scss';

const cx = classNames.bind(styles);

const CARD_BTN_SOLUTION_LIST = [
  {
    label: 'CAD/CAM',
    img: image9,
    to: '#',
  },
  {
    label: 'Chuẩn đoán hình ảnh',
    img: image9,
    to: '#',
  },
  {
    label: 'Điều trị nha chu',
    img: image9,
    to: '#',
  },
  {
    label: 'Giải pháp chỉnh nha',
    img: image9,
    to: '#',
  },
  {
    label: 'Giải pháp lâm sàn',
    img: image9,
    to: '#',
  },
  {
    label: 'Giải pháp lâm sàn',
    img: image9,
    to: '#',
  },
];

function Solution() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className={cx('inner')}>
          <div className={cx('wrapper-title')}>
            <p className={cx('title')}>GIẢI PHÁP NHA KHOA | MEDENT</p>
          </div>

          <div className={cx('content')}>
            <Row gutter={[32, 32]}>
              {CARD_BTN_SOLUTION_LIST.map((item, index) => {
                return (
                  <Col key={index} span={24} lg={{ span: 8 }}>
                    <CardBtn img={item.img} label={item.label} to={item.to}></CardBtn>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Solution;
