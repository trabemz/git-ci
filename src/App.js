import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { SettingsContextProvider } from "./store/settingsContext";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <SettingsContextProvider>
        <Header />
      </SettingsContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
