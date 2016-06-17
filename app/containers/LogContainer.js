var React = require('react');
var Log = require('../components/Log');


var LogContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      email:'',
      password:''
    }
  },
  handleSubmitUser: function (e) {
    e.preventDefault();
    var email = this.state.email;
    var password=this.state.password;
    this.setState({
      email: '',
      password:''
    });
   

    if (email=="username@gmail.com" && password=="password") {
      this.context.router.push({
        pathname: '/chat',
        
      })
    } else {
      this.context.router.push('/')
    }
  },
  handleUpdateEmail: function (event) {
    this.setState({
      email: event.target.value
    });
  },
  handleUpdatePassword: function (event) {
    this.setState({
      password: event.target.value
    });
  },
  render:function(){
  	return(
  		<Log
        onSubmitUser={this.handleSubmitUser}
        onUpdateEmail={this.handleUpdateEmail}
        onUpdatePassword={this.handleUpdatePassword}
        password={this.state.password}
        email={this.state.email} />
  		);
  }
});


module.exports=LogContainer;