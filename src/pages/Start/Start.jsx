import {Header} from '../../components/Header/Header';
import {React} from 'react';
import './Start.css'
import { ReactComponent as ConfigureLogo } from '../../assets/icons/configure-logo.svg';

export function Start(){
  return (
    <>
      <Header>
        <h1 className='header__logo'>School CI server</h1>
      </Header>
      <main className="start">
        <section className="start__section">
            <ConfigureLogo />
            <p>Configure repository connection <br/> 
              and synchronization settings</p>
            <button>Open settings</button> 
        </section>
      </main>
    </>
  );
}