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
    ButtonGroup,
    Container,
    Row,
    Col,
    Carousel,
    Image,
    CardDeck,
    CardColumns,
    Card,
    CardGroup
} from 'react-bootstrap'
import leader from './leader.png'

class Posts extends Component {
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
            ],
            rating: ''
        }

        this.handleRatingChange = this.handleRatingChange.bind(this)
    }

    handleRatingChange = event => {
        this.setState({
            rating: event.target.value
        });
        console.log(this.state.rating);
    }
    render() {
        const cardlist = this.state.posts.map(post => {
            return (

                <div>
                    <br />
                    <Card style={{ width: '33rem' }}>
                        <Card.Header>{post.header}</Card.Header>
                        <Card.Img variant="top" src={post.image} thumbnail />
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>Text</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Form>
                                <Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm={2}>Rating</Form.Label>
                                    <Col sm={10}>
                                    <ButtonGroup className="mr-2" aria-label="First group">
                                        <Button variant="warning" onClick={this.handleRatingChange} value='1'>1</Button>
                                        <Button variant="warning" onClick={this.handleRatingChange} value='2'>2</Button>
                                        <Button variant="warning" onClick={this.handleRatingChange} value='3'>3</Button>
                                        <Button variant="warning" onClick={this.handleRatingChange} value='4'>4</Button>
                                        <Button variant="warning" onClick={this.handleRatingChange} value='5'>5</Button>
                                    </ButtonGroup>
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
            <Container>
                <Row>
                    <Col md={{ span: 3, offset: 1 }}>
                        {cardlist}
                    </Col>

                    <Col md={{ span: 3, offset: 3 }}>
                        <div>
                            <br />
                            Maps Component
                    </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Posts;

/*
<Form.Control as="select" onChange={this.handleRatingChange}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Form.Control>
*/