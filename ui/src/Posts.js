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
    CardGroup,
    DropdownButton,
    Dropdown
} from 'react-bootstrap'
import leader from './leader.png'
import './rating.css'



class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filter: 'none',
            rating: 0
        }

        this.handleRatingChange = this.handleRatingChange.bind(this)
        this.handleRatingSubmit = this.handleRatingSubmit.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
        
    }

    handleRatingChange(event) {
        this.setState({
            rating: event.target.value
        });
        console.log(this.state.rating);
    }
    handleFilterChange = event => {
        this.setState({
            filter: event.target.value
        });
    }

   

    handleRatingSubmit(event, aid) {
        var body = {
            actionid: aid,
            actionrating: this.state.rate
        }
        console.log(body)
        const url = "http://localhost:9000/ratingchange";
            let headers = new Headers();

            headers.append('Content-Type', 'application/json');
            headers.append('Accept', 'application/json');
            headers.append('Access-Control-Allow-origin', url);
            headers.append('Access-Control-Allow-Credentials', 'true');

            headers.append('POST', 'GET');
            fetch(url, {
                headers: headers,
                method: 'POST',
                body : JSON.stringify(body)
            })
            .then(response => response.json())
            .then(contents => {
              console.log(contents);
            })
            .catch(() => console.log("can't access" + url + "response. "))
        event.stopPropagation()

    }

    handleFilterSubmit(event) {
        event.preventDefault();

        const url = 'http://localhost:9000/actionsf/' + this.state.filter
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


    componentDidMount() {

        const url = 'http://localhost:9000/actions'
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
                        <Card.Img variant="top" src={post.actionpath} thumbnail="true" />
                        <Card.Body>
                            <Card.Title>{post.actionname}</Card.Title>
                            <Card.Text>{post.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Avg Rating</Form.Label>
                                    <Col sm="10">
                                        {post.actionrating + "  by  " + post.numberofusers+" users"}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column sm="2">Your Rating</Form.Label>
                                    <Col sm="4">
                                    <div className="rating" onClick={this.handleRatingChange}>
                                        <label>
                                            <input type="radio" name="stars" value="1" />
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="2" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="3" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="4" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                        <label>
                                            <input type="radio" name="stars" value="5" />
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                            <span className="icon">★</span>
                                        </label>
                                    </div>
                                    </Col>                                    
                                    <Col sm="4">
                                        <Button type="submit" onClick={(e) => this.handleRatingSubmit(e, post.actionid)}>Rate</Button>
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
                            <Form>
                                <Row>
                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Control as="select" value={this.state.filter} onChange={this.handleFilterChange}>
                                            <option>Sort By...</option>
                                            <option value="recent">Recent Uploads</option>
                                            <option value="locality">Locality</option>
                                            <option value="top-rated">Top Rated Actions</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Button type="submit" onClick={this.handleFilterSubmit}>Submit</Button>
                                    </Form.Group>
                                </Row>
                            </Form>
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
<Form.Group as={Row} controlId="exampleForm.ControlSelect1">
                                    <Form.Label column sm={2}>Rating</Form.Label>
                                    <Col sm={5}>
                                        <Form.Control as="select" name='rating' value={post.actionrating} onChange={this.handleRatingChange}>
                                            <option>...</option>
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>


<Button type="submit" onClick={this.handleRatingSubmit(post.actionid)}>Rate</Button>

    <Form.Control type="number" name="rating" min="1" max="5" value={this.state.rating} onChange={this.handleRatingChange} />

*/
