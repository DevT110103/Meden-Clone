import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from '~/layouts/components/Header';
import styles from './SliderLayout.module.scss';
import Footer from '../components/Footer';
import Slider from '~/component/Slider';

const cx = classNames.bind(styles);

function SliderLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <Slider></Slider>
      <div className={cx('content')}>{children}</div>
      <Footer />
    </div>
  );
}

SliderLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SliderLayout;
