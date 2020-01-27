import React, { Component } from 'react';
import './Post.css';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
 
class Post extends Component {
 
 
    render() {
        const {title, body, category, datestamp} = this.props.info;
 
        return ( 
            <Paper className="post">
            <p className="post_title" cols="10">
                <b><span className='post-preview'>
                    {title.length > 25 ? `${title.substr(0, 25)}...` : title}
                </span></b>
            </p>
            <Divider light />
                <p className="post_body">
                    <span className='post-preview'>
                        {body.length > 300 ? `${body.substr(0, 300)}...` : body}
                    </span>
                </p>
                <Divider light />
                <p className="post_category"><b>{category}</b></p>
                <Divider light />
                <p className="post_datestamp"><b>{moment(datestamp).fromNow()}</b></p>                
                    <div className="post_button">
                        <ul className="buttons">
                        </ul>
                    </div>                   
            </Paper>
         );
    }
}
export default Post;