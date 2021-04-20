import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/users">Users</Link> </li>
            <li> <Link to="/books">Books</Link> </li>
            <li> <Link to="/bestseller">Best Seller</Link> </li>
            <li> <Link to="/reviews">Reviews</Link> </li>
            <Button>Bootstrap Imported Button</Button>
            <Alert variant="success">This is an alert</Alert>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/bestseller"><Bestseller /></Route>
          <Route path="/reviews"><Reviews /></Route>
          <Route path="/books"><Books /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/users"><Users /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>
    
  );
}

function Home()        { return <h2>Home</h2> }
function About()       { return <h2>About</h2> }
function Users()       { return <h2>Users</h2> }
function Books()       { return <h2>Books</h2> }
function Bestseller()  { return <h2>Best Seller</h2> }
function Reviews()     { return <h2>Reviews</h2> }