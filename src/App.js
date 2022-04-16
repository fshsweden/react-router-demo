import { Component } from 'react';
import { Outlet} from "react-router-dom";
import {
  HashRouter,
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Provider, connect } from 'react-redux';

class App extends Component {

  render() {
    return (

        <div>

          { /* React Bootstrap Navigation */ 
          
            /* NOTE: It's REALLY REALLY IMPORTANT 
              that you use

              as={Link} in your Nav-links!

              Otherwise there will be a page reload, and you will loose your
              redux state!
            */
          }
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/page1">Page1</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/page2">Page2</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/page3">Page3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <h4>From https://github.com/remix-run/react-router/blob/main/docs/getting-started/tutorial.md </h4>
          <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem"
            }}
          >

          </nav>

          <Outlet />
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state
  };
};
export default connect(mapStateToProps)(App);


