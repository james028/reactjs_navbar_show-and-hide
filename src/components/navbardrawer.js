import React, { Component } from 'react'
import './navbardrawer.css'
import HambMenu from './hambmenu'

export default class NavbarDrawer extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar-nav">
            <div className="navbar-logo">
            <HambMenu click={this.props.clicktoClose}/>
                THE LOGO
            </div>
            <div className="navbar-right">
                <ul>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Users</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>
      </div>
    )
  }
}
