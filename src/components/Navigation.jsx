import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Logo from '../store.png';


function Navigation() {
  return <>

  <Navbar bg="secondary" variant="dark">
    <Navbar.Brand href="/"> <img src={Logo} href='#' style={{width:30, marginTop: -7}}/>MiTienda </Navbar.Brand>
  
    <Nav className="mr-auto">
   
      <NavDropdown title="Categorias" id="nav-dropdown">
        <NavDropdown.Item href='/categoria1'>Categoria 1</NavDropdown.Item>
        <NavDropdown.Item href='/categoria2'>Categoria 2</NavDropdown.Item>
        <NavDropdown.Item href='/categoria3'>Categoria 3</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  
</>
}

export default Navigation;