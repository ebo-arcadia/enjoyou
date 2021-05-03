import React from "react";
import '../style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import Books from '../containers/Books';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Blog from '../containers/Blog';
import Movies from '../containers/Movies';
import Video from '../containers/Video';
import RailsAPI from './RailsAPI'
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
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/blog"><Blog /></Route>
            <Route path="/movies"><Movies /></Route>
            <Route path="/video"><Video /></Route>
            <Route path="/railsapi"><RailsAPI /></Route>
            <Route exact path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
