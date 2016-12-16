var React = require('react');
var ReactDOM = require('react-dom');
var CardManager = require('./components/CardManager.jsx');

ReactDOM.render(<CardManager title="Ottawa" description="Weather 10 - 20" body="Hello Frank" panelType="success"/>, document.getElementById('weather'));