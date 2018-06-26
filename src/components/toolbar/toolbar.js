import React, { Component } from 'react'
import './toolbar.css'
import HambMenu from '../hambmenu'

export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="nav">
            <div className="logo">
              <HambMenu clickHamb={this.props.drawClick}/>
              <a href="#">THE LOGO</a>
            </div>
            <div className="items">
              <ul>
                <li><a href="#">Products</a></li>
                <li><a href="#">Users</a></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
