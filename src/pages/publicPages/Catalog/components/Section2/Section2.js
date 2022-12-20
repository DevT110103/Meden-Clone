import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Section2.module.scss';
import { Col, Row } from 'antd';
import CardEvent from '~/component/CardEvent';
import { Fragment } from 'react';

const cx = classNames.bind(styles);

function Section2({ post, loading }) {
  if (loading) {
    return <div></div>;
  }
  return (
    <section className={cx('wrapper')}>
      <Row gutter={[32, 32]}>
        {post.map((item, index) => {
          if (!item.secondary && !item.main) {
            return (
              <Col key={index} span={24} lg={{ span: 8 }}>
                <CardEvent title={item.title} desc={item.desc} img={item.img} link={item.link}></CardEvent>
              </Col>
            );
          } else {
            return Fragment;
          }
        })}
      </Row>
    </section>
  );
}

Section2.propTypes = {
  post: PropTypes.array,
  loading: PropTypes.bool,
};
export default Section2;
