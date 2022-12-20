import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import styles from './Section6.module.scss';
import { image1, image2, image3 } from '~/utils/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import DateTime from '~/component/DateTime';

const cx = classNames.bind(styles);

const SUB_NEWS_LIST = [
  {
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    date: '18-06-2021',
  },
  {
    title: 'Đèn quang trùng hợp Bluephase G4 – Chương trình bảo hành',
    date: '05-05-2021',
  },
  {
    title: 'Hội nghị Tháng 4 2021 – NGÀY HỘI CHUYỂN GIAO CÔNG NGHỆ, KỸ THUẬT, VẬT LIỆU HIỆN ĐẠI TRONG ĐIỀU TRỊ RĂNG HÀM MẶT',
    date: '28-04-2021',
  },
];

function Section6() {
  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <Row gutter={[32, 32]}>
          <Col span={24} lg={{ span: 12 }}>
            <p className={cx('title')}>TIN TỨC & SỰ KIỆN</p>
            <div className={cx('wrapper-card')}>
              <div className={cx('wrapper-img')}>
                <img src={image1} alt="" />
              </div>

              <div className={cx('wrapper-content')}>
                <Link to="#" className={cx('top-content')}>
                  Invisalign Aligner đối tác đáng tin cậy của hệ thống Omnicam trong điều trị chỉnh nha máng trong suốt​
                </Link>
                <DateTime>27-5-2021</DateTime>
                <p className={cx('bottom-content')}>
                  Bên cạnh các ứng dụng trong điều trị cấy ghép implant, phục hình,… với hệ thống lấy dấu kỹ...
                </p>
              </div>
            </div>
            {SUB_NEWS_LIST.map((item, index) => {
              return (
                <div key={index} className={cx('wrapper-sub-news')}>
                  <Link to="#" className={cx('link')}>
                    {item.title}
                  </Link>
                  <DateTime>{item.date}</DateTime>
                </div>
              );
            })}
          </Col>
          <Col span={24} lg={{ span: 12 }}>
            <div className={cx('wrapper-video')}>
              <img src={image2} alt="" />
              <div className={cx('wrapper-logo-you')}>
                <img src={image3} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Section6;
