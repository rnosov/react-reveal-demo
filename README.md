# React Reveal Demo

This a demo of [React Reveal](https://github.com/rnosov/react-reveal) package. This demo is based on [Create React App](https://github.com/facebookincubator/create-react-app) scaffolding. 

[Live demo](https://rnosov.github.io/react-reveal-demo/)

To recreate this demo read the instructions below.

If you don't have `Create React App` installed then in the command prompt type the following:

```sh
npm install -g create-react-app
```

Then create a new project using `Create React App`:

```sh
create-react-app my-app
cd my-app/
npm install react-reveal bootstrap@4.0.0-beta --save
npm start
```

Replace contents of src/app.js with the following code:

```jsx
import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from './Reveal';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    window.setTimeout( () => window.scrollTo( 0, 0), 100 );
  }
  
  render() {
    const imgData = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
    return (
      <div className="App" style={{ overflow: 'hidden' }}>
        <Flip x tag="nav" delay={600} className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="https://rnosov.github.io/react-reveal-demo/">Demo</a>
            <div>
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.npmjs.com/package/react-reveal">NPM Package</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/rnosov/react-reveal">Github Project</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://github.com/rnosov/react-reveal-demo">Demo Source Code</a>
                </li>             
              </ul>        
            </div>
          </div>
        </Flip>
        <Flip className="jumbotron" >
          <div className="container">
            <h1>React Reveal</h1>
            <Rotate up right delay={500} wave>
              <p><a href="https://www.npmjs.com/package/react-reveal"> React Reveal</a> is a dead simple way to add some cool reveal on scroll animations to your React app. It's less than 2kb gzipped and specifically written for React in ES6.
              It was used to create vairous animations that you see on this page.
                  Scroll down to see more. <a href="https://github.com/rnosov/react-reveal-demo">Source code of this demo</a>.            
                </p>
              <p><button onClick={ () => window.location.reload(false) } className="btn btn-primary btn-lg">Refresh Page</button></p>
            </Rotate>
          </div>
        </Flip>
        <div className="container">
          <Fade up className="row" wave delay={800}>
            <div className="col-lg-4">          
              <Zoom delay={1200}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
              <h2>Cross Browser</h2>
              <p>Works in any moder desktop and mobile browser including Internet Explorer 10. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            </div>
            <div className="col-lg-4">
              <Zoom delay={1400}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
              <h2>Small Size</h2>
              <p>React Reveal is less than 2kb gzipped and specifically written for React in ES6. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div className="col-lg-4">
              <Zoom delay={1600}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
              <h2>Simple Syntax</h2>
              <p>Choose from a number of easy to to remember reveal effects. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
          </Fade>
          <hr />
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

