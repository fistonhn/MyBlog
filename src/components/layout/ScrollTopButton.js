import React from 'react';
import { Button, Form, ListGroup, Col, Row, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ScrollTopButton() {
  const scrollbtn = {
    display: 'none',
    position: 'fixed',
    right: 0,
    top: 0,
    zIndex: '99',
    fontSize: '18px',
    border: 'none',
    outline: 'none',
    backgroundColor: 'red',
    color: 'white',
    cursor: 'pointer',
    padding: '100px',
    borderRadius: '4px',

  };

  return (
    <Button style={scrollbtn}>Top</Button>
  );
}
