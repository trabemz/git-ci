import { React } from 'react';
import { useHistory } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Button } from '../../components/Button/Button';
import { ToolButton } from '../../components/ToolButton/ToolButton';
import { ReactComponent as ConfigureLogo } from '../../assets/icons/configure-logo.svg';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import './Start.css';

export function Start() {
  const history = useHistory();

  const handleClick = () => {
    history.push('/settings');
  };

  return (
    <>
      <Header>
        <h1 className="header__title">School CI server</h1>
        <ToolButton text="Settings" handleClick={handleClick}>
          <SettingsIcon className="tool-button__icon" />
        </ToolButton>
      </Header>
      <main className="start">
        <section className="start__section">
          <ConfigureLogo className="start__configure-logo" />
          <p className="start__text">
            Configure repository connection <br />
            and synchronization settings
          </p>
          <Button
            modificator="action"
            text="Open settings"
            handleClick={handleClick}
          />
        </section>
      </main>
    </>
  );
}
