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
import Comment from './Comment.js'

const Post = ({ actionid, actionname, description, actionpath, email, actionrating, numberofusers, ratingvalue = 0, comment ="" ,onRate = f => f }) =>
    <div>
        <br />
        <Card style={{ width: '33rem' }}>
            <Card.Header>{email}</Card.Header>
            <Card.Img variant="top" src={actionpath} thumbnail="true" />
            <Card.Body>
                <Card.Title>{actionname}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Form>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Avg Rating</Form.Label>
                        <Col sm="10">
                            {actionrating + "  by  " + numberofusers + " users"}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row}>
                        <Form.Label column sm="2">Your Rating</Form.Label>
                        <Col sm="4">
                            <StarRating starsSelected={ratingvalue} onRate={onRate} />
                        </Col>
                    </Form.Group>
                </Form>
                <Comment comment={comment} actionid={actionid}/>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </div>

export default Post;