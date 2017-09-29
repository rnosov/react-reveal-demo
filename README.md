# React Reveal Demo

This a demo of [React Reveal](https://github.com/rnosov/react-reveal) package. This demo is based on [Create React App](https://github.com/facebookincubator/create-react-app) scaffolding.

To make your own please follow the following steps: 

In the command prompt type:


```sh
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm install react-reveal --save
subl src/App.js #open with Sublime Text. Or use any other text editor.
npm start

```

Copy and paste the following code into app.js:

```jsx
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

```

Then open [http://localhost:3000/](http://localhost:3000/) to see this demo running locally.

