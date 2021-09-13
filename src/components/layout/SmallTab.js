import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tab() {
  const navBarStyle = {
    paddingLeft: '50px',
    backgroundColor: '#003152',
    borderBottom: '2.5px solid #888888',
  };
  const navStyle = {
    padding: '1px 10px',
    fontWeight: 450,
    cursor: 'Pointer',
    display: 'inline-block',
    fontFamily: 'roboto, sans-serif',
    color: '#fff',
    fontSize: '12px',
    textDecoration: 'none',
  };

  return (

        <div style={navBarStyle}>
            <div style={navStyle} >English version </div>
            <div style={navStyle} >Kinyarwanda </div>
            <div style={navStyle} >Ahazaza TV </div>
            <div style={{ float: 'right' }}>
                <a style={navStyle} target="_blank" href="https://www.facebook.com/ahazazaNews/"> <span style={{ color: '#fff' }}><FontAwesomeIcon icon={faFacebook} size="1x" /></span> facebook</a>
                <a style={navStyle} target="_blank" href="https://twitter.com/ahazazaNews"><span style={{ color: '#fff' }}><FontAwesomeIcon icon={faTwitterSquare} size="1x" /></span> twitter</a>
                <a style={navStyle} target="_blank" href=""><span style={{ color: '#fff' }}><FontAwesomeIcon icon={faYoutube} size="1x" /></span> Youtube</a>
                <a style={navStyle} target="_blank" href=""><span style={{ color: '#fff' }}><FontAwesomeIcon icon={faInstagramSquare} size="1x" /></span> Instagram</a>
                <a style={navStyle} target="_blank" href=""><span style={{ color: '#fff' }}><FontAwesomeIcon icon={faLinkedin} size="1x" /></span> LinkedIn</a>
            </div>
        </div>

  );
}

export default Tab;
