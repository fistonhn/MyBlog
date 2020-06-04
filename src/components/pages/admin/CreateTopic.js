import React from 'react'
import LogoutHeader from '../../layout/LogoutHeader'
import Footer from '../../layout/Footer'
import { Col, Row, ListGroup, Button, Form } from 'react-bootstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}


function CreatePost() {
    return (
        <div>
            <LogoutHeader /> 
            <Row >
                <Col  lg={3} md={3} xs={12}  style={{height:'auto', background:'#0d47a1'}}>
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
                <Col lg={9} md={9} xs={12}  style={{height:'auto', padding:'5% 8%',}}>
                    <div className="mb-3">
                        <Button action href="/CreateTopic" variant="primary" size="md">
                        Add topic
                        </Button>{' '}
                        <Button action href="/ManageTopics" variant="primary" size="md">
                        Manage topics
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center', fontFamily:"roboto", fontSize:'2rem', overflow:'hidden', padding:'10px'}}>Create topic</h2>
                    <Form.Group>
                        <Form.Label><h5>Name</h5></Form.Label>
                        <Form.Control type="text"/>
                        <div className="App">
                            <h5 style={{textAlign:'center', fontFamily:"roboto", fontSize:'2rem', overflow:'hidden', padding:'10px'}}>Description</h5>
                            <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Write somethings here!</p>"
                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                            />
                        </div>
                        <Button type="submit" style={{marginTop:'15px'}} variant="primary" size="md">
                        Save topic
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}

export default CreatePost
