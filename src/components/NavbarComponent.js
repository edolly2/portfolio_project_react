import { BiLogIn, BiLogOut } from "react-icons/bi";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from "reactstrap";

import Logo from "./bee.png";
import React from "react";
import { useState } from "react";

const NavbarComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function LoggedOn() {
    if (!isLoggedIn) {
      return (
        <Nav className="Nav">
          <NavItem className="NavItem">
            <NavLink className="NavLink">Register</NavLink>
          </NavItem>
          <NavItem className="NavItem">
            <div className="NavSlash">{" / "}</div>
            <NavLink className="NavLink">
              Login <BiLogIn />
            </NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav className="Nav">
          <NavItem className="NavItem">
            <NavLink className="NavLink">Account</NavLink>
          </NavItem>
          <div className="NavSlash">{" / "}</div>
          <NavItem className="NavItem">
            <NavLink className="NavLink">
              Logout <BiLogOut />
            </NavLink>
          </NavItem>
        </Nav>
      );
    }
  }

  return (
    <div>
      <Navbar color="light" expand="md" sticky="top" light>
        <NavbarBrand href="/">
          <img className="logo" src={Logo} alt="Logo" />
          {/* BeeBilingual */}
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto Nav" navbar>
            <NavItem className="NavItem" active>
              <NavLink className="NavLink" href="#">
                Home
              </NavLink>
            </NavItem>
            <NavItem className="NavItem">
              <NavLink className="NavLink" href="#">
                About
              </NavLink>
            </NavItem>
            <NavItem className="NavItem">
              <NavLink className="NavLink" href="#">
                Pricing
              </NavLink>
            </NavItem>
            <NavItem className="NavItem">
              <NavLink className="NavLink" href="#">
                Contact
              </NavLink>
            </NavItem>
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle caret nav>
                Courses
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Spanish</DropdownItem>
                <DropdownItem>English</DropdownItem>
                <DropdownItem disabled>Deutsch - coming soon</DropdownItem>
                <DropdownItem disabled>Français - coming soon</DropdownItem>
                <DropdownItem disabled>Pусский - coming soon</DropdownItem>
                <DropdownItem disabled>中国人 - coming soon</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Exit</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <LoggedOn />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
