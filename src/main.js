$ = jQuery = require('jQuery');
var React = require('react');
var About = require('./components/aboutPage');
var Authors = require('./components/author/authorsPage');
var Header = require('./components/common/header');
var Home = require('./components/homePage');


(function(win){
    "use strict";
    var App = React.createClass({
        render: function(){
            var Child;

            switch(this.props.route){
                case 'about':
                    Child = About;
                    break;
                case 'authors':
                    Child = Authors;
                    break;
                default:
                    Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child/>
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        React.render(<App route={route} />, document.getElementById('app'));
    }

    win.addEventListener('hashchange', render);
    render();
})(window);

