"use strict";

var React = require('react');
var Router = require('react-router'); 
var AuthorForm = require('./authorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.unsaved && !confirm('Leave without saving?')) {
                // don't move to the new page
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            author: {
                id: '', 
                firstName: '',
                lastName: ''
            },
            errors: {},
            unsaved: false
        };
    },

    setAuthorState: function(event) {
        this.setState({unsaved: true});

        var field = event.target.name;
        var value = event.target.value;

        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};

        if(this.state.author.firstName.length < 1){
            formIsValid = false;
            this.state.errors.firstName = 'Must enter a value.';
        }
        if(this.state.author.lastName.length < 1){
            formIsValid = false;
            this.state.errors.lastName = 'Must enter a value.';
        }

        this.setState({errors: this.state.errors});
        return formIsValid;
    },

    saveAuthor: function(event) {
        event.preventDefault();

        if(!this.authorFormIsValid()) {
            console.log('invalid');
            return;
        }

        AuthorApi.saveAuthor(this.state.author);
        this.setState({unsaved: false});
        toastr.success('Author saved.');
        this.transitionTo('authors');
    },
    
    render: function () {
        return (
            <div>
                <h1>Manage Author</h1>
                <AuthorForm
                    author={this.state.author}
                    onChange={this.setAuthorState}
                    onSave={this.saveAuthor}
                    errors={this.state.errors}
                />
            </div>
        );
    }
});

module.exports = ManageAuthorPage;
  