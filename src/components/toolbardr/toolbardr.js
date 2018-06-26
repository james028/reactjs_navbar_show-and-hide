import React, { Component } from 'react'
import './toolbardrawer.css'

export default class ToolbarDrawer extends Component {
  render() {
    return (
      <div className="toolbardrawer">
        <nav>
          <ul>
            <li><a href="#">Products</a></li>
            <li><a href="#">Products</a></li>
          </ul>
        </nav>
        <div onClick={this.props.isClose}>X</div>
      </div>
    )
  }
}
