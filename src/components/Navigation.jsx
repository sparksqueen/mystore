import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Logo from "../fakeml.png";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";
import CategoryContainer from "../containers/CategoryContainer";

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
            <CategoryContainer />
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
        <Link className="ml-sm-3" to={`/cart`}>
          {" "}
          <CartWidget />{" "}
        </Link>
      </Navbar>
    </>
  );
}

export default Navigation;
