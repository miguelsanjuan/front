import React, { Component } from 'react';
import { UncontrolledCollapse, Collapse, Nav, Navbar, 
  NavbarBrand, NavbarToggler, NavItem, NavLink,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import config from '../static/config';
import Headroom from "headroom.js";

class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false};
    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick() {
    localStorage.setItem('status', false);
    this.props.history.push('/cart');
  }

  render() {
    let LOGEADO = null;
    let status = localStorage.getItem('status');

    let OPTIONS = <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      Options
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem tag={Link} to={"/cart"}>
        Carrito
      </DropdownItem>
      <DropdownItem tag={Link} to={"/orders"}>
        Pedidos
      </DropdownItem>
      <DropdownItem tag={Link} to={"/catalog"}>
        Catálogo
      </DropdownItem>
      <DropdownItem tag={Link} to={"/notifications"}>
        Notificaciones
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag={Link} to={"/profile-page"}>
        Perfil
      </DropdownItem>
      <DropdownItem onClick={this.handleClick} tag={Link} to={"/"}>
        Salir
      </DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>;
    status == 'true' ? LOGEADO = OPTIONS : LOGEADO = <div></div>;
    return(
    <Navbar color="dark" dark expand="md" id="navbar-main">
      <NavbarBrand href={"/"}>Sellnow</NavbarBrand>
      <NavbarToggler onClick={this.toggle}/>
      <Collapse isOpen={this.state.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink
              href={"/sign-in"}>Iniciar</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={"/sign-up"}>Registrarse</NavLink>
          </NavItem>
          {LOGEADO}
        </Nav>
      </Collapse>
    </Navbar>);
  }
}

export default withRouter(AppNavbar);