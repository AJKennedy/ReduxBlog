import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostsNew extends Component{
    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/">
                            Go To Index
                    </Link>
                </div>
                <div>
                    PostsNew!
                </div> 
            </div>       
        );
    }
}

export default PostsNew;