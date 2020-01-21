import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false,
  
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">
              <h1>Contact List</h1>
            </NavbarBrand>
            <NavbarBrand>
              <button className="btn-info m-3" onClick={()=>this.props.gridListHandler(false)}>List</button>
            </NavbarBrand>
            <NavbarBrand>
            <button className="btn-info m-3" onClick={()=>this.props.gridListHandler(true)}> Grid</button>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Posts</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Contact us </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
