import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/large_wtppl.jpg";
// import Button from "react-bootstrap"
import { AuthContext } from "../authContext/AuthContext";
import { logout } from "../authContext/AuthActions";
import { useContext } from "react";

export default function NavScroll() {
  const { user, dispatch } = useContext(AuthContext);
  // const handleSignOut = () => {
  //   fetch("http://localhost:3001/api/v1/auth/logout", {
  //     method: "POST",
  //     credentials: "include",
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         window.location.href = "/login";
  //       } else {
  //         throw new Error("Sign out failed!");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  return (
    <>
      <div>
        <Navbar className="navbar">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              We The People
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contributors">
                Contributors
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                Create Project
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            {user ? (
              <div>
                <NavDropdown
                  title=<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-person-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z" />
                  </svg>
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item href="/userProfile">
                    <Nav.Link as={Link} to="/userProfile">
                      My Profile
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>
                    <Nav.Link as={Link} to="/myProjects">
                      My Projects
                    </Nav.Link>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => dispatch(logout())}
                    // onClick={handleSignOut}
                  >
                    <Button variant="outline-danger">Sign Out</Button>
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            ) : (
              <Nav.Link as={Link} to="/login">
                <Button variant="outline-info">Login</Button>
              </Nav.Link>
            )}
          </Container>
        </Navbar>
      </div>
    </>
  );
}
