var React = require('react');
var CardItem = require('./CardItem.jsx');

var CardManager = React.createClass({  
  getInitialState: function() {
    return {title:'', description:''};
  },
  render: function() {
    var divStyle = {
      marginTop: 10
    }
    
    var panelType = 'primary';

    if(this.props.panelType) {
      panelType = this.props.panelType;
    }

    return (
      <div style={divStyle} className="col-lg-3 col-md-6">
        <div className={`panel panel-${panelType}`}>
          <div className="panel-heading">
            <CardItem title={this.props.title} description={this.props.description} />
          </div>
          <div className="panel-body">
            {this.props.body}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = CardManager;