import React, { Component } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';
import { Route, Switch } from 'react-router-dom';
import './Blog.css';
import asyncComponent from '../../hoc/asyncComponent';
// import FullPost from '../../components/FullPost/FullPost';
const asyncFullPost = asyncComponent(() => {
    return import('../../components/FullPost/FullPost');
});
class Blog extends Component {
    state = {
        access: true
    }
    render () {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/posts/:id" component={ asyncFullPost } />
                    <Route path="/posts" component={ Posts } />
                    { this.state.access ? 
                        <Route path="/new-post" component={ NewPost } /> : null
                    }
                    <Route exact path="/" render={() => <h1>Home</h1>}  />
                    <Route exact render={() => <h1>Not Found!</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;