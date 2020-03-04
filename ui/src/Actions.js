import React, { Component } from 'react';
import Header from './Header.js'
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
  ButtonGroup,
  Container,
  Row,
  Col,
  Carousel,
  Image,
  CardDeck,
  CardColumns,
  Card,
  CardGroup,
  DropdownButton,
  Dropdown
} from 'react-bootstrap'
import leader from './leader.png'

var email

class Actions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      filter: ''
    }

    this.handleRatingChange = this.handleRatingChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleRatingChange = event => {
    this.setState({
      rating: event.target.value
    });
    console.log(this.state.posts.rating);
  }
  handleFilterChange = event => {
    this.setState({
      filter: event.target.value
    });
    console.log(this.state.filter);
  }

  componentDidMount() {

    email = window.sessionStorage.getItem("username")


    const url = 'http://localhost:9000/actionprofile/' + email

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('POST', 'GET');

    fetch(url, {
      headers: headers,
      method: 'GET'

    })
      .then(response => response.json())
      .then(response => this.setState({ 'posts': response }));

  }


  render() {
    const cardlist = this.state.posts.map(post => {
      return (

        <div key={post.actionid}>
          <br />
          <Card style={{ width: '33rem' }}>
            <Card.Header>{post.email}</Card.Header>
            <Card.Img variant="top" src={post.actionpath} thumbnail />
            <Card.Body>
              <Card.Title>{post.actionname}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm="2">Rating</Form.Label>
                  <Col sm="10">
                    {post.actionrating + "  by  " + post.numberofusers}
                  </Col>
                </Form.Group>
              </Form>
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
            <Col md={{ span: 3, offset: 1 }}>
              {cardlist}
            </Col>

            <Col md={{ span: 3, offset: 3 }}>
              <div>
                <br />
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control as="select" value={this.state.filter} onChange={this.handleFilterChange}>
                    <option>Sort By...</option>
                    <option value="recent">Recent Uploads</option>
                    <option value="locality">Locality</option>
                    <option value="top-rated">Top Rated Actions</option>
                  </Form.Control>
                </Form.Group>
                <br />
                Maps Component
                    </div>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Actions;
