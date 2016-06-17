var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var btn = require('../styles/styles.js').btn;
var fonts = require('../styles/styles.js').fonts;
var PropTypes = React.PropTypes;


var Failed = React.createClass({
  render: function () {
    return (
<div className="container" style={btn}>
    <div className="row">
        <div className="col m6">
            <h2 className="center-align" style={fonts}>You seem to have entered a wrong username or password</h2>
            <div className="row">
                <form className="col s12" onSubmit={this.props.onSubmitUser}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate"  onChange={this.props.onUpdateEmail} value={this.props.email}/>
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="pass" type="password" className="validate" onChange={this.props.onUpdatePassword} value={this.props.password}/>
                            <label for="pass">Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <p>
                                <input type="checkbox" id="remember"/>
                                <label for="remember">Remember me</label>
                            </p>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                        <div className="col m12">
                            <div >
                           <div className="right-align">
                           
                                <button className="btn btn-large waves-effect waves-light" type="Submit" name="action">Login</button>

                                </div>
                            
                            <div className="center-align">
                            <Link to='/Signup'>
                                <button className="btn btn-large waves-effect waves-light" type="button" name="action">Don't have an account</button>
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
Failed.propTypes = {
 onSubmitUser:PropTypes.func.isRequired,
 onUpdateEmail:PropTypes.func.isRequired,
 onUpdatePassword:PropTypes.func.isRequired,
 email: PropTypes.string.isRequired,
 password: PropTypes.string.isRequired,
}
module.exports = Failed;


