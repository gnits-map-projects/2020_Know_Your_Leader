import React, { Component } from 'react';
import {
    Form,
    Button,
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap'
import StarRating from './StarRating.js'
import PostList from './PostList.js'
import Locations from './Locations.js'

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            filter: 'none'
        }
        this.ratePost = this.ratePost.bind(this)
        this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleFilterSubmit = this.handleFilterSubmit.bind(this)
    }

    /*handleRatingChange(event) {
        this.setState({
            rating: event.target.value
        });
        console.log(this.state.rating);
    }*/
    handleFilterChange = event => {
        this.setState({
            filter: event.target.value
        });
    }

    ratePost(actionid, ratingvalue, comment) {
        const posts = this.state.posts.map(post =>
            (post.actionid !== actionid) ?
                post :
                {
                    ...post,
                    ratingvalue,
                    comment
                }
        )
        this.setState({ posts })
        var body = {
            actionid: actionid,
            email: window.sessionStorage.getItem("username"),
            ratingvalue: ratingvalue
        }
        console.log(body)
        const url = "http://localhost:9000/rating";
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Access-Control-Allow-origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('POST', 'GET');
        fetch(url, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify(body)
        })
            .then(response => response.json())
            .then(contents => {
                console.log(contents);
            })
            .catch(() => console.log("can't access" + url + "response. "))
    }

   


    handleFilterSubmit(event) {
        event.preventDefault();

        const url = 'http://localhost:9000/actionsf/' + window.sessionStorage.getItem("username") + '/' + this.state.filter
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

        const url = 'http://localhost:9000/actions/' + window.sessionStorage.getItem("username")
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
        const { ratePost } = this
        
        const { posts } = this.state
        return (
            <Container>
                <Row>
                    <Col md={{ span: 3, offset: 1 }}>
                        <PostList posts={posts}
                            onRate={ratePost}/>
                    </Col>
                    <Col md={{ span: 5, offset:3 }}>
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
                            <Locations />
                    </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export const getPosts = () => this.state.posts

export default Posts;
