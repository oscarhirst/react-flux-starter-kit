"use strict";

var React = require('react');
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
        if (this.isMounted()){
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },

    render: function() {
        var someAuthors = this.state ? this.state.authors : [];
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={someAuthors}/>
            </div>
        );
        
    }
});

module.exports = AuthorsPage;