import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import styled from 'styled-components';
import {ButtonContainer} from './Button';
import '../App.css';
//import {Button, Nav, NavItem, NavDropDown, MenuItem} from 'react-bootstrap';



export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark bg-dark px-sm-40">

        <div className="container-fluid">
         <ul className="navbar-nav align-items-center mr-auto p-2">
          <li className="nav-item ml-5">
            <Link to="/" className="navbar-brand text-danger my-2 ml-5">
              BONFIRE
            </Link>
          </li>
            <Link to="/" className="nav-item nav-link">
                HOME
            </Link>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                MEN
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Shirt</a>
                      <a className="dropdown-item" href="#">T-shirt</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">...Many More</a>
                  </div>
          </li>
          <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                WOMEN
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#">Indian Wear</a>
                      <a className="dropdown-item" href="#">Western Wear</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#">...Many More</a>
                  </div>
          </li>
            <Link to="/" className="nav-link">
                LOOKBOOK
            </Link>
            <Link to="/" className="nav-link">
                ABOUT
            </Link>
      </ul>
      
        <Link to="./cart" className="ml-auto">
          <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
            My Cart
          </ButtonContainer>
        </Link>
        
        </div>
        
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
color:var(--mainWhite)!important;
font-size:1.3rem;
text-transform: capitalize;
}`