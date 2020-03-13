import React, { Component, useState } from "react";
import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'

function Comment({comment='',actionid}) {
    //const [comment, setComment] = useState('');

    const handleCommentChange = event => {
        comment = event.target.value;
    }

    const postComment = () => {
        var body = {
            actionid: actionid,
            email: window.sessionStorage.getItem("username"),
            comment: comment
        }
        console.log(body)
        const url = "http://localhost:9000/comment";
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

    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Col>
                        <Form.Control placeholder="comment here..." name="comment" as="textarea" rows="2" value={comment} onChange={handleCommentChange} />
                    </Col>
                    <Col>
                        <Button variant="primary" onClick={postComment}>Post</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
}


export default Comment;