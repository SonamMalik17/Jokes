import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link , useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate=useNavigate();
  const handleLogOut=()=>{
    localStorage.removeItem("authToken");
    navigate('/login');
  }
  return (
    <>
      <Navbar sticky="top" bg="primary" expand="lg" data-bs-theme="dark">
        <Container fluid={true} className="px-4">
        <img src="img/jokes_logo.png"
                     width="50" height="50" 
                     alt="Logo" /> 
          <Navbar.Brand className='mx-2' href="/">Jokes</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/">Home</Link>
            <Link className='nav-link' to="/about">About</Link>
          </Nav>
          {
            (localStorage.getItem("authToken"))?
            <Form className="d-flex">
            <Button variant="light text-danger" onClick={handleLogOut}>LogOut</Button>
          </Form>
          :
          <>
          <Form className="d-flex mx-2">
            <Button variant="light text-primary"><Link className='nav-link' to="/login">Login</Link></Button>
          </Form>
          <Form className="d-flex">
            <Button variant="light text-primary"><Link className='nav-link' to="/signup">SignUp</Link></Button>
          </Form>
          </>
          }
          </Navbar.Collapse>

        </Container>
      </Navbar>
    </>
  );
}

export default NavBar