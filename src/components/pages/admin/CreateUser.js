import React from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router'
import LogoutHeader from '../../layout/LogoutHeader'
import Footer from '../../layout/Footer'
import { Col, Row, ListGroup, Button, Form, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}


class CreateUser extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        isAdmin: null,
        password: '',
        fireRedirect: false,
        responseMessage: '',
      }

      onCreateFirstName = e => {
        this.setState({ 

            firstName: e.target.value, 
        });
      }

      onCreateLastName = e => {
        this.setState({ 

            lastName: e.target.value,
        });  
      }    

       onCreateEmail = e => {
        this.setState({ 
   
            email: e.target.value, 
        });
      }  

      onCreateIsAdmin= e => {
        this.setState({ 
            isAdmin: e.target.value,
        });
      }

      onCreatePassword= e => {
        this.setState({ 
            password: e.target.value,
        });
      }



    dataSubmit = e => {
        e.preventDefault();

        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            isAdmin: this.state.isAdmin,
            password: this.state.password,
          }
  


        Axios.post(`http://localhost:5000/api/v2/auth/signup`, user)
          .then(res => {
            console.log(res.data.status)
            if(res.data.status === 201) {
                this.setState({ fireRedirect: true, responseMessage:res.data.message })
              }else if(res.data.error){
                  this.setState({
                  errors:res.data.error
                });
              }
            
          })
          .catch(err => {
              if(err.response) {
                this.setState({ responseMessage: err.response.data.error })
                
                console.log(err.response.data)
              }
          });
      }

 render() { 

    if(this.state.fireRedirect) {
        return <Redirect to={'/ManageUsers'}/>
    }
    if(this.state.responseMessage) {
        return <Alert>
        {this.state.responseMessage}
      </Alert>
    }
    return (
        <div>
            <LogoutHeader /> 
            <Row>
                <Col lg={3} md={3} xs={12}  style={{height:'auto', background:'#0d47a1'}} >
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
                <Col lg={9} md={9} xs={12} style={{height:'auto', padding:'5% 8%',}}>
                    <div className="mb-3">
                        <Button action href="/CreateUser" variant="primary" size="md">
                        Add user
                        </Button>{' '}
                        <Button action href="/ManageUsers" variant="primary" size="md">
                        Manage users
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center', fontFamily:"roboto", fontSize:'2rem', overflow:'hidden', padding:'10px'}}>Create user</h2>
                    <Form>
                    <Form.Group >
                    <Form.Row>
                        <Col>
                        <Form.Control onChange={this.onCreateFirstName} placeholder="First name" />
                        </Col>
                        <Col>
                        <Form.Control onChange={this.onCreateLastName} placeholder="Last name" />
                        </Col>
                    </Form.Row>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control onChange={this.onCreateEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control onChange={this.onCreatePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Label><h5 style={{textAlign:'center', fontFamily:"roboto",  overflow:'hidden',}}>IsAdmin</h5></Form.Label>
                    <Form.Control onChange={this.onCreateIsAdmin} as="select" custom> 
                        <option>-------------</option>
                        <option>true</option>
                        <option>false</option>
                    </Form.Control>
                    <Button onClick={this.dataSubmit} type="submit" style={{marginTop:'10px'}} variant="primary" size="md">
                        Save user
                    </Button>
                    </Form>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}
}

export default CreateUser
