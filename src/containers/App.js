import React from "react";
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Books from './books';
import Movies from './movies';
import Video from './video';
import Saved from './saved'
import NavigationBar from '../components/NavigationBar';

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <NavigationBar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home"><Home /></Route>
            <Route path="/books"><Books /></Route>
            <Route path="/movies"><Movies /></Route>
            <Route path="/video"><Video /></Route>
            <Route path="/saved"><Saved /></Route>
            <Route exact path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
