import React, { Component } from 'react';
import Post from './Post.js'

const PostList = ({ posts = [], onRate = f => f, onComment = f => f }) =>
    <div> {
        posts.map(post =>
            <Post key={post.actionid} {...post}
                onRate={(ratingvalue) => onRate(post.actionid, ratingvalue)}
                onComment={(comment) => onComment(post.actionid, comment)} />
        )
    }
    </div>

export default PostList;