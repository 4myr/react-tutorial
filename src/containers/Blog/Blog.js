import React, { Component } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import { Route } from 'react-router-dom';
import './Blog.css';


class Blog extends Component {
    
    render () {
        return (
            <div>
                <Header />
                <Route path="/" render={() => <h1>Home</h1>} exact />
                <Route path="/posts" component={ Posts } />
                <Route path="/new-post" component={ NewPost } />
            </div>
        );
    }
}

export default Blog;