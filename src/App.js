import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar/toolbar'
import ToolbarDrawer from './components/toolbardr/toolbardr'
import Backdrop from './components/toolbardr/backdrop'


class App extends Component {

  state = {
    isDrawe: false
  };

  drawerToggle = () => {
    this.setState((prevState) => {
      return { isDrawe: !prevState.isDrawe };
    });
  }

  backdropHandler = () => {
    this.setState({
      isDrawe: false
    });
  }


  render() {
    let tooldrawer;
    let backdrop;

    if(this.state.isDrawe) {
      tooldrawer = <ToolbarDrawer isClose={this.backdropHandler}/>;
      backdrop = <Backdrop isBackDrop={this.backdropHandler}/>
    }

    return (
      <div className="App">
        <Toolbar drawClick={this.drawerToggle}/>
        {tooldrawer}
        {backdrop}
        <main style={{marginTop: '70px'}}>
          <p>this is page</p>
        </main>
      </div>
    );
  }
}

export default App;
