import React from 'react';
import AppProvider from './Context/Context';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Viewport, Theme } from './components/UI';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { Login } from './components/Login';
import { AddProduct } from './components/Products/';
<<<<<<< HEAD
import { Register } from './components/Register/';
=======
import { ProtectedRoute } from './components/ProtectedRoute';
>>>>>>> 1c9d3c317976b617a5cec66f8150e94d511fc98a

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
<<<<<<< HEAD
              <Route path='/Register' component={Register} />
              <Route exact path='/' component={Dashboard} />
=======
              <ProtectedRoute exact path='/' component={Dashboard} />
>>>>>>> 1c9d3c317976b617a5cec66f8150e94d511fc98a
            </Switch>
          </Viewport>
        </Router>
      </Theme>
    </AppProvider>
  );
}

export default App;
