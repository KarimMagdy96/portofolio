import React from 'react'
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, NavLink } from 'react-router-dom';
export default function MYNav() {
    function scroll() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  return (
    <>
      {["xxl"].map((expand) => (
        <Navbar
          key={expand}
          
          expand={expand}
          className="mb-0 fixed-top mt-0 nav"
        >
          <Container fluid className="px-3">
            <Navbar.Brand href="#" className="ps-3">
              Karim.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end  flex-grow-1 pe-0 ">
                  <NavLink
                    to="home"
                    className="px-3 text-decoration-none  btn social-btn  text-dark"
                    onClick={scroll}
                  >
                    Home
                  </NavLink>
                  <a
                    href="#mywork"
                    className="px-3 text-decoration-none btn social-btn  text-dark"
                  >
                    Work
                  </a>
                  <a
                    href="#about"
                    className="px-3 text-decoration-none btn social-btn  text-dark"
                  >
                    About
                  </a>
                  <NavLink
                    to="resume"
                    className="px-3 text-decoration-none btn social-btn  text-dark"
                  >
                    Resume
                  </NavLink>
                  <a
                    href="mailto:karimmagdy096@gmail.com"
                    target="_balnk"
                    className="px-3 text-decoration-none btn social-btn  text-dark"
                  >
                    Contact
                  </a>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
