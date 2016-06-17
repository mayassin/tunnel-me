var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var LogContainer = require('../containers/LogContainer');
var ChatContainer=require('../containers/ChatContainer');
var Signup=require('../components/Signup');






var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute header='Welcome to Tunnel-me'component={LogContainer}/>
      <Route path='signup' header='Tunnel-me' component={Signup}/>
      <Route path='chatcontainer' header='Tunnel-me' component={ChatContainer}/>
  
    </Route>
  </Router>
);

module.exports = routes;