import React, { Component } from 'react';
import PostContainer from './PostContainer';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
            <div className="PostsPage">
                <PostContainer />
            </div>
        );
    }
}

export default PostsPage;