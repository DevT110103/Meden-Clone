import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './Library.module.scss';

const cx = classNames.bind(styles);

function Library() {
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className={cx('wrapper-content')}>
          <p className={cx('title')}>Please let us know your email:</p>

          <div className={cx('wrapper-submit')}>
            <input type="email" className={cx('input')} />
            <Button className={cx('btn-submit')}>SUBMIT</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Library;
