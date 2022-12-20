import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './ListProduct.module.scss';
import { Datagrid, List, TextField } from 'react-admin';

const cx = classNames.bind(styles);

export function ListProduct(props) {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id"></TextField>
        <TextField source="name"></TextField>
      </Datagrid>
    </List>
  );
}

ListProduct.propTypes = {};
