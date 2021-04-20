import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { NavBar } from '../components/NavBar'
import Home from '../components/Home';
import BooksList from '../components/BooksList';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Blog from '../containers/Blog';
import Projects from '../containers/Projects';
import Video from '../containers/Video';
import About from '../components/About'

export default function App() {
  return (
    <React.Fragment>
    <Router>
      <div>
        <nav>
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/books">Books</Link> </li>
            <li> <Link to="/login">Login</Link> </li>
            <li> <Link to="/signup">Signup</Link> </li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li> <Link to="/projects">Projects</Link> </li>
            <li> <Link to="/video">Video</Link> </li>
            <li> <Link to="/about">About</Link> </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/books"><BooksList /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/blog"><Blog /></Route>
          <Route path="/projects"><Projects /></Route>
          <Route path="/video"><Video /></Route>
          <Route path="/about"><About /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </div>
    </Router>

    <header className="App-header">
      <Container fluid>
        <Form>
          <Row>
            <Col md>
              <Form.Group controlId="forEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="example@email.com" />
                <Form.Text>
                  Your email will be kept confidential!
                </Form.Text>
              </Form.Group>
            </Col>

            <Col md>
              <Form.Group controlId="forPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="email" placeholder="password" />
              <Form.Text>
                Your email will be kept confidential!
              </Form.Text>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">Login</Button>
        </Form>

        <Card className="mb-3" style={{ color: "#000"}}>
          <Card.Img />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>This is a card text</Card.Text>
          </Card.Body>
        </Card>
      
        <Breadcrumb>
          <Breadcrumb.Item>Tab 1</Breadcrumb.Item>
          <Breadcrumb.Item>Tab 2</Breadcrumb.Item>
          <Breadcrumb.Item active>Tavb 3</Breadcrumb.Item>
        </Breadcrumb>
        <Button variant="primary">Bootstrap Imported Button</Button>
        <Alert variant="success">This is an alert</Alert>
      </Container>
      </header>
    </React.Fragment>
  );
}

// function Home()        { return <h2>Home</h2> }
// function About()       { return <h2>About</h2> }
// function Users()       { return <h2>Users</h2> }
// function Books()       { return <h2>Books</h2> }
// function Bestseller()  { return <h2>Best Seller</h2> }
// function Notes()       { return <h2>Notes</h2> }