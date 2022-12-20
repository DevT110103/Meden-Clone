import classNames from 'classnames/bind';
import styles from './DentalEquipment.module.scss';
import Title from '~/component/Title';
import CardTitle from '~/component/CardTitle';
import { Col, Row } from 'antd';
import { image14, image15, image16, image17 } from '~/utils/images';

const cx = classNames.bind(styles);

const CARD_TITLE_LIST = [
  {
    children: 'BLUEPHASE N M',
    to: '#',
    img: image14,
  },
  {
    children: 'BLUEPHASE N MC',
    to: '#',
    img: image15,
  },
  {
    children: 'BLUEPHASE N',
    to: '#',
    img: image16,
  },
  {
    children: 'BLUEPHASE STYLE',
    to: '#',
    img: image17,
  },
];

function DentalEquipment() {
  return (
    <div className="container">
      <div className={cx('wrapper')}>
        <section className={cx('section-1')}>
          <Title>ĐÈN QUANG TRÙNG HỢP</Title>
          <Row gutter={[32, 32]}>
            {CARD_TITLE_LIST.map((item, index) => {
              return (
                <Col key={index} span={24} lg={{ span: 8 }}>
                  <CardTitle img={item.img} to={item.to}>
                    {item.children}
                  </CardTitle>
                </Col>
              );
            })}
          </Row>
        </section>
        <section className={cx('section-2')}>
          <Title>ĐÈN TẨY TRẮNG</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-3')}>
          <Title>GHẾ MÁY NHA KHOA</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-4')}>
          <Title>MÁY CẠO VÔI</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-5')}>
          <Title>MÁY LASER NHA KHOA</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-6')}>
          <Title>MÁY NÉN KHÔNG KHÍ DẦU</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-7')}>
          <Title>MÁY X-QUANG</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-8')}>
          <Title>TAY KHOAN</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-8')}>
          <Title>THIẾT BỊ CHẨN ĐOÁN HÌNH ẢNH</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
        <section className={cx('section-9')}>
          <Title>THIẾT BỊ VỆ SINH VÔ TRÙNG</Title>
          <Row gutter={[32, 32]}>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
            <Col span={24} lg={{ span: 8 }}>
              <CardTitle img={image14} to="#">
                ZOOM WHITESPEED
              </CardTitle>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
}

export default DentalEquipment;
