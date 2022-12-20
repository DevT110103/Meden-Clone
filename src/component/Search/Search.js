import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Search() {
  return (
    <div className={cx('wrapper')}>
      <input type="text" placeholder="Tìm kiếm catelog..." className={cx('input')} />
      <button className={cx('btn')}>
        <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}

Search.propTypes = {};
export default Search;
