var React=require('react');
var style=require('../styles/styles.js').chatcomponent;


var ChatComponent = React.createClass({
  render: function () {
    return (
      <div>
      <div  style={style}>

      <ul>
         <li>
         Hisham Zahran: haw haw</li>
         <br></br>
         <li>Hisham Zahran: haw haw</li>
         <br></br>
         <li>Hisham Zahran: haw haw</li>
         <br></br>
         <li>Hisham Zahran: haw haw</li>
         <br></br>
         <li>Hisham Zahran: haw haw</li>
         <br></br>
         <li>Hisham Zahran: haw haw</li>
         </ul>     
       </div>
      </div>
    )
  }
});

module.exports = ChatComponent;