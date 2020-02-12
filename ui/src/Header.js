import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
  Image
} from 'react-bootstrap'

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">
              <img
                alt=""
                src="https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              ESTRO</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="dark">{<Image width="40px" height="40px" src="https://cdn1.iconfinder.com/data/icons/mobile-apps-settings-ii-white-with-black-backgroun/2048/1477_-_Search-512.png"
                alt="user pic"
              />}</Button>
            </Form>

            <NavDropdown alignRight title={<Image width="50px" height="50px" src="https://images-na.ssl-images-amazon.com/images/I/51zi1Kib-HL._SX466_.jpg"
              alt="user pic" roundedCircle
            />} id="collasible-nav-dropdown" >
              <NavDropdown.Item href="/events">Events</NavDropdown.Item>
              <NavDropdown.Item href="/analytics">Analytics</NavDropdown.Item>
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
              <NavDropdown.Item href="/help">Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
            </NavDropdown>

          </Navbar>
    );
  }
}

export default Header;




