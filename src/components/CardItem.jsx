var React = require('react');

var CardItem = React.createClass({
  render: function() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
});

module.exports = CardItem;