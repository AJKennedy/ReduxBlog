import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component{
    renderField(field){
        const {meta : {touched, error } } = field;
        const className = `form-group ${touched && error ? 'has-danger' : ''}`

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input
                    type="text"
                    className="form-control"
                    {...field.input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>
            </div>
        )
    }
    onSubmit(values){
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div>
                <div>
                    <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                        <Field 
                            name="title"
                            label="Title for Post"
                            component={this.renderField}
                        />
                        <Field
                            name="categories"
                            label="Categories"
                            component={this.renderField}
                        />
                        <Field 
                            name="content"
                            label="Post Content"
                            component={this.renderField}
                        />

                        <button type="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </form>
                </div> 
            </div>       
        );
    }
}

function validate(values){
    const errors = {};

    if(!values.title)
    {
        errors.title = "Enter a title!";
    }
    if(!values.categories)
    {
        errors.categories = "Enter categories!";
    }
    if(!values.content)
    {
        errors.content = "Enter content!";
    }

    //if errors is empty, form is fine to submit
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, {createPost})(PostsNew)
);