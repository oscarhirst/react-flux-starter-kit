"use strict";

var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div><Link to="app">THIS</Link></div>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="authors">Authors</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;