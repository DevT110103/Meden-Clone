import classNames from 'classnames/bind';
import { Fade, Zoom } from 'react-reveal';
import StepItem from '~/component/StepItem';
import { background1, logo1, logo2, logo3 } from '~/utils/images';
import styles from './Section2.module.scss';

const cx = classNames.bind(styles);

const STEP_LIST = [
  {
    logo: logo1,
    title: 'Thu nhập & Chẩn đoán dữ liệu',
    description: 'Một phục hình được tạo ra dưới dạng hình ảnh 3D trên máy tính.',
  },
  {
    logo: logo2,
    title: 'Kế hoạch & Tư vấn',
    description: 'Sau khi tư vấn, một camera sẽ chụp lại khu vực cần xử lý',
  },
  {
    logo: logo3,
    title: 'Phục hình & Điều trị',
    description:
      'Sau đó, phục hình răng được tạo ra trên máy tính và sau đó được mài trực tiếp từ một phôi sứ. Chỉ một lúc sau, phục hình sứ đã hoàn thành được gắn lên bệnh nhân.',
  },
];

function Section2() {
  return (
    <Fade>
      <section className={cx('section-2')} style={{ backgroundImage: `url("${background1}")` }}>
        <div className="container">
          <div className={cx('wrapper-step')}>
            <h3 className={cx('title')}>Medent đem đến giải pháp tốt nhất "NHA KHOA 1 LẦN HẸN"</h3>
            {STEP_LIST.map((item, index) => {
              return (
                <Zoom key={index}>
                  <StepItem logo={item.logo} title={item.title} description={item.description}></StepItem>
                </Zoom>
              );
            })}
          </div>
        </div>
      </section>
    </Fade>
  );
}

export default Section2;
