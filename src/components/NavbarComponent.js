import { BiLogIn, BiLogOut } from "react-icons/bi";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
  NavLink as NavigationLink,
  UncontrolledDropdown,
} from "reactstrap";

import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";

// let dropdownIsActive = "";
const NavbarComponent = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [dropdownActive, setDropdownActive] = useState(false);

  function LoggedOn() {
    if (!isLoggedIn) {
      return (
        <Nav className="Nav">
          <NavItem className="NavItem">
            <NavigationLink className="NavigationLink">Register</NavigationLink>
          </NavItem>
          <NavItem className="NavItem">
            <div className="NavSlash">{" / "}</div>
            <NavigationLink className="NavigationLink">
              Login <BiLogIn />
            </NavigationLink>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav className="Nav">
          <NavItem className="NavItem">
            <NavigationLink className="NavigationLink">Account</NavigationLink>
          </NavItem>
          <div className="NavSlash">{" / "}</div>
          <NavItem className="NavItem">
            <NavigationLink className="NavigationLink">
              Logout <BiLogOut />
            </NavigationLink>
          </NavItem>
        </Nav>
      );
    }
  }

  return (
    <div>
      <Navbar color="light" expand="md" sticky="top" light>
        <NavbarToggler className="ms-auto" onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto Nav" navbar>
            {/* ---------------- */}
            {/* ---------------- */}
            <NavItem className="NavItem">
              <NavigationLink className="NavigationLink">
                <NavLink className="NavLink" to="/">
                  Home
                </NavLink>
              </NavigationLink>
            </NavItem>
            {/* ---------------- */}
            <NavItem className="NavItem">
              <NavigationLink className="NavigationLink">
                <NavLink className="NavLink" to="/about">
                  About
                </NavLink>
              </NavigationLink>
            </NavItem>
            {/* ---------------- */}
            <NavItem className="NavItem">
              <NavigationLink className="NavigationLink">
                <NavLink className="NavLink" to="/pricing">
                  Pricing
                </NavLink>
              </NavigationLink>
            </NavItem>
            {/* ---------------- */}
            <NavItem className="NavItem">
              <NavigationLink className="NavigationLink">
                <NavLink className="NavLink" to="/contact">
                  Contact
                </NavLink>
              </NavigationLink>
            </NavItem>
            {/* ---------------- */}
            {/* ---------------- */}
            <UncontrolledDropdown inNavbar nav>
              <DropdownToggle
                caret
                nav
                // onClick={() => {
                //   setDropdownActive(!dropdownActive);
                //   if (dropdownActive) {
                //     dropdownIsActive = "active";
                //   } else {
                //     dropdownIsActive = "";
                //   }
                // }}
                // className={dropdownIsActive}
              >
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
