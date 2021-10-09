import './App.css';
import { React } from 'react';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Settings } from './pages/Settings/Settings';
import { History } from './pages/History/History';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/settings" component={Settings}></Route>
          <Route path="/history" component={History}></Route>
        </Switch>
      </Provider>
      <Footer />
    </Router>
  );
}

export default App;
