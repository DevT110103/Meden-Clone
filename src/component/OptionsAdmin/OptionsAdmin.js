import classNames from 'classnames/bind';
import styles from './OptionsAdmin.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import config from '~/configs';
import { useNavigate } from 'react-router-dom';
import { post } from '~/utils/request';

const cx = classNames.bind(styles);

function OptionsAdmin() {
  const navigate = useNavigate();

  const handleLogOut = () => {
    const token = localStorage.getItem('token');
    post(
      '/auth/logout',
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => {
        localStorage.clear();
        navigate(config.routes.home);
      })
      .catch((err) => {
        console.log('err ->', err);
      });
  };
  return (
    <div className={cx('wrapper')}>
      <FontAwesomeIcon className={cx('icon')} icon={faUser}></FontAwesomeIcon>

      <ul className={cx('list-options')}>
        <li className={cx('option-item')}>
          <span className={cx('link')}>Profile</span>
        </li>
        <li className={cx('option-item')}>
          <span className={cx('link')}>Admin Page</span>
        </li>
        <li onClick={handleLogOut} className={cx('option-item')}>
          <span className={cx('link')}>Log Out</span>
        </li>
      </ul>
    </div>
  );
}

OptionsAdmin.propTypes = {};
export default OptionsAdmin;
