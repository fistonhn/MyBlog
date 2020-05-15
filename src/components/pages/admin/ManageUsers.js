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


function ManageUsers() {
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
                        <Button action href="/CreateUser" variant="primary" size="md">
                        Add user
                        </Button>{' '}
                        <Button action href="/ManageUsers" variant="primary" size="md">
                        Manage users
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center'}}>Manage users</h2>
                    <Table style={{borderCollapse:'collapse', fontSize:'1.1rem', borderBottom:'1px solid #d3d3d3'}}>
                    <thead>
                        <tr>
                        <th>N</th>
                        <th>UserName</th>
                        <th>Role</th>
                        <th colSpan="2" style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>EricSEBA</td>
                        <td>Admin</td>
                        <td style={{color:'green'}}>Edit</td>
                        <td style={{color:'red'}}>Delete</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Innocent</td>
                        <td>Author</td>
                        <td style={{color:'green'}}>Edit</td>
                        <td style={{color:'red'}}>Delete</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Alice</td>
                        <td>Author</td>
                        <td style={{color:'green'}}>Edit</td>
                        <td style={{color:'red'}}>Delete</td>
                        </tr>
                    </tbody>
                    </Table>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}

export default ManageUsers
