import React, { Component } from 'react';
import Posts from './Posts'
import Header from './Header';


class Home extends Component {
  constructor(props) {
    super(props);
  }
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




