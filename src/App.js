import React from 'react';
// import FronteersContainer from './components/Fronteers/FronteersContainer';
// import Functional from './components/Fronteers/Functional';
// import Lea from './components/Fronteers/Lea';
import Courses from './components/courses/Courses';
import Course from './components/courses/Course';
import WorkoutRandomizer from './components/workout/WorkoutRandomizer';
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import './App.scss';

const history = createBrowserHistory();

const App = () => (
  <Router history={history}>
    <header className="App-header">
      <Route path="/" component={WorkoutRandomizer} />
      <Route path="/courses" component={Courses} />
      <Route path="/course/:code" component={Course} />
    </header>
  </Router>
)

export default App;
