"use strict";

var React = require('react');
var Link = require('react-router').Link;
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var AuthorsPage = React.createClass({
    getIntitialState: function () {
        return {
            authors: [],
            test: 'it is here'
        };
    },

    componentDidMount: function() {
        if (this.isMounted()) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },

    render: function() {
        var someAuthors = this.state ? this.state.authors : [];
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-defualt">Add Author</Link>
                <AuthorList authors={someAuthors}/>
            </div>
        );
        
    }
});

module.exports = AuthorsPage;