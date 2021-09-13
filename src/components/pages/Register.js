import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { Col, Row, ListGroup, Button, Form } from 'react-bootstrap';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle = {
  color: '#fff',
  backgroundColor: 'inherit',
  paddingLeft: '5%',
  borderBottom: '2px dotted #02031c',
  width: '105%',
};

class Register extends React.Component {
    state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      fireRedirect: false,
      errors: '',
    }

      onCreateFirstName = (e) => {
        this.setState({

          firstName: e.target.value,
        });
      }

      onCreateLastName = (e) => {
        this.setState({

          lastName: e.target.value,
        });
      }

       onCreateEmail = (e) => {
         this.setState({

           email: e.target.value,
         });
       }

      onCreatePassword= (e) => {
        this.setState({
          password: e.target.value,
        });
      }

      onConfirmPassword= (e) => {
        this.setState({
          confirmPassword: e.target.value,
        });
      }

    dataSubmit = (e) => {
      e.preventDefault();

      if (this.state.password != this.state.confirmPassword) {
        this.setState({ errors: "Passwords don't match." });
        setTimeout(() => this.setState({ errors: ' ' }), 3000);
      } else {
        const user = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          isAdmin: false,
          password: this.state.password,
        };

        Axios.post('http://localhost:5000/api/v2/auth/signup', user)
          .then((res) => {
            localStorage.setItem('token', res.data.data.token);
            if (res.data.status === 201) {
              this.setState({ fireRedirect: true });
            } else if (res.data.error) {
              this.setState({
                errors: res.data.error,
              });
            }
          })
          .catch((err) => {
            if (err.response) {
              this.setState({ errors: err.response.data.error });

              setTimeout(() => this.setState({ errors: ' ' }), 3000);
              console.log(err.response.data);
            }
          });
      }
    }

    render() {
      if (this.state.fireRedirect) {
        return <Redirect to={'/CreatePost'}/>;
      }
      return (
        <div>
            <Header />
            <Row>
                <Col style={{ height: '600px', background: '#0d47a1' }} xs={3}>
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
                <Col style={{ height: '600px', padding: '40px 100px 100px', overflowY: 'scroll' }} xs={9}>
                <div style={{ textAlign: 'center', marginBottom: '10px', fontSize: '1.7rem', backgroundColor: '#B73225' }}> {this.state.errors} </div>
                    <h2 style={{ textAlign: 'center', paddingBottom: '20px', fontFamily: 'roboto', fontSize: '2rem', overflow: 'hidden' }}>Sign up</h2>
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
                    <Form.Group onChange={this.onConfirmPassword}>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button onClick={this.dataSubmit} type="submit" style={{ marginTop: '15px' }} variant="primary" size="md">
                    Sign up
                    </Button>
                    </Form>
                    <div style={{ marginTop: '15px', float: 'right' }}><p>Alread have an Account ? </p>
                        <Button action href="/Login" style={{ marginTop: '-10px', float: 'right' }} variant="primary" size="md">
                        Login
                        </Button>
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>
      );
    }
}

export default Register;
