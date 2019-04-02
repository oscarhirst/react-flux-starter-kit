"use strict";

var React = require('react');
var Link = require('react-router').Link;

var notFoundPage = React.createClass({
    render: function () {
        return (
            <div className="jumbotron">
                <h1>Page Not Found</h1>
                <p>Whoops!</p>
                <Link to="app">Back to home</Link>
            </div>
        );
    }
});

module.exports = notFoundPage;
