import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import SmallTab from '../layout/SmallTab';
import Header from '../layout/Header';
import Tab from '../layout/Tab';
import Footer from '../layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
        <div>
           <div className="advert">
           <SmallTab />
           </div>
            <div className="advert">
            <Header />
           </div>
            <Tab />
            <Row style={{ padding: '5% 8%' }} className="listAdress">
                <Col>
                <Form >
                <h3 style={{ marginBottom: '5%' }}>Contact us</h3>
                    <Form.Row>
                        <Col>
                            <Form.Label>Names</Form.Label>
                            <Form.Control placeholder="Names" />
                        </Col>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" rows="1" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="4" />
                    </Form.Group>
                    <Button style={{ marginTop: '2%' }} variant="primary" type="submit">
                        Send message
                    </Button>
                </Form>
                </Col>
                <Col style={{ paddingRight: '8%', marginTop: '11%' }} xs lg="4">
                   <h6 style={{ borderBottom: '2px solid #007bff', display: 'inlineBlock', color: '#007bff' }}>Phone number </h6>
                   <p>
                    <div>HnFiston: +250784277345</div>
                   </p>
                   <h6 style={{ borderBottom: '2px solid #007bff', display: 'inlineBlock', color: '#007bff' }}>Email </h6>
                   <p>
                   <div> HnFiston: fistonhn@gmail.com </div>
                   </p>
                </Col>
            </Row>
            <Footer />
        </div>
  );
}

export default Contact;
