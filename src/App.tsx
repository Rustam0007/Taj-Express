import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AboutPage from './Pages/AboutPage'
import ForManPage from './Pages/ForManPage'
import ForWomanPage from './Pages/ForWomanPage'
import ForChildrenPage from './Pages/ForChildrenPage'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/clothes-for-men" component={ForManPage} />
          <Route path="/clothes-for-women" component={ForWomanPage} />
          <Route path="/clothes-for-children" component={ForChildrenPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
