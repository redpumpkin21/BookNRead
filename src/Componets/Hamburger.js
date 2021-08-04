import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Hamburger = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar  dark expand='sm' id = "navy">
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <NavbarBrand href="/" className="mr-auto" id= 'align'>Book and Read</NavbarBrand>
        
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/books">Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Trending">Trending</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Upcoming">Upcoming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Kids">Kids</NavLink>
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