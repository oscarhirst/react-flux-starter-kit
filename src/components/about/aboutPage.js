"use strict";

var React = require('react');

var About = React.createClass({
    render: function () {
        return (
            <div>
                <h1>About</h1>
                <p>
                    Stuff:
                    <ul>
                        <li>React</li>
                        <li>React Router</li>
                        <li>Flux</li>
                    </ul>
                    for web apps
                </p>
            </div>
        );
    }
});

module.exports = About;