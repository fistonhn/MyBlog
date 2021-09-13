import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { Col, Row, ListGroup, Button, Table, Modal } from 'react-bootstrap';
import LogoutHeader from '../../layout/LogoutHeader';
import Footer from '../../layout/Footer';
import EditUser from './EditUser';
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle = {
  color: '#fff',
  backgroundColor: 'inherit',
  paddingLeft: '5%',
  borderBottom: '2px dotted #02031c',
  width: '105%',
  fontSize: '1rem',

};

const token = localStorage.getItem('token');
const config = {
  headers: {

    Authorization: token,
  },
};

class ManageUsers extends React.Component {
    state = {
      users: [],
      oneUser: [],
      showNews: false,
      showMessage: '',
      confirmDeleteModel: '',
      fireRedirect: false,
    }

    componentDidMount() {
      Axios.get('http://localhost:5000/api/v2/auth', config)
        .then((res) => this.setState({ users: res.data.data }))
        .catch((err) => {
          if (err.response) {
            this.setState({ fireRedirect: true });
          }
        });
    }

    handleConfirmDelete = (id) => (
      this.setState({
        confirmDeleteModel:
        <>
          <Modal.Dialog style={{ backgroundColor: '#B73225' }}>
            <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#B73225' }}>
              <Modal.Title> Want To Delete This User... sure ?</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#B73225' }}>
              <p style={{ textAlign: 'center', color: 'white', fontSize: '1.1rem' }}>You won't be able to undo if you confirm delete !! </p>
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: '#B73225' }}>
              <Button onClick={() => this.setState({ confirmDeleteModel: '' })} variant="secondary">CANCEL</Button>
              <Button onClick={() => this.handleDelete(id)} variant="primary">CONFIRM DELETE</Button>
            </Modal.Footer>
          </Modal.Dialog>
      </>,
      })
    )

      handleDelete = (id) => {
        Axios.delete(`http://localhost:5000/api/v2/auth/${id}`, config)
          .then((res) => {
            this.setState({
              showMessage:
            <>
            <Modal.Dialog >
              <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
                <Modal.Title> User Successfully Deleted</Modal.Title>
              </Modal.Header>
            </Modal.Dialog>
        </>,
              confirmDeleteModel: '',
              users: [...this.state.users.filter((user) => user.id !== id)],
            });
            setTimeout(() => this.setState({ showMessage: ' ' }), 3000);
          })

          .catch((err) => {
            if (err.response) {
              console.log(this.state.id);
              console.log(err.response.data);
            }
          });
      }

      handleEdit(id) {
        Axios.get(`http://localhost:5000/api/v2/auth/${id}`, config)
          .then((res) => {
            this.setState({
              oneUser: res.data,
              showNews: true,
            });
          })
          .catch((err) => {
            if (err.response) {
              console.log(err.response.data);
            }
          });
      }

      render() {
        if (this.state.showNews === true) {
          return <EditUser editOneUser={this.state.oneUser.data} />;
        }
        if (this.state.fireRedirect) {
          return <Redirect to={'/CreatePost'}/>;
        }
        return (
        <div>
            <Row >
            <LogoutHeader />
                <Col lg={3} md={3} xs={12} style={{ height: 'auto', background: '#0d47a1' }}>
                <ListGroup variant="flush" >
                    <ListGroup.Item action href="/ManagePosts" style={listStyle}>
                    MANAGE POSTS
                    </ListGroup.Item>
                    <ListGroup.Item action href="/ManageUsers" style={listStyle}>
                    MANAGE USERS
                    </ListGroup.Item>
                    <ListGroup.Item action href="/ManageTopics" style={listStyle}>
                    MANAGE TOPICS
                    </ListGroup.Item>
                    <ListGroup.Item action href="/ManageComments" style={listStyle}>
                    MANAGE COMMENTS
                    </ListGroup.Item>
                </ListGroup>
                </Col>
                <Col lg={9} md={9} xs={12} style={{ height: 'auto', padding: '5% 8%' }}>
                <div style={{ position: 'fixed', top: 10, left: 10, right: 10, zIndex: 2 }}> {this.state.confirmDeleteModel}</div>
                <div style={{ position: 'fixed', top: 10, left: 10, right: 10, zIndex: 2 }}> {this.state.showMessage}</div>

                    <div className="mb-2">
                        <Button action href="/CreateUser" variant="primary" size="md">
                        Add user
                        </Button>{' '}
                        <Button action href="/ManageUsers" variant="primary" size="md">
                        Manage users
                        </Button>
                    </div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '2rem', overflow: 'hidden', padding: '10px' }}>Manage users</h2>
                    <Table responsive style={{ borderCollapse: 'collapse', fontSize: '1.1rem', borderBottom: '1px solid #d3d3d3' }}>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>UserNames</th>
                        <th>IsAdmin</th>
                        <th colSpan="2" style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map((user) => (
                        <tr>
                            <td >{user.id}</td>
                            <td>{`${user.firstname} ${user.lastname}`}</td>
                            <td>{user.isadmin}</td>
                            <td><Button onClick={(e) => this.handleEdit(user.id, e)} style={{ background: 'none', color: 'green', border: 'none' }} >Edit</Button></td>
                            <td><Button id={user.id} onClick={(e) => this.handleConfirmDelete(user.id, e)} style={{ background: 'none', color: 'red', border: 'none' }} >Delete</Button></td>
                        </tr>
                    ))}
                    </tbody>
                    </Table>
                </Col>
            </Row>
            <Footer />
        </div>
        );
      }
}

export default ManageUsers;
