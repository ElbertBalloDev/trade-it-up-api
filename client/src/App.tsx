import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Viewport, Theme } from './components/UI';
import Navbar from './components/Navbar';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <Theme>
      <Router>
        <Viewport>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </Viewport>
      </Router>
    </Theme>
  );
}

export default App;
