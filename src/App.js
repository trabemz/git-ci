import "./App.css";
import { React } from "react";
import { Footer } from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { SettingsContextProvider } from "./store/settingsContext";
import { Home } from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <SettingsContextProvider>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </SettingsContextProvider>
      <Footer />
    </Router>
  );
}

export default App;
