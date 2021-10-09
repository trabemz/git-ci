import { React } from 'react';
import { PropTypes } from 'prop-types';

import './InlineInput.css';

export function InlineInput(props) {
  const { name, value, setValue } = props;

  const handleOnChange = (event) => setValue(+event.target.value);

  return (
    <input
      id={name}
      name={name}
      type="number"
      min="1"
      max="999"
      onChange={handleOnChange}
      value={+value}
      className="input__field inline-input__field"
    ></input>
  );
}

InlineInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  setValue: PropTypes.func,
};
