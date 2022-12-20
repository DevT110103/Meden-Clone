import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import CardBlog from '~/component/CardBlog';
import config from '~/configs';
import { image4 } from '~/utils/images';
import styles from './Section7.module.scss';

const cx = classNames.bind(styles);

const CARD_BLOG_MAIN_LIST = [
  {
    backgroundImage: image4,
    day: '06',
    years: '06-2021',
    route: config.routes.home,
    title: 'IPS Emax CAD – Tiêu chuẩn vàng cho phục hình chairside',
    description: 'Phục hình nguyên khối IPS Emax CAD độ bền...',
  },
  {
    backgroundImage: image4,
    day: '06',
    years: '06-2021',
    route: config.routes.home,
    title: 'IPS Emax CAD – Tiêu chuẩn vàng cho phục hình chairside',
    description: 'Phục hình nguyên khối IPS Emax CAD độ bền...',
  },
];

const CARD_BLOG_SUB_LIST = [
  {
    backgroundImage: image4,
    day: '06',
    years: '06-2021',
    route: config.routes.home,
    title: 'IPS Emax CAD – Tiêu chuẩn vàng cho phục hình chairside',
    description: 'Phục hình nguyên khối IPS Emax CAD độ bền...',
  },
  {
    backgroundImage: image4,
    day: '06',
    years: '06-2021',
    route: config.routes.home,
    title: 'IPS Emax CAD – Tiêu chuẩn vàng cho phục hình chairside',
    description: 'Phục hình nguyên khối IPS Emax CAD độ bền...',
  },

  {
    backgroundImage: image4,
    day: '06',
    years: '06-2021',
    route: config.routes.home,
    title: 'IPS Emax CAD – Tiêu chuẩn vàng cho phục hình chairside',
    description: 'Phục hình nguyên khối IPS Emax CAD độ bền...',
  },
];

function Section7() {
  return (
    <Zoom>
      <section className={cx('wrapper')}>
        <div className="container">
          <div className={cx('wrapper-main-blog')}>
            <Row gutter={[32, 32]}>
              {CARD_BLOG_MAIN_LIST.map((item, index) => {
                return (
                  <Col key={index} span={24} lg={{ span: 12 }}>
                    <CardBlog
                      backgroundImage={item.backgroundImage}
                      day={item.day}
                      years={item.years}
                      route={item.route}
                      title={item.title}
                      description={item.description}
                    ></CardBlog>
                  </Col>
                );
              })}
            </Row>
          </div>

          <div className={cx('wrapper-sub-blog')}>
            <Row gutter={[32, 32]}>
              {CARD_BLOG_SUB_LIST.map((item, index) => {
                return (
                  <Col key={index} span={24} lg={{ span: 8 }}>
                    <CardBlog
                      backgroundImage={item.backgroundImage}
                      day={item.day}
                      years={item.years}
                      route={item.route}
                      title={item.title}
                      description={item.description}
                    ></CardBlog>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </section>
    </Zoom>
  );
}

export default Section7;
