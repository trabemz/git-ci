import { useContext } from "react";
import { SettingsContext } from "../../store/settingsContext";
import { Start } from "../Start/Start";
import {History} from '../History/History';
import {React} from 'react';

export function Home(){
  const {isConfigured} = useContext(SettingsContext);

  return (
    isConfigured ? <History /> : <Start />
  );
}