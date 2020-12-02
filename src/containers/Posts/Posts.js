import React, { Component } from 'react';

import axios from '../../axios';
import Post from '../../components/Post/Post';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }
    componentDidMount() {
        axios.get('posts').then(response => {
            const posts = response.data.slice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: 'AMYR'
                }
            })
            this.setState({posts: updatedPosts});
        }).catch(error => {
            this.setState({error: true});
        });
    }
    postSelectedHandler = (id) => {
        this.props.history.push("/posts/" + id);
        // this.setState({selectedPostId: id});
    }
    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link key={post.id} to={ "/" + post.id }>
                    <Post
                    key={post.id}
                    clicked={() => this.postSelectedHandler(post.id)}
                    title={post.title}
                    author={post.author} />
                    // </Link>
                );
            });
        }
        return (
            <div>
                <section className="Posts">
                    { posts }
                </section>
            </div>
        );
    }
}

export default Posts;