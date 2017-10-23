import React, { Component } from 'react';
import Stepper from 'react-reveal/Stepper';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Rotate from 'react-reveal/Rotate';
import Zoom from 'react-reveal/Zoom';
import Roll from 'react-reveal/Roll';
import Bounce from 'react-reveal/Bounce';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
const imgData = "https://source.unsplash.com/random/140x140";    

class App extends Component {

  constructor(props) {
    super(props);     
    this.step = new Stepper()
      .step('navbar', 500)
      .step('title', 500)
      .step('jumbotronText', 1000)
      .step('centralItem', 800)
      .step('circle1', 300)
      .step('circle2', 300)
      .step('circle3', 600)    
      .step('jumbotron', 800)       
      .step('sideItems', 1500)
      .step('button', 200)
    ;
  }

  componentDidMount() {
    gtag('event', 'Page Load (0.7.0)'); 
    //window.setTimeout( () => window.scrollTo( 0, 0), 100 );
  }

  render() {
    return (
      <div className="App" style={{ overflow: 'hidden' }}>
      <div>
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
    <div id="bg" className="jumbotron">
      <div className="container">
        <h1 className="text-center">           
        <Fade top cascade={1000} duration={500} step={this.step.is('title')} style={{display: 'inline-block'}} >
          React
        </Fade>
        <span style={{whiteSpace:'pre'}}> </span>
        <Fade bottom cascade={1000} duration={500} step={this.step.is('title')} style={{display: 'inline-block'}} >
          Reveal
        </Fade>
        </h1>          
        <Roll step={this.step.is('jumbotronText')}>
          <p className="lead"><a href="https://www.npmjs.com/package/react-reveal"> React Reveal</a> is a dead simple way to add some cool reveal on scroll animations to your React app. It's less than 2kb gzipped and specifically written for React in ES6.
            It was used to create vairous animations that you see on this page.
                Scroll down to see more. <a href="https://github.com/rnosov/react-reveal-demo">Source code of this demo</a>.            
          </p>
        </Roll>
          <Bounce left duration={1000} step={this.step.is('button')}>
            <p><button onClick={ () => window.location.reload(false) } className="btn btn-primary btn-lg">Refresh Page</button></p>
          </Bounce>
      </div>
      {/*<Zoom tag="img" src="https://source.unsplash.com/random/2000x800" step={this.step.is('jumbotron')} duration={5800}></Zoom>*/}
      <Zoom id="img" step={this.step.is('jumbotron')} duration={2000}>
        <img alt="" src="https://source.unsplash.com/random/1280x400" />
      </Zoom>
    </div>
     <div className="container text-center">
            <div className="row">
              <div className="col-lg-4">          
                <Zoom duration={800} step={this.step.is('circle1')}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>          
                <Fade left duration={1200} tag="h2" step={this.step.is('sideItems')}>Cross Browser</Fade> 
                <Rotate cascade bottom right duration={1200} step={this.step.is('sideItems')} tag="ul" className="list-group">
                    <li className="list-group-item">Works in any modern desktop and mobile browser</li>
                    <li className="list-group-item">Google Chrome</li>
                    <li className="list-group-item">Mozilla Firefox</li>
                    <li className="list-group-item">Apple Safari</li>
                    <li className="list-group-item">Internet Explorer 10+</li>
                </Rotate>                
              </div>
              <div className="col-lg-4">                  
                <Zoom duration={800} step={this.step.is('circle2')}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
                <Flip duration={1200} tag="h2" step={this.step.is('centralItem')}>Small Size</Flip>                          
                  <Fade cascade bottom delay={300} duration={1200} step={this.step.is('centralItem')} className="list-group" tag="ul">
                    <li className="list-group-item">React Reveal is less than 2kb gzipped</li>
                    <li className="list-group-item">specifically written for React in ES6.</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">felis euismod semper</li>              
                  </Fade>                          
              </div>
              <div className="col-lg-4">                  
                <Zoom duration={800} step={this.step.is('circle3')}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
                <Fade right duration={1200} tag="h2" step={this.step.is('sideItems')}>Simple Syntax</Fade>
                <Rotate cascade bottom left duration={1200} step={this.step.is('sideItems')} tag="ul" className="list-group">
                    <li className="list-group-item">Choose from a number of easy to remember reveal effects.</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>                    
                </Rotate>                          
              </div>        
            </div>      
          </div>
        </div> )
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