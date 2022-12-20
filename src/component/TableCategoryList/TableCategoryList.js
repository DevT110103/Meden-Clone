import { faGhost, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'antd';
import classNames from 'classnames/bind';
import { Spinner, Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

import styles from './TableCategoryList.module.scss';
import config from '~/configs';
import formatDate from '~/utils/formatDate';

const cx = classNames.bind(styles);

function TableCategoryList({ categoryList = [], loading, handleDelete, handleEditCategory, loadingDelete }) {
  const navigate = useNavigate();
  const handleAddCategories = () => {
    navigate(config.routes.AdminCategories);
  };

  return (
    <div className={cx('wrapper')}>
      {loading ? (
        <div className={cx('loading')}>
          <Spinner
            color="primary"
            style={{
              height: '5rem',
              width: '5rem',
            }}
          >
            Loading...
          </Spinner>
        </div>
      ) : (
        <>
          <div className={cx('heading')}>
            <span>Category List</span>
            <Button onClick={handleAddCategories}>Add +</Button>
          </div>
          <Table border="border">
            <thead>
              <tr>
                <th>#</th>
                <th>Name Category</th>
                <th>Create At</th>
                <th>Update At</th>
                <th className={cx('action')}>Action</th>
              </tr>
            </thead>
            <tbody>
              {categoryList.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{formatDate(item.created_at)}</td>
                    <td>{formatDate(item.updated_at)}</td>
                    <td className={cx('action')}>
                      <Button
                        className={cx('btn')}
                        onClick={() => {
                          handleEditCategory(item.id);
                        }}
                      >
                        <FontAwesomeIcon className={cx('icon')} icon={faPen}></FontAwesomeIcon>
                        Edit
                      </Button>
                      <Button
                        loading={loadingDelete}
                        className={cx('btn')}
                        danger
                        onClick={() => {
                          handleDelete(item.id);
                        }}
                      >
                        {loadingDelete || (
                          <>
                            <FontAwesomeIcon className={cx('icon')} icon={faTrash}></FontAwesomeIcon>
                            <span>Delete</span>
                          </>
                        )}
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          {categoryList.length <= 0 && (
            <p className={cx('empty')}>
              Danh Sách Rỗng
              <FontAwesomeIcon className={cx('icon-empty')} icon={faGhost}></FontAwesomeIcon>
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default TableCategoryList;
