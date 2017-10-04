import React, { Component } from 'react';
import { Fade, Flip, Rotate, Zoom } from 'react-reveal';
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

let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ';
    for (let i=0; i<3; i++)
      lorem += lorem;  
lorem = <p>{lorem}</p>;

class App extends Component {

  state = { jumbotronLoaded: false };
  
  componentDidMount() {
    gtag('event', 'Page Load'); 
    window.setTimeout( () => window.scrollTo( 0, 0), 100 );
  }

  render() {
    const imgData = "data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";    
    return (
      <div className="App" style={{ overflow: 'hidden' }}>
        <Flip x tag="nav" preventReveal={!this.state.jumbotronLoaded} className="navbar navbar-expand-md navbar-dark bg-dark">
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
        <Flip className="jumbotron" onReveal={ () => window.setTimeout( () => this.setState({jumbotronLoaded: true}), 800) } >
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
          <Fade up wave preventReveal={!this.state.jumbotronLoaded} className="row">
            <div className="col-lg-4">          
              <Zoom delay={500} preventReveal={!this.state.jumbotronLoaded}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
              <h2>Cross Browser</h2>
              <p>Works in any modern desktop and mobile browser including Internet Explorer 10. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            </div>
            <div className="col-lg-4">
              <Zoom delay={700} preventReveal={!this.state.jumbotronLoaded}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
              <h2>Small Size</h2>
              <p>React Reveal is less than 2kb gzipped and specifically written for React in ES6. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            </div>
            <div className="col-lg-4">
              <Zoom delay={800} preventReveal={!this.state.jumbotronLoaded}><img alt="" className="rounded-circle" src={imgData} width="140" height="140" /></Zoom>
              <h2>Simple Syntax</h2>
              <p>Choose from a number of easy to remember reveal effects. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            </div>
          </Fade>
          <hr />
          {Array(10).fill(void 0).map( (val, index) => 
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