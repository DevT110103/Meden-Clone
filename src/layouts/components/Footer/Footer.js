import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Zoom } from 'react-reveal';
import { Ascending, BuildingIcon, PressMediaIcon, ValiIcon } from '~/component/Icons';
import InfoPanel from '~/component/InfoPanel/InfoPannel';
import NavFooter from '~/component/NavFooter';
import config from '~/configs';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const NAV_FOOTER_LIST = [
  {
    title: 'Products',
    data: [
      {
        navName: 'Sản phẩm',
        navLink: config.routes.product,
      },
      {
        navName: 'Blogs',
        navLink: config.routes.blogs,
      },
      {
        navName: 'News & Events',
        navLink: config.routes.news,
      },
      {
        navName: 'Emax',
        navLink: config.routes.emax,
      },
    ],
  },
  {
    title: 'Solution & Education',
    data: [
      {
        navName: 'Giải pháp',
        navLink: config.routes.product,
      },
      {
        navName: 'Thư viện',
        navLink: config.routes.blogs,
      },
    ],
  },
  {
    title: 'Service & Contact',
    data: [
      {
        navName: 'Liên hệ',
        navLink: config.routes.library,
      },
    ],
  },
];

const INFO_PANEL_LIST = [
  {
    icon: <ValiIcon></ValiIcon>,
    name: 'Carerr',
  },
  {
    icon: <BuildingIcon></BuildingIcon>,
    name: 'Company',
  },
  {
    icon: <Ascending></Ascending>,
    name: 'Investor',
  },
  {
    icon: <PressMediaIcon></PressMediaIcon>,
    name: 'Press & Media',
  },
];

function Footer() {
  return (
    <Zoom>
      <div className={cx('wrapper')}>
        <div className="container">
          <div className={cx('wrapper-content')}>
            <Row gutter={[32, 32]}>
              <Col span={24} lg={{ span: 16 }} md={{ span: 16 }}>
                <Row gutter={[32, 32]} wrap>
                  {NAV_FOOTER_LIST.map((item, index) => {
                    return (
                      <Col key={index} span={24} lg={{ span: 8 }} md={{ span: 12 }}>
                        <NavFooter data={item.data}>{item.title}</NavFooter>
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col span={24} lg={{ span: 8 }} md={{ span: 8 }}>
                {INFO_PANEL_LIST.map((item, index) => {
                  return (
                    <InfoPanel key={index} icon={item.icon}>
                      {item.name}
                    </InfoPanel>
                  );
                })}
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Zoom>
  );
}

export default Footer;
