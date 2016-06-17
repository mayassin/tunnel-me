var React = require('react');
var ChatComponent = require('../components/ChatComponent');
var Sidebar = require('../components/Sidebar');
var style=require('../styles/styles.js').background;
var TextComponent=require('../components/TextComponent');

var ChatContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  render:function(){
      return(
      	<div style={style} >
      	<Sidebar/>
      	<ChatComponent/>
      	<TextComponent/>
        </div>
      	);
  }
});

  module.exports=ChatContainer;