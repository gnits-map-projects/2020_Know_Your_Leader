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
  Container,
  Row,
  Col,
  Carousel,
  Image
} from 'react-bootstrap'




class SideBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      
        
              <Navbar bg="light">
                        <Nav defaultActiveKey="/" className="flex-column">
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav>
                </Navbar>

       

         




    );
  }
}

export default SideBar;




