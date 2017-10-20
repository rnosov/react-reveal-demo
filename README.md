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
import { Fade, Flip, Rotate, Zoom, Cascade } from 'react-reveal';
import Stepper from 'react-reveal/Stepper';
import 'bootstrap/dist/css/bootstrap.min.css';

function gtag() { 
  if (window.dataLayer) 
    window.dataLayer.push(arguments); 
}

if (process.env.NODE_ENV === 'production') {
  let script = document.createElement('script');
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=UA-107416457-1";
  document.head.appendChild(script);  
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date()); 
  gtag('config', 'UA-107416457-1');
}

const lorem = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>;

class App extends Component {

  constructor(props) {
    super(props);     
    this.step = new Stepper()
      .step('jumbotron', 500)       
      .step('jumbotronText', 500)
      .step('title', 200)
      .step('navbar', 200)
      .step('centralItem', 800)
      .step('sideHeadings', 800)
      .step('sideLists', 0)
    ;
  }

  componentDidMount() {
    gtag('event', 'Page Load (0.6.0)'); 
    //window.setTimeout( () => window.scrollTo( 0, 0), 100 );
  }

  render() {
    const imgData = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";    
    return (
      <div className="App" style={{ overflow: 'hidden' }}>
        <div style={{overflow:'hidden'}}>
          <Flip x tag="nav" step={this.step.is('navbar')} className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
              <a className="navbar-brand" href="https://rnosov.github.io/react-reveal-demo/">Demo</a>            
              <div>
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.npmjs.com/package/react-reveal">NPM Package</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://github.com/rnosov/react-reveal">Github Repository</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://github.com/rnosov/react-reveal-demo">Demo Source Code</a>
                  </li>             
                </ul>        
              </div>
            </div>
          </Flip>          
          <Zoom step={this.step.is('jumbotron')} duration={800} className="jumbotron">
            <div className="container" style={{opacity: 1, visibility:'visible'}}>
              <Fade top step={this.step.is('title')} tag="h1" className="text-center">React Reveal</Fade>
                <Rotate bottom right step={this.step.is('jumbotronText')}>
                  <p><a href="https://www.npmjs.com/package/react-reveal"> React Reveal</a> is a dead simple way to add some cool reveal on scroll animations to your React app. It's less than 2kb gzipped and specifically written for React in ES6.
                  It was used to create vairous animations that you see on this page.
                      Scroll down to see more. <a href="https://github.com/rnosov/react-reveal-demo">Source code of this demo</a>.            
                    </p>
                  <p><button onClick={ () => window.location.reload(false) } className="btn btn-outline-primary btn-lg">Refresh Page</button></p>
                </Rotate>
            </div>
          </Zoom>
          <div className="container text-center">
            <div className="row">
              <div className="col-lg-4">          
                <Zoom duration={1200} delay={200}  step={this.step.is('sideHeadings')}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>          
                <Flip x tag="h2" step={this.step.is('sideHeadings')}>Cross Browser</Flip>
                <Cascade grand>
                  <Fade left duration={1200} step={this.step.is('sideLists')}>
                    <ul className="list-group">
                      <li className="list-group-item">Works in any modern desktop and mobile browser</li>
                      <li className="list-group-item">Google Chrome</li>
                      <li className="list-group-item">Mozilla Firefox</li>
                      <li className="list-group-item">Apple Safari</li>
                      <li className="list-group-item">Internet Explorer 10+</li>
                    </ul>
                  </Fade>
                </Cascade>
              </div>
              <div className="col-lg-4">                  
                <Zoom duration={1200} delay={200} step={this.step.is('centralItem')}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
                <Flip x tag="h2" step={this.step.is('centralItem')}>Small Size</Flip>          
                <Cascade>
                  <Fade bottom duration={1200} step={this.step.is('centralItem')} className="list-group" tag="ul">
                    <li className="list-group-item">React Reveal is less than 2kb gzipped</li>
                    <li className="list-group-item">specifically written for React in ES6.</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">felis euismod semper</li>              
                  </Fade>
                </Cascade>          
              </div>
              <div className="col-lg-4">                  
                <Zoom duration={1200} delay={200} step={this.step.is('sideHeadings')}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
                <Flip x tag="h2" step={this.step.is('sideHeadings')}>Simple Syntax</Flip>          
                <Cascade depth={2}>
                  <Fade right duration={1200} step={this.step.is('sideLists')}>
                    <ul className="list-group">
                      <li className="list-group-item">Choose from a number of easy to remember reveal effects.</li>
                      <li className="list-group-item">Morbi leo risus</li>
                      <li className="list-group-item">Porta ac consectetur ac</li>
                      <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                  </Fade>
                </Cascade>          
              </div>        
            </div>      
          </div>
        </div>
        <div className="container">
          <hr />
          {Array(...Array(10)).map( (val, index) => 
            <div key={index}>
              <Fade>{lorem}</Fade>
              <Fade down>{lorem}</Fade>
              <Fade down big>{lorem}</Fade>
              <Fade left>{lorem}</Fade>
              <Fade left big>{lorem}</Fade>
              <Fade right>{lorem}</Fade>
              <Fade right big>{lorem}</Fade>
              <Fade up>{lorem}</Fade>
              <Fade up big>{lorem}</Fade>
              <Flip>{lorem}</Flip>
              <Flip x>{lorem}</Flip>
              <Flip y>{lorem}</Flip>
              <Rotate>{lorem}</Rotate>
              <Rotate down left>{lorem}</Rotate>
              <Rotate down right>{lorem}</Rotate>
              <Rotate up left>{lorem}</Rotate>
              <Rotate up right>{lorem}</Rotate>
              <Zoom onReveal={ () => gtag('event', 'Zoom Load ' + index) }>{lorem}</Zoom>
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

