import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Col, Row, ListGroup, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}


function CreateUser() {
    return (
        <div>
            <Header /> 
            <Row>
                <Col  style={{height:'600px', background:'#0d47a1'}} xs={3}>
                <ListGroup variant="flush" >
                    <ListGroup.Item action href="/ManagePosts" style={listStyle}>
                    Manage posts
                    </ListGroup.Item>
                    <ListGroup.Item action href="/ManageUsers" style={listStyle}>
                    Manage users
                    </ListGroup.Item>
                    <ListGroup.Item action href="/ManageTopics" style={listStyle}>
                    Manage topics
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col style={{height:'600px', padding:'40px 100px 100px', overflowY:'scroll'}}  xs={9}>
                    <div className="mb-3">
                        <Button action href="/CreateTopic" variant="primary" size="md">
                        Add user
                        </Button>{' '}
                        <Button action href="/ManageUsers" variant="primary" size="md">
                        Manage users
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center', paddingBottom:'20px'}}>Create user</h2>
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
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Is Admin" />
                    </Form.Group>
                    <Button type="submit" style={{marginTop:'-5px'}} variant="primary" size="md">
                        Save user
                    </Button>
                    </Form>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}

export default CreateUser
