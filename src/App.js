import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleTracker: false
    }
  }


  render() {
    var backgroundColor = 'blue';

    const styles = {
      h1: {
        color: 'white',
        fontSize: '50px',
        backgroundColor: backgroundColor
      },
      p: {
        color: 'green'
      }
    }

    return (
      <div className={
        `original ${this.state.styleTracker ? 'true-style' : 'false-style'}`
        }>
        
          <button onClick={ () => { 
            this.setState({ 
                styleTracker: !this.state.styleTracker 
              }) 
            }}> 
            Click me! 
          </button>

          {/*<h1 style={ {color: 'white', fontSize: '50px'} }>Look at me text!</h1>*/}
          <h1 style={ styles.h1 }>Look at me text!</h1>

          <p style={styles.p}><b>this.state.styleTracker</b> is currently: {this.state.styleTracker.toString() }</p>
      </div>
    );
  }
}

export default App;
