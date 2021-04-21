import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import BooksList from '../components/BooksList';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Blog from '../containers/Blog';
import Projects from '../containers/Projects';
import Video from '../containers/Video';
import About from '../components/About'
import NavigationBar from '../components/NavigationBar';
import Header from '../components/Header'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <NavigationBar />
          <Header />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/home"><Home /></Route>
            <Route path="/books"><BooksList /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/blog"><Blog /></Route>
            <Route path="/projects"><Projects /></Route>
            <Route path="/video"><Video /></Route>
            <Route path="/about"><About /></Route>
            <Route exact path="/"><Home /></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}
