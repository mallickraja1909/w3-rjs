import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
// import Home from './Home';

// import Form from './Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navy() {
  return (
    <Navbar collapseOnSelect expand="lg" navbar="transparent"  bg="bright" variant="bright">
      <Container className='nv-bg'>
        <Navbar.Brand href="#home"><h1>Burger House</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
           
          </Nav>
          <Nav>
            <Nav.Link to="hme">Home</Nav.Link>
            <Nav.Link eventKey={2} to="menu">
              Menu
            </Nav.Link>
            <Nav.Link href="#features">Our Story</Nav.Link>
            <Nav.Link href="/ContactForm">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navy;