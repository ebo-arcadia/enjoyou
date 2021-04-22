import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import Logo from '../assets/logo.png';


const NavigationBar = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark" fixed="top" style={{position: "sticky"}}>
        <Navbar.Brand href="home"><img src={Logo} style={{width: 50, height: 45}} className="logo" alt="logo"/>EnjoYou!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="books">Books</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
            <Nav.Link href="signup">Signup</Nav.Link>
            <Nav.Link href="blog">Blog</Nav.Link>
            <Nav.Link href="projects">Projects</Nav.Link>
            <Nav.Link href="video">Video</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="books">Books</NavDropdown.Item>
              <NavDropdown.Item href="login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;
