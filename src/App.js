import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavbarDrawer from './components/navbardrawer';
import DrawerLeft from './components/drawerleft';
import MenuBack from './components/menuback';


class App extends Component {

  state = {
    isShow: false
  };

  handleClickShow = () => {
    this.setState((prevState) => {
      return {isShow: !prevState.isShow};
    });
    console.log("ttest");
  }

  handleClose = () => {
    this.setState({
      isShow: false
    })
  }
  

  render() {
    let drawerleft;
    let menuback;

    if(this.state.isShow) {
      drawerleft = <DrawerLeft clickClose={this.handleClose} showTransform={this.state.isShow}/>;
      menuback = <MenuBack clicktoClose={this.handleClickShow}/>;
    }

    return (
      <div className="App">
        <NavbarDrawer clicktoClose={this.handleClickShow}/>
        {drawerleft}
        {menuback}
        <div style={{marginTop: '70px'}}>
          <p>test layout</p>
        </div>
      </div>
    );
  }
}

export default App;
