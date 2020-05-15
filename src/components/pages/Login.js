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


function Login() {
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
                    <h2 style={{textAlign:'center', paddingBottom:'20px'}}>Sign in</h2>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h5>Email address</h5></Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                       <p>We'll never share your email with anyone else.</p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><h5>Password</h5></Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    </Form>
                    <div style={{marginTop:'15px', float:'right'}}><p>Don't have an Account ? </p>
                        <Button action href="/Register" style={{marginTop:'-10px', float:'right'}} variant="primary" size="md">
                        Register
                        </Button>
                    </div>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}

export default Login
