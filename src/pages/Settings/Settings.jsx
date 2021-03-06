import { Header } from '../../components/Header/Header';
import { React, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { InlineInput } from '../../components/InlineInput/InlineInput';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSettings } from '../../store/settingsReducer';

import './Settings.css';
import { fakeCloneRepository } from './fakeCloneRepository';

export function Settings() {
  const history = useHistory();
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();

  const [repository, setRepository] = useState(settings.repository);
  const [buildCommand, setBuildCommand] = useState(settings.buildCommand);
  const [branch, setBranch] = useState(settings.branch);
  const [synchronizeInterval, setSynchronizeInterval] = useState(
    settings.synchronizeInterval,
  );

  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleSubmit = async () => {
    setIsPending(true);
    setErrors([]);

    if (!repository || !buildCommand) {
      setErrors((errors) => [
        ...errors,
        'GitHub repository name and build command should be provided.',
      ]);
      setIsPending(false);
      return;
    }

    if (isNaN(synchronizeInterval)) {
      setErrors((errors) => [
        ...errors,
        'Synchronize interval should be a number.',
      ]);
      setIsPending(false);
      return;
    }

    const result = await fakeCloneRepository();

    if (result.ok) {
      dispatch(
        setSettings({
          repository,
          buildCommand,
          branch,
          synchronizeInterval,
        }),
      );
      setIsPending(false);
      history.push('/history');
    } else {
      setIsPending(false);
      setErrors((errors) => [...errors, result.statusText]);
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  return (
    <>
      <Header>
        <h1 className="header__title settings__header-title">
          School CI server
        </h1>
      </Header>
      <main className="settings container">
        <section className="settings__content ">
          <h2 className="settings__title">Settings</h2>
          <p className="settings__description">
            Configure repository connection and synchronization settings.
          </p>
          <form className="settings__form">
            <Input
              name="repository"
              label="GitHub repository"
              required
              value={repository}
              setValue={setRepository}
              placeholder="user-name/repo-name"
            />
            <Input
              name="buildCommand"
              label="Build command"
              required
              value={buildCommand}
              setValue={setBuildCommand}
              placeholder="npm command"
            />
            <Input
              name="branch"
              label="Main branch"
              value={branch}
              setValue={setBranch}
              placeholder="branch-name"
            />
            <p className="settings__synchronize">
              Synchronize every
              <InlineInput
                name="synchronizeInterval"
                value={synchronizeInterval}
                setValue={setSynchronizeInterval}
              />
              minutes
            </p>
            <div className="settings__buttons">
              <Button
                modificator="action"
                text="Save"
                handleClick={handleSubmit}
                disabled={isPending}
              />
              <Button
                text="Cancel"
                handleClick={handleCancel}
                disabled={isPending}
              />
            </div>
            {errors.map((error) => (
              <p className="settings__error" key={error}>
                {error}
              </p>
            ))}
          </form>
        </section>
      </main>
    </>
  );
}
