import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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
            <Nav.Link href="movies">Movies</Nav.Link>
            <Nav.Link href="video">Video</Nav.Link>
            <Nav.Link href="saved">Saved</Nav.Link>
            <NavDropdown title="more" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="books">Books</NavDropdown.Item>
              <NavDropdown.Item href="video">Video</NavDropdown.Item>
              <NavDropdown.Item href="movies">Movies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="more">More</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavigationBar;
