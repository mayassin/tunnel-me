var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var btn = require('../styles/styles.js').btn;
var font = require('../styles/styles.js').font;
var PropTypes = React.PropTypes;
var Signup=React.createClass({
  render: function () {
    return (
      
       <div className="container">
    <div className="row">
        
        <div className="col m6">
         <h2 className="center-align" style={font}>Don't have an account?</h2>
            <h2 className="center-align"> </h2>
            <div className="row">
                <form className="col s12" >
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"   value={this.props.email}/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="pass" type="password" className="validate"value={this.props.password}/>
                            <label for="pass">Password</label>
                        </div>
                    </div>
                   
                   
                    <div className="row">
                        <div className="col m12">
                            <div >
                           <div className="center-align">
                                <Link to='/'>
                                <button className="btn btn-large waves-effect waves-light" type="Submit" name="action">We're done here</button>
                                </Link>
                                </div>                            
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
      
    );
  }
});

module.exports = Signup;