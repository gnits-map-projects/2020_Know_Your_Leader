import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import Header from './Header';

class Profile extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header/>
        Profile
      </div>
    );
  }
}

export default Profile;




