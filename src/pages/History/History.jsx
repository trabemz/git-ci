import {Header} from '../../components/Header/Header';
import {React} from 'react';
import { useHistory } from 'react-router-dom';
import { ToolButton } from '../../components/ToolButton/ToolButton';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as RunIcon } from '../../assets/icons/play.svg';
import { ReactComponent as DoneIcon } from '../../assets/icons/done.svg'

import './History.css';

export function History(){
  const history = useHistory();

  const handleSettingsClick = () => {
    history.push('/settings');
  }

  const handleRunClick = () => {
  }

  return (
    <>
      <Header>
      <h1 className='header__title--primary'>philip1967/my-aw esome-repo-with-long-long-long-repo-name</h1>
      <div className='header__tool-buttons'>
        <ToolButton text='Run build' handleClick={handleRunClick}>
          <RunIcon className='tool-button__icon'/>
        </ToolButton>
        <ToolButton text='Settings' handleClick={handleSettingsClick} modificator='collapsed'>
          <SettingsIcon className='tool-button__icon'/>
        </ToolButton>
      </div>
      </Header>
      <main className='container'>
        <div className='build'>
          <div className='build__icon-container'>
            <DoneIcon className='build__done'/>
          </div>
          <div className='build__information-container'>
              <span className='build__id'>#1368</span>
              <span className='build__title'>add documentation for postgres scaler</span>
              <span className='build__head-container'><span className='build__branch'>master</span> <span className='build__hash'>9c9f0b9</span></span>
              <span className='build__author'>Philip Kirkorov</span>
          </div>
          <div className='build__time-container'>
            <span className='build__date'>
              21 янв, 03:06
            </span>
            <span className='build__buildTime'>
              1 ч 20 мин
            </span>
          </div>
        </div>
      </main>
    </>
  );
}