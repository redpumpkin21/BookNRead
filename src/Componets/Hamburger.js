import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'reactstrap'; 

const Hamburger = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar  dark expand='sm'>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto">Book and Read</NavbarBrand>
        
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="">Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Trending</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Upcoming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Kids</NavLink>
            </NavItem>
             {/* <NavItem>
              <NavLink href="">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>  */}
          </Nav> 
        </Collapse>
      </Navbar>
    </div>
  );
 }

export default Hamburger