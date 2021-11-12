import React from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/student-home" component={Home} />
        <Redirect from="/" to="/sign-in" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
