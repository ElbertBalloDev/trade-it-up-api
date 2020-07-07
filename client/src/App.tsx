import React from 'react';
import AppProvider from './Context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Viewport, Theme } from './components/UI';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { AddProduct } from './components/Products/';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  return (
    <AppProvider>
      <Theme>
        <Router>
          <Viewport>
            <Navbar />
            <Switch>
              <ProtectedRoute path='/product/add' component={AddProduct} />
              <Route path='/Login' component={Login} />
              <ProtectedRoute exact path='/' component={Dashboard} />
            </Switch>
          </Viewport>
        </Router>
      </Theme>
    </AppProvider>
  );
}

export default App;
