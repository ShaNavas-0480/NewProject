import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaSignOutAlt, FaUser, FaUserCircle } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    navigate("/");
  };
  return (
    <div>
      <Navbar className="shadow" bg="light" expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav className="">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              <NavDropdown title={<FaUserCircle />} id="basic-nav-dropdown">
                {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item> */}
                <NavDropdown.Item onClick={handleLogoutClick}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
