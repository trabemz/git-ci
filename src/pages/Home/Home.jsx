import { Start } from '../Start/Start';
import { History } from '../History/History';
import { React } from 'react';
import { useSelector } from 'react-redux';

export function Home() {
  const { isConfigured } = useSelector((state) => state.settings);

  return isConfigured ? <History /> : <Start />;
}
