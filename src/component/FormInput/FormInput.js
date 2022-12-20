import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FormInput.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function FormInput({ desc, type, name, label, errorMessage, required, pattern, onChange }) {
  const [focused, setFocused] = useState(false);
  const handleBlur = (e) => {
    setFocused(true);
  };

  return (
    <div className={cx('wrapper')}>
      <label htmlFor="">{label}</label>
      <input
        name={name}
        onChange={onChange}
        type={type}
        className={cx('input')}
        placeholder={desc}
        required={required}
        pattern={pattern}
        onBlur={handleBlur}
        focused={focused.toString()}
      />
      <span className={cx('msg')}>{errorMessage}</span>
    </div>
  );
}

FormInput.propTypes = {};
export default FormInput;
