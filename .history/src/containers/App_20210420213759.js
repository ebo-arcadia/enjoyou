import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import BooksList from '../components/BooksList';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Blog from '../containers/Blog';
import Projects from '../containers/Projects';
import Video from '../containers/Video';
import About from '../components/About'
import { Breadcrumb } from 'react-bootstrap';
import NavigationBar from '../components/NavigationBar';
import BackgroundImagePage from '../components/BackgroundImagePage'

export default function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <NavigationBar />
          <nav>
            <Breadcrumb>
              <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/books">Books</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/login">Login</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/signup">Signup</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/blog">Blog</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/projects">Projects</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/video">Video</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link to="/about">About</Link></Breadcrumb.Item>
            </Breadcrumb>
          </nav>

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

// function Home()        { return <h2>Home</h2> }
// function About()       { return <h2>About</h2> }
// function Users()       { return <h2>Users</h2> }
// function Books()       { return <h2>Books</h2> }
// function Bestseller()  { return <h2>Best Seller</h2> }
// function Notes()       { return <h2>Notes</h2> }