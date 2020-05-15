import React from 'react'
import { Button,Form,ListGroup,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import igihango from '../pictures/igihango.png';

export default function Footer() {

      
    const listStyle={
        color:'#fff',
        backgroundColor:'#0d47a1',
        borderBottom: '2px dotted #fff',
        width:'90%',
        paddingTop:'6%',
    }

    return (
        <Row className="footerStyle">
        <Col  style={{ background:'#0d47a1'}} xs={4}>
            <ListGroup variant="flush" >
                <ListGroup.Item action href="/ManagePosts" style={{paddingLeft:'5%',backgroundColor:'#0d47a1',paddingTop:'5%',}}>
                <img
                    src={igihango}
                    width="243"
                    height="90.396"
                    className="responsive-navbar-nav"
                    alt="IGIHANGO.RW"
                    />
                </ListGroup.Item>
                <ListGroup.Item action href="/ManageUsers" style={{paddingLeft:'9%',backgroundColor:'#0d47a1',color:'#fff',}}>
                    <span style={{color:'#fff'}}> <i className="fas fa-phone"></i> &nbsp; +250788239598/ +250784277345 </span>
                    <span  style={{color:'#fff'}}> <i className="fas fa-envelope"></i> &nbsp;  ericseba2016@gmail.com </span>
                    <span  style={{color:'#fff'}}> <i className="fas fa-envelope"></i> &nbsp; fistonhn@gmail.com </span>
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col  style={{background:'#0d47a1'}} xs={4}>
            <ListGroup variant="flush" >
                <ListGroup.Item style={{paddingLeft:'5%',backgroundColor:'#0d47a1',paddingTop:'6%', borderBottom: '2px dotted #fff',width:'90%'}}>
                    <h4>Our service</h4>
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                    - Video Production
                </ListGroup.Item>
                <ListGroup.Item  style={listStyle}>
                    - Photography
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                    - Web Development
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col style={{background:'#0d47a1'}} xs={4}>
        <ListGroup variant="flush" >
            <Form  >
            <ListGroup.Item style={{paddingLeft:'5%', backgroundColor:'#0d47a1', paddingTop:'10%', width:'50%'}}>
                <h4>Twandikire</h4>
            </ListGroup.Item>
                <Form.Control style={{ width:'90%'}}  type="email" placeholder="Your email address..." />
                <Form.Control style={{ marginTop:'2%', width:'90%'}} as="textarea" placeholder="Your message..." rows="3" />
                <Button  style={{marginTop:'2%', marginBottom:'10%'}} variant="primary" type="submit">Ohereza</Button>
            </Form>
        </ListGroup>
        </Col>
    </Row>

    )
 
}
 
