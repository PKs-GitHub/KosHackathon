import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown,Form, FormControl, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from '../pages/Home';
import Investment from '../pages/Investment';
import InvestorPropensity from '../pages/InvestorPropensity';
import MBTI from '../pages/MBTI';
import Contents from './Contents';

export default class NavbarComp extends Component {
  render() {
    return (
      <Router>
      <div>
      <Navbar bg="koscom" variant={"dark"} expand="lg">

        <Navbar.Brand as ={Link} to={"/Home"}>Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as ={Link} to={"/Home"}>Home</Nav.Link>
          <Nav.Link as ={Link} to={"/Investment"}>주식 투자</Nav.Link>
          <Nav.Link as ={Link} to={"/MBTI"}>MBTI</Nav.Link>
          <Nav.Link as ={Link} to={"/InvestorPropensity"}>투자자성향</Nav.Link>
           {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
           <NavDropdown.Divider />
           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
           </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      </div>
      <div>
        <Switch>
          <Route path="/Home">
            <Contents />
          </Route>
          <Route path="/Investment">
            <Investment />
          </Route>
          <Route path="/InvestorPropensity">
            <InvestorPropensity />
          </Route>
          <Route path="/MBTI">
            <MBTI />
          </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}
