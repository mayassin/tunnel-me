var React = require('react');
var style=require('../styles/styles.js').sidebar;
var image=require('../styles/styles.js').image;

var Sidebar = React.createClass({
  render: function () {
    return (
    <div style={style}>
     <aside >	
  			
			
				<img src="../app/assests/placeholder.png" style={image}/>
				
					
					
						<div class="collection">
        <li href="#!" class="collection-item">Hisham Zahran</li>
        <li href="#!" class="collection-item active">Youssef Tarek</li>
        <li href="#!" class="collection-item">Ahmed El Sayegh</li>
        <li href="#!" class="collection-item">Hamdy El Wazeer</li>
      </div>
							
						
					

			</aside>
    </div>
    );
  }
});

module.exports = Sidebar;