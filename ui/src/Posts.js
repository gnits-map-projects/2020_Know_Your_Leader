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
    Image,
    CardDeck,
    CardColumns,
    Card,
    CardGroup
} from 'react-bootstrap'
//import StarRatings from './react-star-ratings';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                },
                {
                    image: "https://cdn2.vectorstock.com/i/1000x1000/24/06/leader-vector-1662406.jpg",
                    name: "University name 1",
                    header: "location"
                }
            ]

        }

    }
    /*changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
      }
      <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        />
      */
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

                    <Col  md={{ span: 3, offset: 3 }}>
                    <div>
                        <br/>
                    Maps Component
                    </div>
                       
                  </Col>
                </Row>


            </Container>
        );
    }
}


export default Posts;
