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

var email

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []

    }
    this.handleUpload = this.handleUpload.bind(this)
    this.handleActions = this.handleActions.bind(this)
    this.handleRating = this.handleRating.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleUpload() {
    window.location.href = '/upload'
  }
  handleActions() {
    window.location.href = '/actions'
  }
  handleRating() {
    window.location.href = '/rating'
  }
  handleEdit() {
    window.location.href = '/edit'
  }

  componentDidMount() {
   

    email =  window.sessionStorage.getItem("username")
    
    const url = 'http://localhost:9000/actionprofile/'+email
   
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-origin', url);
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('POST', 'GET');

    fetch(url,{
        headers: headers,
        method: 'GET'

    })
    .then(response => response.json()) 
    .then(response => this.setState({ 'posts' : response})); 
         
}

  render() {
    const cardlist = this.state.posts.map(post => {
      return (

        <div key={post.actionid}>
          <br />
          <Card style={{ width: '20rem' }}>
            <Card.Header>{post.email}</Card.Header>
            <Card.Img variant="top" src={post.actionpath} thumbnail="true" />
            <Card.Body>
              <Card.Title>{post.actionname}</Card.Title>
              <Card.Text>{post.description}</Card.Text>
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
              <Image width="300px" height="300px" src="https://images-na.ssl-images-amazon.com/images/I/51zi1Kib-HL._SX466_.jpg"
                alt="user pic" rounded />
            </Col>
            <Col>
              <br />
              <br />
              <h2>User Name : {window.sessionStorage.getItem("username")}<br/></h2>
              
              <br/>
              <Button variant="danger" onClick={this.handleRating}>
                    View Rating
                    </Button>
                    <br/>
                    <br/>
                <Button variant="danger" onClick={this.handleEdit}>
                    Edit Profile
                    </Button>
            </Col>
          </Row>
          <br/>
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


