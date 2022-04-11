import React, { Component } from 'react';
import './logout.css'

export default class UserLogout extends Component {
 
 logout = () => {
    localStorage.clear();
    localStorage.removeItem('Token');
    window.location.href = "/login";
  }
 
  render() {
    return (
      <button className='logoutbtn' onClick={this.logout}>Logout</button>
    )
  }
}
 