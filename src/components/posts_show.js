import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends Component {
    componentDidMount() {
        if (!this.props.post)
        {
            const {id} = this.props.match.params;
            this.props.fetchPost(id);
        }       
    }

    render() {
        const { post } = this.props;

        if(!post){
            return <div>Loading...</div>
        }

        return  (
            <div>
                <div className="text-xs-right">
                    <Link to="/" className="btn btn-primary">Back To Index</Link>
                    <button className="btn btn-danger"
                    onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                </div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        );
    }

    onDeleteClick(){
        const {id} = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }
}

function mapStateToProps({ posts }, ownProps){
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostShow);