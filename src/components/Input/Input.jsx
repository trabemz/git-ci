import { React } from 'react';
import { PropTypes } from 'prop-types';

import './Input.css';
import { ReactComponent as ClearIcon } from '../../assets/icons/clear.svg';

export function Input(props) {
  const { name, label, required, placeholder, value, setValue } = props;

  const handleOnChange = (event) => setValue(event.target.value);

  const handleClear = () => setValue('');

  return (
    <>
      <label htmlFor={name} className="input__label">
        {label} {required ? <span className="input__required">*</span> : ''}
      </label>
      <div className="input__container">
        <input
          id={name}
          name={name}
          onChange={handleOnChange}
          value={value}
          className="input__field"
          placeholder={placeholder}
        />
        <ClearIcon
          onClick={handleClear}
          className={value ? 'input__clear' : 'input__clear--hide'}
        />
      </div>
    </>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
};
