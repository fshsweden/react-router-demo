import { Component } from 'react';
import { Outlet, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Provider, connect } from 'react-redux';

class App extends Component {

  render() {
    return (

        <div>

          { /* React Bootstrap Navigation */ }
          <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/page1">Page1</NavDropdown.Item>
                    <NavDropdown.Item href="/page2">Page2</NavDropdown.Item>
                    <NavDropdown.Item href="/page3">Page3</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/about">About</NavDropdown.Item>
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
// export default App;

