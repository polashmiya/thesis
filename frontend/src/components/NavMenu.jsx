import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import "../css/navmenu.css";

function NavMenu({ authSetter, isAuth }) {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Navbar
      className="navbar fixed-top "
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            navigate("/");
          }}
        >
          <img src={logo} alt="logo" style={{ width: "60px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {isAuth && (
              <NavDropdown
                style={{ fontWeight: "bold" }}
                title="Departments"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item onClick={(e) => navigate("/cse")}>
                  CSE
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => navigate("/eee")}>
                  EEE
                </NavDropdown.Item>
                <NavDropdown.Item onClick={(e) => navigate("/ce")}>
                  CE
                </NavDropdown.Item>
              </NavDropdown>
            )}

            {isAuth && (
              <Nav.Link
                style={{ fontWeight: "bold" }}
                onClick={(e) => {
                  navigate("/submission");
                }}
              >
                Submission
              </Nav.Link>
            )}
            {isAuth && (
              <Nav.Link
                style={{ fontWeight: "bold" }}
                onClick={(e) => navigate("/submissionList")}
              >
                Submission List
              </Nav.Link>
            )}
            {isAuth && (
              <Nav.Link
                style={{ fontWeight: "bold" }}
                onClick={(e) => {
                  navigate("/profile");
                }}
              >
                Profile
              </Nav.Link>
            )}

            {isAuth && (
              <Nav.Link
                style={{ fontWeight: "bold" }}
                onClick={(e) => {
                  navigate("/blogs");
                }}
              >
                Blogs
              </Nav.Link>
            )}
            <Nav.Link
              style={{ fontWeight: "bold" }}
              onClick={(e) => {
                navigate("/contact");
              }}
            >
              Contacts
            </Nav.Link>
            {!isAuth && (
              <>
                <Nav.Link
                  style={{ fontWeight: "bold" }}
                  onClick={(e) => {
                    navigate("/login");
                  }}
                >
                  Login
                </Nav.Link>
                <Nav.Link
                  style={{ fontWeight: "bold" }}
                  onClick={(e) => {
                    navigate("/signup");
                  }}
                >
                  Sign up
                </Nav.Link>
              </>
            )}
            {isAuth && user?.firstName === "Admin" && (
              <Nav.Link
                style={{ fontWeight: "bold" }}
                onClick={(e) => navigate("/users")}
              >
                Users
              </Nav.Link>
            )}

            {isAuth && (
              <>
                <Nav.Link
                  style={{ fontWeight: "bold" }}
                  onClick={(e) => {
                    navigate("/");
                    authSetter(false);
                  }}
                >
                  Logout
                </Nav.Link>
                <b
                  style={{
                    color: "white",
                    marginLeft: "200px",
                    marginTop: "10px",
                  }}
                >{`${user?.firstName} ${user?.lastName}`}</b>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
