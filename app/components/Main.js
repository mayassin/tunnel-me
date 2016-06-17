var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container' style={{margin: '0 auto'}}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main;