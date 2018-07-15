import React, { Component } from 'react'
import './drawerleft.css'

export default class DrawerLeft extends Component {
  render() {
    let drawerClasses = "drawer-left";
    if (this.props.showTransform) {
        drawerClasses = "drawer-left open";
    }

    return (
      <div className={drawerClasses}>
        <nav>
            <button onClick={this.props.clickClose}>X</button>
            <ul>
                <li><a href="/">Products</a></li>
                <li><a href="/">Users</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}
