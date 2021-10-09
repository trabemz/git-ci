import {Header} from '../../components/Header/Header';
import {React, useContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { ToolButton } from '../../components/ToolButton/ToolButton';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as RunIcon } from '../../assets/icons/play.svg';
import {Build} from '../../components/Build/Build';
import {buildsMock} from './buildsMock'

import './History.css';
import { SettingsContext } from '../../store/settingsContext';

export function History(){
  const history = useHistory();
  const {repository, isSetted} = useContext(SettingsContext);

  if(!isSetted){
    history.push('/');
  }

  const handleSettingsClick = () => {
    history.push('/settings');
  }

  const handleRunClick = () => {
  }

  const [builds, setBuilds] = useState([]);

  useEffect(() => {
    setBuilds(buildsMock);
  }, []);

  return (
    <>
      <Header>
      <h1 className='header__title--primary'>{repository}</h1>
      <div className='header__tool-buttons'>
        <ToolButton text='Run build' handleClick={handleRunClick}>
          <RunIcon className='tool-button__icon'/>
        </ToolButton>
        <ToolButton text='Settings' handleClick={handleSettingsClick} modificator='collapsed'>
          <SettingsIcon className='tool-button__icon'/>
        </ToolButton>
      </div>
      </Header>
      <main className='container history'>
        {
          builds.map((build) => (
            <Build key={build.id} {...build}/>
          ))
        }
      </main>
    </>
  );
}