"use strict";

var React = require('react');
var TextInput = require('../common/textInput');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.IsRequired,
        // {
        //     firstName: React.propTypes.string.IsRequired,
        //     lastName: React.propTypes.string.IsRequired
        // },
        onSave: React.PropTypes.func.IsRequired,
        onChange: React.PropTypes.func.IsRequired,
        errors: React.PropTypes.object.IsRequired
    },

    render: function() {
        return (
            <form>
                <TextInput
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}
                />
                <TextInput
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}
                />
                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
            </form>
        );
    }
});

module.exports = AuthorForm;
  