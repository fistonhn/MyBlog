import React from 'react';
import { Button, Form, ListGroup, Col, Row, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import ahazazaLogoFooter from '../pictures/footerLogo.png';

export default function Footer() {
  const listStyle = {
    fontWeight: 550,
    overflow: 'hidden',
    color: '#fff',
    backgroundColor: '#003152',
    borderBottom: '2px dotted #fff',
    width: '100%',

  };

  return (
        <div>
        <Row style={{ backgroundColor: '#003152', padding: '0.5% 3%', overflow: 'hidden' }}>
        <Col style={{ background: '#003152' }} lg={3} md={6} xs={12}>
            <ListGroup variant="flush">
                <ListGroup.Item action href="/" style={{ textAlign: 'center', backgroundColor: '#003152', overflow: 'hidden', marginTop: '-10px' }}>
                <img
                    src={ahazazaLogoFooter}
                    width="70%"
                    height="70%"
                    alt="AHAZAZA.COM"
                    />
                </ListGroup.Item>
                <ListGroup.Item style={{ backgroundColor: '#003152', color: '#fff', textAlign: 'center', marginLeft: '-15px' }}>
                <div style={{ padding: '10px' }}>
                    <span style={{ color: '#fff' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
                    <span style={{ color: '#fff', padding: '10px' }}><FontAwesomeIcon icon={faYoutube} size="2x" /></span>
                    <span style={{ color: '#fff' }}><FontAwesomeIcon icon={faLinkedin} size="2x" /></span>
                    <span style={{ color: '#fff', padding: '10px' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
                    <span style={{ color: '#fff' }}><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></span>
                </div>
                <div style={{ color: '#fff', fontWeight: 550 }}> <i style={{ fontSize: '1.1rem' }} class="material-icons">phone</i> +250784277345 </div>
                <div style={{ color: '#fff', fontWeight: 550 }}> <i style={{ fontSize: '1.1rem' }} class="material-icons">gmail</i> fistonhn@gmail.com </div>
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col lg={3} md={6} xs={12} style={{ background: '#003152' }}>
            <ListGroup variant="flush" >
                <ListGroup.Item style={listStyle}>
                    <h4 style={{ overflow: 'hidden', color: '#fff', fontWeight: '700', fontSize: '20px', fontFamily: 'roboto', paddingTop: '15px', paddingBottom: '5px' }}>SERIVISE DUTANGA</h4>
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                <i style={{ fontSize: '1.1rem', fontWeight: 'bold' }} class="material-icons">camera</i> Video Production
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                <i style={{ fontSize: '1.1rem' }} class="material-icons">photo</i> Photography
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                <i style={{ fontSize: '1.1rem' }} class="material-icons">wc</i> Wedding coverage
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                <i style={{ fontSize: '1.1rem' }} class="material-icons">web</i> Web Development
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col lg={3} md={6} xs={12} style={{ background: '#003152' }}>
        <ListGroup variant="flush" >
            <Form >
            <ListGroup.Item style={{ backgroundColor: '#003152', paddingTop: '3%' }}>
                <h4 style={{ overflow: 'hidden', color: '#fff', fontWeight: '700', fontSize: '20px', fontFamily: 'roboto', paddingTop: '15px', paddingBottom: '5px' }}>TWANDIKIRE</h4>
            </ListGroup.Item>
                <Form.Control style={{ width: '100%' }} type="email" placeholder="Andika Email yawe hano" />
                <Form.Control style={{ marginTop: '2%', width: '100%' }} as="textarea" placeholder="Andika Message yawe hano" rows="2" />
                <Button style={{ marginTop: '2%', marginBottom: '10%' }} variant="primary" type="submit"><i style={{ fontSize: '1.3rem', marginTop: '2px' }} class="material-icons">mail_outline</i> Ohereza</Button>
            </Form>
        </ListGroup>
        </Col>
        <Col lg={3} md={6} xs={12} style={{ background: '#003152' }}>
        <ListGroup variant="flush" >
            <ListGroup.Item style={{ backgroundColor: '#003152', paddingTop: '3%' }}>
                <h4 style={{ overflow: 'hidden', color: '#fff', fontWeight: '700', fontSize: '20px', fontFamily: 'roboto', paddingTop: '15px', paddingBottom: '5px' }}>INKURU ZACU</h4>
            </ListGroup.Item>
            <ListGroup.Item style={{ backgroundColor: '#003152' }}>
                <ol style={{ listStyleType: 'square', fontSize: '1rem', cursor: 'pointer', padding: '0', margin: '0' }}>
                    <li style={{ fontWeight: 'bold', fontFamily: 'Helmet,Freesans,Helvetica,Arial,sans-serif', fontStyle: 'italic', color: 'white' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="/Catagories/Imyidagaduro">
                           Imyidagaduro
                        </a>
                    </li>
                    <li style={{ fontWeight: 'bold', fontFamily: 'Helmet,Freesans,Helvetica,Arial,sans-serif', fontStyle: 'italic', color: 'white' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="/Catagories/Siporo">
                        Siporo
                        </a>
                    </li>
                    <li style={{ fontWeight: 'bold', fontFamily: 'Helmet,Freesans,Helvetica,Arial,sans-serif', fontStyle: 'italic', color: 'white' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="/Catagories/Politiki">
                        Politiki
                        </a>
                    </li>
                    <li style={{ fontWeight: 'bold', fontFamily: 'Helmet,Freesans,Helvetica,Arial,sans-serif', fontStyle: 'italic', color: 'white' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="/Catagories/Tekinologi">
                        Tekinologi
                        </a>
                    </li>
                    <li style={{ fontWeight: 'bold', fontFamily: 'Helmet,Freesans,Helvetica,Arial,sans-serif', fontStyle: 'italic', color: 'white' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="/Catagories/Ubukungu">
                        Ubukungu
                        </a>
                    </li>
                    <li style={{ fontWeight: 'bold', fontFamily: 'Helmet,Freesans,Helvetica,Arial,sans-serif', fontStyle: 'italic', color: 'white' }}>
                        <a style={{ textDecoration: 'none', color: 'white' }} href="/Catagories/Ubuzima">
                        Ubuzima
                        </a>
                    </li>
                </ol>
            </ListGroup.Item>
        </ListGroup>
        </Col>
    </Row>
    <p style={{ fontFamily: 'roboto', textAlign: 'center', background: 'rgb(0, 96, 172)', color: '#fff', padding: '10px', marginBottom: '0px', fontSize: '1rem', fontStyle: 'italic', width: 'inherit' }}>&copy; 2021 | Made with ❤ by HN~Fiston</p></div>

  );
}
