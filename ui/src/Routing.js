import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import Register from './Register'
import Login from './Login'
import App from './App';
import Home from './Home'
import Header from './Header';
import Profile from './Profile';
import Upload from './Upload'
import Actions from './Actions'
import Rating from './Rating'
import Edit from './Edit'



class Routing extends Component {
    render() {
        return (
          <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/register" component={Register} />
                    <Route path="/Login" component={Login} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/about" component={About}/>    
                    <Route path="/events" component={Events}/>                       
                    <Route exact path="/analytics" component={Analytics}/>                        
                    <Route path="/settings" component={Settings}/>                        
                    <Route path="/help" component={Help}/>                       
                    <Route path="/logout" component={Logout}/>                      
                    <Route path="/profile" component={Profile} />
                    <Route path="/upload" component={Upload} />
                    <Route path="/actions" component={Actions} />
                    <Route path="/rating" component={Rating} />
                    <Route path="/edit" component={Edit} />
                </Switch>
            </Router>
            </div>
        );
    }
}
function About() {
    return (
      <div>
        <Header/>
        About
      </div>
    );
  }
  
  
  function Events() {
    return (
      <div>
        <Header/>
        <h3>Events</h3>
      </div>
    );
  }
  
  function Analytics() {
    return (
      <div>
        <Header/>
        <h3>Analytics</h3>
      </div>
    );
  }
  
  function Settings() {
    return (
      <div>
        <Header/>
        <h3>Settings</h3>
      </div>
    );
  }
  function Help() {
    return (
      <div>
        <Header/>
        <h3>Help</h3>
      </div>
    );
  }
  function Logout() {
    return (
      <div>
     {window.sessionStorage.clear()}
     {window.location.href = "/"}
     </div>
    );
  }
 
export default Routing;




