import React, { Component }  from 'react';
import Post from './Post.js'

const PostList = ({ posts=[], onRate=f=>f }) => 
     <div> { 
              posts.map(post =>
                        <Post key={post.actionid} {...post}
                        onRate={(ratingvalue) => onRate(post.actionid, ratingvalue)} />
                    )
    }
    </div>

export default PostList;