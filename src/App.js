import React, { Component } from 'react';
import logo from './logo.svg';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Zoom>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React Reveal Demo</h1>
          </header>
        </Zoom>
        <Flip y>
          <p className="App-intro">
            This is a demo of <a href="https://github.com/rnosov/react-reveal">react-reveal</a> package. 
            Scroll down to see different reveal effects. <a href="https://github.com/rnosov/react-reveal-demo">Source code of this demo</a>.            
          </p>
        </Flip>
        <div style={{overflow: 'hidden'}}>
          {Array(10).fill(void 0).map( (val, index) => 
            <div key={index}>
              <Fade />
              <Fade down />
              <Fade down big />
              <Fade left />
              <Fade left big />
              <Fade right />
              <Fade right big />
              <Fade up />
              <Fade up big />
              <Flip />
              <Flip x />
              <Flip y />
              <Rotate />
              <Rotate down left />
              <Rotate down right />
              <Rotate up left />
              <Rotate up right />
              <Zoom />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
