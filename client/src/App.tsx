import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Viewport, Theme } from './components/UI';
import Navbar from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { AddProduct } from './components/Products/';

function App() {
  return (
    <Theme>
      <Router>
        <Viewport>
          <Navbar />
          <Switch>
            <Route path='/product/add' component={AddProduct} />
            <Route path='/Login' component={Login} />
            <Route exact path='/' component={Dashboard} />
          </Switch>
        </Viewport>
      </Router>
    </Theme>
  );
}

export default App;
