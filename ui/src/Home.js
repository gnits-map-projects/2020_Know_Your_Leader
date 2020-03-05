import React, { Component } from 'react';
import Posts from './Posts'
import Header from './Header';


class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Posts/>
      </div>
    );
  }
}

export default Home;




