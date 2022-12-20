import classNames from 'classnames/bind';
import styles from './Clinical.module.scss';
import Title from '~/component/Title';
import { Col, Row } from 'antd';
import CardTitle from '~/component/CardTitle';
import { image15 } from '~/utils/images';

const cx = classNames.bind(styles);

function Clinical() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        {[
          'ETCHING',
          'KEO DÁN',
          'VẬT LIỆU CHỐNG Ê',
          'VẬT LIỆU NHA KHOA PHÒNG NGỪA',
          'VẬT LIỆU NỘI NHA',
          'VẬT LIỆU TẠM',
          'VẬT LIỆU TẨY TRẮNG',
          'VẬT LIỆU TRÁM THẨM MỸ',
        ].map((item, index) => {
          return (
            <section key={index} className={cx(`section-${index}`)}>
              <Title>{item}</Title>
              <Row gutter={[32, 32]}>
                {[1, 2, 3].map((item, index) => {
                  return (
                    <Col key={index} span={24} lg={{ span: 8 }}>
                      <CardTitle img={image15} to="#">
                        IPS CERAMIC ETCHING GEL {`Product ${index + 1}`}
                      </CardTitle>
                    </Col>
                  );
                })}
              </Row>
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default Clinical;
