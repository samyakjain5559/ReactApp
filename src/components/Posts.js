import React, { Component } from 'react';
import Listing from './Listing';
import './Post.css';
 
class Posts extends Component {
    state = {  }
    render() { 
        return ( 
            <form className="col-md-10">
                <Listing 
                    posts={this.props.posts} 
                />
            </form>
         );
    }
}
 
export default Posts;