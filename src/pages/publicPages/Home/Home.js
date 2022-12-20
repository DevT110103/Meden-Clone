/* eslint-disable jsx-a11y/heading-has-content */
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Section1 from './components/Section1';
import Section2 from './components/Section2/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import Section7 from './components/Section7';
import { Fade } from 'react-reveal';

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx('wrapper')}>
      <Section1></Section1>
      <Section2></Section2>
      <Fade>
        <Section3></Section3>
      </Fade>
      <Section4></Section4>
      <Section5></Section5>
      <Section6></Section6>
      <Section7></Section7>
    </div>
  );
}

export default Home;
