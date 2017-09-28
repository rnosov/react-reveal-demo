import React, { Component } from 'react';
import logo from './logo.svg';
import { 
  Fade,
  SlideDown,
  SlideDownBig,
  SlideLeft,
  SlideRight,
  SlideRightBig ,
  SlideUp,
  SlideUpBig,
  Flip,
  FlipY,
  FlipX,
  Rotate,
  RotateDownLeft,
  RotateDownRight,
  RotateUpLeft,
  RotateUpRight,
  Zoom,
} from 'react-reveal';
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
        <FlipY>
          <p className="App-intro">
            This is a demo of <a href="https://github.com/rnosov/react-reveal">react-reveal</a> package. 
            Scroll down to see different reveal effects. <a href="https://github.com/rnosov/react-reveal-demo">Source code of this demo</a>.            
          </p>
        </FlipY>
        <div style={{overflow: 'hidden'}}>
          {Array(10).fill(void 0).map( (val, index) => 
            <div key={index}>
              <Fade />              
              <SlideDown />
              <SlideDownBig />
              <SlideLeft />
              <SlideRight />
              <SlideRightBig  />
              <SlideUp />
              <SlideUpBig />
              <Zoom />
              <Flip />
              <FlipY />
              <FlipX />
              <Rotate />
              <RotateDownLeft />
              <RotateDownRight />
              <RotateUpLeft />
              <RotateUpRight />
              <Zoom />    
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
