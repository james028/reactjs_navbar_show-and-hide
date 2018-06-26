import React, { Component } from 'react'

export default class HambMenu extends Component {
  render() {
    return (
      <div onClick={this.props.clickHamb}>
        <img src="../images/hamb.png" alt="hamb" />
      </div>
    )
  }
}
