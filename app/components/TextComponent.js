var React = require('react');
var style=require('../styles/styles.js').textcomponent;

var TextComponent = React.createClass({

render: function () {
    return (
    	<div style={style}>
    	<div class="row">
         <form class="col s12" >
    	 <div class="row">
        <div class="input-field col s12">
           <label for="email" >Reply</label>
          <input id="text" placeholder="type a message" type="text"/>
       
        </div>
      </div>
    </form>
    </div>
    </div>
        );
 }
});

module.exports=TextComponent;