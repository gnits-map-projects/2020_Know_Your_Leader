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
  ButtonToolbar,
  Image,
  Container,
  Row,
  Col,
  Card,
  CardColumns
} from 'react-bootstrap'
import Header from './Header';
import leader from './leader.png'


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        },
        {
          image: leader,
          name: "University name 1",
          header: "location"
        }
      ]

    }
    this.handleUpload = this.handleUpload.bind(this)
    this.handleActions = this.handleActions.bind(this)
  }
  handleUpload(){
    window.location.href = '/upload'
  }
  handleActions(){
    window.location.href = '/actions'
  }
  
  render() {
    const cardlist = this.state.posts.map(post => {
      return (

        <div>
          <br />
          <Card style={{ width: '20rem' }}>
            <Card.Header>{post.header}</Card.Header>
            <Card.Img variant="top" src={post.image} thumbnail />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>Text</Card.Text>
            </Card.Body>
            <Card.Footer>

              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>

        </div>

      )
    })
    return (
      <div>
        <Header />
        <Container>
          <Row>
            <Col>
              <Image width="500px" height="500px" src="https://images-na.ssl-images-amazon.com/images/I/51zi1Kib-HL._SX466_.jpg"
                alt="user pic" rounded />
            </Col>
            <Col>
              <br />
              <br />
              <h1>User Name</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={8}>
              <Row>
                
                <Col>
                  <Button variant="danger" onClick={this.handleUpload}>
                    Upload Your Actions
                    </Button>
                </Col>
              </Row>
            </Col>
            <Col sm={2}>
              <Button variant="danger" onClick={this.handleActions}>
                View Actions
              </Button>
            </Col>
          </Row>
          <hr />
          <br />
          <Row>
            <CardColumns>
              {cardlist}
            </CardColumns>
          </Row>

        </Container>

      </div>
    );
  }
}

export default Profile;


