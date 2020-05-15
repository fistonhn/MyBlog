import React from 'react'
import Header from '../../layout/Header'
import Footer from '../../layout/Footer'
import { Col, Row, ListGroup, Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}


function ManagePosts() {
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
                <Col style={{height:'575px', padding:'40px 100px 100px', overflowY:'scroll'}}  xs={9}>
                    <div className="mb-2">
                        <Button action href="/CreatePost" variant="primary" size="md">
                        Add post
                        </Button>{' '}
                        <Button action href="/ManagePost" variant="primary" size="md">
                        Manage posts
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center'}}>Manage posts</h2>
                    <Table style={{borderCollapse:'collapse', fontSize:'1.1rem', borderBottom:'1px solid #d3d3d3'}}>
                    <thead>
                        <tr>
                        <th>N</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th colSpan="3" style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>this is the first post on this website</td>
                        <td>ericSEBA</td>
                        <td style={{color:'green'}}>Edit</td>
                        <td style={{color:'red'}}>Delete</td>
                        <td style={{color:'blue'}}>Publish</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>this is the second post on this website</td>
                        <td>Innocent</td>
                        <td style={{color:'green'}}>Edit</td>
                        <td style={{color:'red'}}>Delete</td>
                        <td style={{color:'blue'}}>Publish</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>this is the thrid post on this website</td>
                        <td>Alice</td>
                        <td style={{color:'green'}}>Edit</td>
                        <td style={{color:'red'}}>Delete</td>
                        <td style={{color:'blue'}}>Publish</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}

export default ManagePosts
