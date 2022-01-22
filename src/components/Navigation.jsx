import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import Logo from "../fakeml.png";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import Categorias from "../mocks/Categorias";

function Navigation() {
  return (
    <>
      <Navbar
        className="mb-5"
        style={{ background: "#FFE600" }}
        variant="light"
      >
        <Navbar.Brand as={NavLink} to="/">
          {" "}
          <img src={Logo} alt="logo" style={{ width: 150, marginTop: -7 }} />
        </Navbar.Brand>

        <Nav className="mr-auto">
          <NavDropdown title="Categorias" id="nav-dropdown">
            <Categorias />
          </NavDropdown>
        </Nav>
        <Link className="ml-sm-3" to={`/cart`}>
          {" "}
          <CartWidget />{" "}
        </Link>
      </Navbar>
    </>
  );
}

export default Navigation;
