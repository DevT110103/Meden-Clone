/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import classNames from 'classnames/bind';
import styles from './Section5.module.scss';
import { default as SliderSlick } from 'react-slick';
import { logo1, logo11, logo12, logo13, logo14, logo15 } from '~/utils/images';
import { Zoom } from 'react-reveal';

const cx = classNames.bind(styles);

const LOGO_LIST = [
  {
    logo: logo11,
  },
  {
    logo: logo12,
  },
  {
    logo: logo13,
  },
  {
    logo: logo14,
  },
  {
    logo: logo15,
  },
];

function Section5() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
    <Zoom>
      <section className={cx('wrapper')}>
        <div className="container">
          <div className={cx('wrapper-content')}>
            <div className={cx('wrapper-header')}>
              <p className={cx('title')}>Đối tác</p>
              <p className={cx('description')}>Các thương hiệu lớn toàn cầu</p>
            </div>

            <div className={cx('wrapper-slider')}>
              <SliderSlick {...settings}>
                {LOGO_LIST.map((item, index) => {
                  return (
                    <a key={index} href="#" className={cx('link')}>
                      <img className={cx('img')} src={item.logo} alt="" />
                    </a>
                  );
                })}
              </SliderSlick>
            </div>
          </div>
        </div>
      </section>
    </Zoom>
  );
}

export default Section5;
