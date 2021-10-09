import { Header } from '../../components/Header/Header';
import { React, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToolButton } from '../../components/ToolButton/ToolButton';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as RunIcon } from '../../assets/icons/play.svg';
import { Build } from '../../components/Build/Build';
import { buildsMock } from './buildsMock';
import { Button } from '../../components/Button/Button';
import { RunBuildModal } from '../../components/RunBuildModal/RunBuildModal';

import './History.css';
import { SettingsContext } from '../../store/settingsContext';

export function History() {
  const history = useHistory();
  const { repository, isConfigured } = useContext(SettingsContext);

  const [showModal, setShowModal] = useState(false);

  if (!isConfigured) {
    history.push('/');
  }

  const handleSettingsClick = () => {
    history.push('/settings');
  };

  const handleRunClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowMore = () => {
    setBuilds([...builds, ...buildsMock]);
  };

  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    setBuilds(buildsMock);
  }, []);

  return (
    <>
      <Header>
        <h1 className="header__title--primary">{repository}</h1>
        <div className="header__tool-buttons">
          <ToolButton text="Run build" handleClick={handleRunClick}>
            <RunIcon className="tool-button__icon" />
          </ToolButton>
          <ToolButton
            text="Settings"
            handleClick={handleSettingsClick}
            modificator="collapsed"
          >
            <SettingsIcon className="tool-button__icon" />
          </ToolButton>
        </div>
      </Header>
      <main className="container history">
        {
          /*when there are real builds, rewrite the key to id*/
          builds &&
            builds.length > 0 &&
            builds.map((build, index) => <Build key={index} {...build} />)
        }
        <Button text="Show more" handleClick={handleShowMore} />
      </main>
      {showModal && <RunBuildModal handleClose={handleCloseModal} />}
    </>
  );
}
