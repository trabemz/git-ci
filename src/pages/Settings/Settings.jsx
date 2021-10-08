import {Header} from '../../components/Header/Header';
import {React} from 'react';

export function Settings(){
  return (
    <>
      <Header>
        <h1 className='header__title'>School CI server</h1>
      </Header>
      <main className='settings'>
        <section className='settings__content container'>
          <h2 className='settings__title'>Settings</h2>
          <p className='settings__description'>Configure repository connection and synchronization settings.</p>
        </section>
      </main>
    </>
  );
}