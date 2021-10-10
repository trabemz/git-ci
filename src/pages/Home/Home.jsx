import { Start } from '../Start/Start';
import { History } from '../History/History';
import { React } from 'react';
import store from '../../store/store';

export function Home() {
  const { isConfigured } = store.getState();

  return isConfigured ? <History /> : <Start />;
}
