import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Image
} from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            ESTRO</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/register">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar>

        <Image width="1250px" height="1150px" src="https://blog.opogo.com/hs-fs/hubfs/leader%20cartoon.jpg?width=2560&name=leader%20cartoon.jpg"
          alt="user pic" />
      </div >
    );
  }
}

export default App;



