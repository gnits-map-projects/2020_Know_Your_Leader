import React, { Component } from 'react';
import {
    Form,
    Button,
    ButtonGroup,
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap'
import leader from './leader.png'

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    image: leader,
                    userid: '',
                    actionid: '',
                    username: '',
                    actionname: '',
                    description: '',
                    rating: ''
                },
                {
                    image: leader,
                    userid: '',
                    actionid: '',
                    username: '',
                    actionname: '',
                    description: '',
                    rating: ''
                },
                {
                    image: leader,
                    userid: '',
                    actionid: '',
                    username: '',
                    actionname: '',
                    description: '',
                    rating: ''
                },
                {
                    image: leader,
                    userid: '',
                    actionid: '',
                    username: '',
                    actionname: '',
                    description: '',
                    rating: ''
                },
                {
                    image: leader,
                    userid: '',
                    actionid: '',
                    username: '',
                    actionname: '',
                    description: '',
                    rating: ''
                },
                {
                    image: leader,
                    userid: '',
                    actionid: '',
                    username: '',
                    actionname: '',
                    description: '',
                    rating: ''
                },
                {
                    image: leader,
                    userid: '',
                    actionid: '',
                    username: '',
                    actionname: '',
                    description: '',
                    rating: ''
                }

            ],

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
                        <Card.Header>{post.username}</Card.Header>
                        <Card.Img variant="top" src={post.image} thumbnail />
                        <Card.Body>
                            <Card.Title>{post.actionname}</Card.Title>
                            <Card.Text>{post.description}</Card.Text>
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

export default Rating;

/*
<Form.Control as="select" onChange={this.handleRatingChange}>
                                    <option value='1'>1</option>
                                    <option value='2'>2</option>
                                    <option value='3'>3</option>
                                    <option value='4'>4</option>
                                    <option value='5'>5</option>
                                </Form.Control>
*/