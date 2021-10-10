import { Header } from '../../components/Header/Header';
import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ToolButton } from '../../components/ToolButton/ToolButton';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as RunIcon } from '../../assets/icons/play.svg';
import { Build } from '../../components/Build/Build';
import { Button } from '../../components/Button/Button';
import { RunBuildModal } from '../../components/RunBuildModal/RunBuildModal';
import { fetchBuilds, loadMoreBuilds } from '../../store/buildsActions';
import { useDispatch, useSelector } from 'react-redux';

import './History.css';

export function History() {
  const history = useHistory();

  const dispatch = useDispatch();

  const { repository, isConfigured, synchronizeInterval } = useSelector(
    (state) => state.settings,
  );
  const { builds, error } = useSelector((state) => state.builds);

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

  const handleShowMore = async () => {
    dispatch(loadMoreBuilds());
  };

  useEffect(() => {
    dispatch(fetchBuilds());
    const intervalId = setInterval(() => {
      dispatch(fetchBuilds());
    }, synchronizeInterval * 60 * 1000);
    return () => clearInterval(intervalId);
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
        {error && <p className="error">{error.message}</p>}
        {
          /*when there are real builds, rewrite the key to id*/
          builds &&
            builds.length > 0 &&
            builds.map((build, index) => <Build key={index} {...build} />)
        }
        {!error && <Button text="Show more" handleClick={handleShowMore} />}
      </main>
      {showModal && <RunBuildModal handleClose={handleCloseModal} />}
    </>
  );
}
