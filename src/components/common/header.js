import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

const header = () => {
  return (

      <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" className="navbar-brand">Dataphi Labs</IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <li>
                  <Link to="/patients" activeClassName="active">Patients</Link>
              </li>
              <li>
                <Link to="/patient/new" activeClassName="active">New Patient</Link>
              </li>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

  );
};

export default header;
