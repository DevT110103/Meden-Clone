import classNames from 'classnames/bind';
import { default as SliderSlick } from 'react-slick';

import Button from '../Button/Button';
import styles from './Slider.module.scss';

import slider1 from '~/assets/images/CEREC-thiet-bi-chan-doan-hinh-anh-banner.jpg';
import slider2 from '~/assets/images/Banner-01-1.png';
import slider3 from '~/assets/images/Axeos-WebSlide-01-scaled.jpg';

const cx = classNames.bind(styles);

const SLIDER_LIST = [
  {
    title: 'Giải pháp chuẩn',
    subTitle: ' Hệ thống chẩn đoán hình ảnh tối ưu chi tiết tăng độ tin cậy trong điều trị lâm sàng',
    img: slider1,
    chilrenBtn: 'Liên hệ ngay',
  },
  {
    title: 'Giải pháp chuẩn',
    subTitle: ' Hệ thống chẩn đoán hình ảnh tối ưu chi tiết tăng độ tin cậy trong điều trị lâm sàng',
    img: slider2,
    chilrenBtn: 'Xem thêm',
  },
  {
    title: 'Nha khoa 1 lần hẹn',
    subTitle: 'Giải pháp trị răng chỉ trong 1 lần hẹn',
    img: slider3,
    chilrenBtn: 'Liên hệ ngay',
  },
];

function Slider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className={cx('wrapper')}>
      <div>
        <SliderSlick {...settings}>
          {SLIDER_LIST.map((item, index) => {
            return (
              <div key={index}>
                <div
                  className={cx('background')}
                  style={{
                    paddingTop: '30%',
                    backgroundImage: `url("${item.img}")`,
                    backgroundAttachment: 'contain',
                    backgroundSize: '100%',
                    backgroundPosition: 'center center',
                  }}
                >
                  <div className={cx('wrapper-content')}>
                    <div className={cx('wrapper-title')}>
                      <p className={cx('title')}>{item.title}</p>
                      <p className={cx('sub-title')}>{item.subTitle}</p>
                    </div>
                    <Button className={cx('btn')}>{item.chilrenBtn}</Button>
                  </div>
                </div>
              </div>
            );
          })}
        </SliderSlick>
      </div>
    </div>
  );
}

export default Slider;
