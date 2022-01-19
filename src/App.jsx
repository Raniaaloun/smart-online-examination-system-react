import PreQuiz from 'pages/Pre-Quiz';
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Course from './pages/Course';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/home" component={Home} />
        <Route path="/course" component={Course} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/pre-quiz" component={PreQuiz} />
        <Redirect from="/" to="/sign-in" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
