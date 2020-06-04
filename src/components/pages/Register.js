import React from 'react'
import Axios from 'axios'
import { Redirect } from 'react-router'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { Col, Row, ListGroup, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}


class Register extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        fireRedirect: false,
        errors: '',
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
            isAdmin: false,
            password: this.state.password,
          }


        Axios.post(`http://localhost:5000/api/v2/auth/signup`, user)
          .then(res => {
            localStorage.setItem('token', res.data.data.token);
            if(res.data.status === 201) {
                this.setState({ fireRedirect: true })
              }else if(res.data.error){
                  this.setState({
                  errors:res.data.error
                });
              }
            
          })
          .catch(err => {
              if(err.response) {
               
                console.log(this.state.fireRedirect)
                console.log(err.response.data)
              }
          });
      }

 render() { 

    if(this.state.fireRedirect) {
        return <Redirect to={'/CreatePost'}/>
    }
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
                    <Form.Group>
                        <Form.Control onChange={this.onCreateEmail} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control onChange={this.onCreatePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Form.Label><h5>Role</h5></Form.Label>
                    <Form.Control size="sm" as="select" custom>
                        <option>Author</option>
                    </Form.Control>
                    <Button onClick={this.dataSubmit} type="submit" style={{marginTop:'15px'}} variant="primary" size="md">
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
}

export default Register
