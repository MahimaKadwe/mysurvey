import '../App.css';
import React from 'react';
import PropTypes from 'prop-types';


export default function Navbar(props) {
 

    // const [text, setText] = useState('Enter text here');
  return (
    <div>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <a className="navbar-mahi" href="/">{props.plain}</a>
    
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <a className="nav-link active" aria-current="page" href="/">sqaure</a> */}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/">Features</a> */}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" href="/">Pricing</a> */}
          </li>
          <li className="nav-item">
            {/* <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a> */}
          </li>
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'}`}>
        <input className="form-check-input" onClick={props.togglemode} type="checkbox" id="flexSwitchCheckDefault"/>
        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label> */}
        <input className="form-check-input" onClick={props.swithcd} type="checkbox" id="flexSwitchCheckDefault"/>
        {/* <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> Green</label> */}
        
        </div>
      </div> 
    </div>
    </nav>
    </div>   
  )
}

Navbar.propTypes = { 
    title : PropTypes.string,
  }
