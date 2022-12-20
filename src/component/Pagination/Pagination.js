import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Pagination.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Pagination({ perPage, totalContent, paginate }) {
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = [];

  for (let i = 1; i <= Math.ceil(totalContent / perPage); ++i) {
    pageSize.push(i);
  }

  const headPage = () => {
    window.scrollTo(0, 0);
  };

  const handlePaginatePrev = () => {
    setCurrentPage((prev) => {
      paginate(prev - 1);
      return prev - 1;
    });
    headPage();
  };

  const handlePaginateNext = () => {
    setCurrentPage((prev) => {
      paginate(prev + 1);
      return prev + 1;
    });
    headPage();
  };

  const handlePaginateNumber = (page) => {
    setCurrentPage(page);
    paginate(page);
    headPage();
  };

  return (
    <div className={cx('wrapper')}>
      <button
        className={cx('btn', {
          prev: true,
        })}
        disabled={currentPage <= 1}
        onClick={handlePaginatePrev}
      >
        <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
      </button>

      <div className={cx('wrapper-page')}>
        {pageSize.map((page, index) => {
          return (
            <span key={index} onClick={() => handlePaginateNumber(page)} className={cx('page')}>
              {page}
            </span>
          );
        })}
      </div>

      <button
        className={cx('btn', {
          next: true,
        })}
        onClick={handlePaginateNext}
        disabled={currentPage >= Math.ceil(totalContent / perPage)}
      >
        <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
      </button>
    </div>
  );
}

Pagination.propTypes = {
  size: PropTypes.number,
};
export default Pagination;
