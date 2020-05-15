import React from 'react'
import Header from '../../layout/Header'
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
            <Header /> 
            <Row >
                <Col  style={{height:'575px', background:'#0d47a1'}} xs={3}>
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
                <Col style={{height:'600px', padding:'30px 100px 100px', overflowY:'scroll'}}  xs={9}>
                    <div className="mb-3">
                        <Button action href="/CreatePost" variant="primary" size="md">
                        Add post
                        </Button>{' '}
                        <Button action href="/ManagePosts" variant="primary" size="md">
                        Manage posts
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center'}}>Create post</h2>
                    <Form.Group>
                        <Form.Label><h6 style={{marginBottom:'1px'}}>Title</h6></Form.Label>
                        <Form.Control type="text"/>
                        <div className="App">
                            <h6 style={{marginTop:'15px'}}>Body</h6>
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
                        <div className="mb-3">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label><h6 style={{marginTop:'15px', marginBottom:'1px'}}>Image</h6></Form.File.Label>
                            <Form.File />
                            </Form.File>
                        </div>
                        <Form.Label><h6 style={{marginBottom:'1px'}}>Topic</h6></Form.Label>
                        <Form.Control as="select" custom>
                            <option>Entertainment</option>
                            <option>Sports</option>
                            <option>Politics</option>
                            <option>Technology</option>
                            <option>Busness</option>
                        </Form.Control>
                        <Button type="submit" style={{marginTop:'15px'}} variant="primary" size="md">
                        Save post
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}

export default CreatePost
