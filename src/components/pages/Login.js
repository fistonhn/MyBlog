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

class Login extends React.Component {


    state = {
        email: '',
        password: '',
        fireRedirect: false,
        errors: '',
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
            email: this.state.email,
            password: this.state.password,
          }


        Axios.post(`http://localhost:5000/api/v2/auth/signin`, user)
          .then(res => {
            localStorage.setItem('token', res.data.data.token);
            if(res.data.status === 200) {
                
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
                <Col lg={3} md={3} xs={12}  style={{height:'auto', background:'#0d47a1'}}>
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
                <Col  lg={9} md={9} xs={12}  style={{height:'auto', padding:'5% 8%',}}>
                    <h2 style={{textAlign:'center', paddingBottom:'20px', fontFamily:"roboto",fontSize:'2rem', overflow:'hidden' }}>Sign in</h2>
                    <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><h5 style={{fontFamily:"roboto", }}>Email address</h5></Form.Label>
                        <Form.Control onChange={this.onCreateEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                       <p className="text-muted"  style={{fontFamily:"roboto",fontSize:'0.75rem',}} >We'll never share your email with anyone else.</p>
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><h5 style={{fontFamily:"roboto", }}>Password</h5></Form.Label>
                        <Form.Control onChange={this.onCreatePassword} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button onClick={this.dataSubmit} variant="primary" type="submit">
                        Login
                    </Button>
                    </Form>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
}
}

export default Login
