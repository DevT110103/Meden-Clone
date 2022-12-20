import { Col, Row } from 'antd';
import classNames from 'classnames/bind';
import { Fragment, useEffect, useState } from 'react';
import CardEvent from '~/component/CardEvent';
import { image12, image13 } from '~/utils/images';
import Section2 from '../Catalog/components/Section2';
import Pagination from '~/component/Pagination';
import styles from './News.module.scss';

const cx = classNames.bind(styles);

const CARD_EVENT_LIST = [
  {
    main: true,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
    rating: 720,
  },
  {
    main: true,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
    secondary: true,
  },
  {
    main: true,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
    secondary: true,
  },
  {
    main: false,
    img: image13,
    title: 'SỰ KIỆN: KỈ NIỆM 35 NĂM, ĐÁNH DẤU SỰ RA ĐỜI CỦA CEREC CAD/CAM TRÊN THỊ TRƯỜNG',
    desc: 'Sự kiện: Kỉ niệm 35 năm, đánh dấu sự ra đời của CEREC CAD/CAM trên thị trường Trở lại...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
  {
    main: false,
    img: image12,
    title: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS E.MAX 2021 – THE BIGGEST EVENT TRONG NĂM 2021',
    desc: 'CUỘC THI NHIẾP ẢNH NHA KHOA KHU VỰC ĐÔNG NAM Á IPS e.max 2021 – THE BIGGEST EVENT TRONG...',
    link: '#',
  },
];

function News() {
  const [loading] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);

  useEffect(() => {
    const subCard = [];

    // eslint-disable-next-line array-callback-return
    CARD_EVENT_LIST.map((item) => {
      if (!item.secondary && !item.main) {
        subCard.push(item);
      }
    });

    setNewsList(subCard);
  }, []);

  const indexOfLastPage = currentPage * perPage;
  const indexOfFirstPage = indexOfLastPage - perPage;
  const currentPageNews = newsList.slice(indexOfFirstPage, indexOfLastPage);

  const paginate = (page) => setCurrentPage(page);

  return (
    <div className="container">
      <div className={cx('wrapper')}>
        <section className={cx('section1')}>
          <Row gutter={[32, 32]}>
            {CARD_EVENT_LIST.map((item, index) => {
              if (!item.secondary && item.main) {
                return (
                  <Col key={index} span={24} lg={{ span: 12 }}>
                    <CardEvent
                      main={item.rating > 100}
                      title={item.title}
                      desc={item.desc}
                      img={item.img}
                      link={item.link}
                    ></CardEvent>
                  </Col>
                );
              } else {
                return Fragment;
              }
            })}
            <Col span={24} lg={{ span: 12 }}>
              <Row gutter={[32, 32]}>
                {CARD_EVENT_LIST.map((item, index) => {
                  if (item.secondary && item.main) {
                    return (
                      <Col key={index} span={24} lg={{ span: 24 }}>
                        <CardEvent secondary={item.secondary} title={item.title} desc={item.desc} img={item.img}></CardEvent>
                      </Col>
                    );
                  } else {
                    return Fragment;
                  }
                })}
              </Row>
            </Col>
          </Row>
        </section>
        <Section2 post={currentPageNews} loading={loading}></Section2>
        <section className={cx('section3')}>
          <Pagination perPage={perPage} totalContent={newsList.length} paginate={paginate}></Pagination>
        </section>
      </div>
    </div>
  );
}

export default News;
