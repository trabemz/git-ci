import { React, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { PropTypes } from 'prop-types';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

import './RunBuildModal.css';

export function RunBuildModal(props) {
  const { handleClose } = props;

  const [hash, setHash] = useState('');

  return (
    <Modal>
      <h2 className="run-build__title">New build</h2>
      <form className="run-build__form">
        <Input
          name="hash"
          label="Enter the commit hash which you want to build."
          placeholder="Commit hash"
          value={hash}
          setValue={setHash}
        />
        <div className="run-build__buttons">
          <Button text="Run build" handleClick={handleClose} modificator="action" />
          <Button text="Cancel" handleClick={handleClose} />
        </div>
      </form>
    </Modal>
  );
}

RunBuildModal.propTypes = {
  handleClose: PropTypes.func,
};
