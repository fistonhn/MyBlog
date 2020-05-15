import React from 'react'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Row, ListGroup, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}


function Register() {
    return (
        <div>
            <Header /> 
            <Row>
                <Col  style={{height:'600px', background:'#0d47a1'}} xs={3}>
                <ListGroup variant="flush" >
                    <ListGroup.Item action href="/" style={listStyle}>
                    Home
                    </ListGroup.Item>
                    <ListGroup.Item action href="/Contact" style={listStyle}>
                    Contact us
                    </ListGroup.Item>
                    <ListGroup.Item action href="/About" style={listStyle}>
                    About us
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col style={{height:'600px', padding:'40px 100px 100px', overflowY:'scroll'}}  xs={9}>
                    <h2 style={{textAlign:'center', paddingBottom:'20px'}}>Sign up</h2>
                    <Form>
                    <Form.Group controlId="formGroupName">
                    <Form.Row>
                        <Col>
                        <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Label><h5>Role</h5></Form.Label>
                    <Form.Control size="sm" as="select" custom>
                        <option>Author</option>
                    </Form.Control>
                    <Button type="submit" style={{marginTop:'15px'}} variant="primary" size="md">
                    Sign up
                    </Button>
                    </Form>
                    <div style={{marginTop:'15px', float:'right'}}><p>Alread have an Account ? </p>
                        <Button action href="/Login" style={{marginTop:'-10px', float:'right'}} variant="primary" size="md">
                        Login
                        </Button>
                    </div>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}

export default Register
