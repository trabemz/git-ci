import {Header} from '../../components/Header/Header';
import {React} from 'react';
import { useHistory } from 'react-router-dom';
import { ToolButton } from '../../components/ToolButton/ToolButton';
import { ReactComponent as SettingsIcon } from '../../assets/icons/settings.svg';
import { ReactComponent as RunIcon } from '../../assets/icons/play.svg';

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
      <h1 className='header__title--primary'>Test title</h1>
      <div>
        <ToolButton text='Run build' handleClick={handleRunClick}>
          <RunIcon className='tool-button__icon'/>
        </ToolButton>
        <ToolButton text='Settings' handleClick={handleSettingsClick} modificator='collapsed'>
          <SettingsIcon className='tool-button__icon'/>
        </ToolButton>
      </div>
      </Header>
    </>
  );
}