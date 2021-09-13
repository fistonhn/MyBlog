import React from 'react';
import Axios from 'axios';
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
  fontSize: '0.9rem',

};

const token = localStorage.getItem('token');
const config = {
  headers: {

    Authorization: token,
  },
};

class ManageDiactivatedTopics extends React.Component {
    state = {
      topics: [],
      news: [],
      showMessage: '',
      confirmDeleteModel: '',
      confirmDeleteDeactivate: '',
      errors: '',
      openDetails: '',
    }

    componentDidMount() {
      Axios.get('http://localhost:5000/api/v2/topics/inactive', config)
        .then((res) => this.setState({ topics: res.data.data }))
        .catch((err) => {
          if (err.response) {
            console.log(this.state.id);
            console.log(err.response.data);
          }
        });
    }

    handleConfirmDelete = (id) => (
      this.setState({
        confirmDeleteModel:
        <>
          <Modal.Dialog style={{ backgroundColor: '#B73225' }}>
            <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#B73225' }}>
              <Modal.Title> Want To Delete This Topic... sure ?</Modal.Title>
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
        Axios.delete(`http://localhost:5000/api/v2/topic/${id}`, config)
          .then((res) => {
            this.setState({
              showMessage:
            <>
            <Modal.Dialog >
              <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
                <Modal.Title> Topic Successfully Deleted</Modal.Title>
              </Modal.Header>
            </Modal.Dialog>
        </>,
              confirmDeleteModel: '',
              topics: [...this.state.topics.filter((topic) => topic.id !== id)],
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

      // deactivate topics

      handleConfirmDeactivate = (id) => (
        this.setState({
          confirmDeleteDeactivate:
          <>
            <Modal.Dialog style={{ backgroundColor: '#B73225' }}>
              <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#B73225' }}>
                <Modal.Title> Want To Deactivate this Topic... sure ?</Modal.Title>
              </Modal.Header>

              <Modal.Body style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#B73225' }}>
                <p style={{ textAlign: 'center', color: 'white', fontSize: '1.1rem' }}>You will be able to Deactivate back through activate button above !! </p>
              </Modal.Body>

              <Modal.Footer style={{ backgroundColor: '#B73225' }}>
                <Button onClick={() => this.setState({ confirmDeleteDeactivate: '' })} variant="secondary">CANCEL</Button>
                <Button onClick={() => this.handleDeactivate(id)} variant="primary">CONFIRM ACTIVATE</Button>
              </Modal.Footer>
            </Modal.Dialog>
        </>,
        })
      )

      handleDeactivate(id) {
        const Deactivate = {
          activated: 'true',
        };
        Axios.patch(`http://localhost:5000/api/v2/topic/${id}`, Deactivate, config)
          .then((res) => {
            this.setState({
              showMessage:
              <>
              <Modal.Dialog >
                <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
                  <Modal.Title> Topic Successfully activated</Modal.Title>
                </Modal.Header>
              </Modal.Dialog>
          </>,
              topics: [...this.state.topics.filter((topic) => topic.id !== id)],
              confirmDeleteDeactivate: '',
            });
            setTimeout(() => this.setState({ showMessage: ' ' }), 3000);
          })
          .catch((err) => {
            if (err.response) { console.log(err.response.data); }
          });
      }

            // views topic details
            handleViewNews = (topic, id) => (
              Axios.get(`http://localhost:5000/api/v2/articles/topic?topic=${topic}`)
                .then((res) => {
                  this.setState({
                    news: res.data.data,
                    openDetails:
                      <>
                        <Modal.Dialog size="lg" style={{ backgroundColor: '#4da8da' }}>
                        <Modal.Header style={{ color: 'white', fontSize: '1.3rem', backgroundColor: '#4da8da', fontWeight: 'bold' }}>
                              LIST OF ALL NEWS HAVING BELOW TOPIC
                          </Modal.Header>
                          <div style={{ fontSize: '0.8rem', fontStyle: 'italic', fontWeight: 'bold', backgroundColor: '#4da8da', padding: '0px 20px' }}>
                                <p style={{ color: 'black' }}>TOPIC:{' '} {topic}</p>
                                <p style={{ color: 'black' }}>COUNTNEWS:{' '} {'('} {res.data.data.length} {' news)'}</p>
                          </div>
                          <Modal.Body>
                            <p style={{ height: '200px', overflowY: 'scroll' }}>
                            { res.data.data.map((news) => (
                                <div style={{ border: '5px solid white', padding: '5px', fontSize: '0.8', fontWeight: 'bold', fontStyle: 'italic', color: 'black', backgroundColor: '#eee' }}>
                                  { news.title }
                                </div>
                            ))}
                            </p>
                          </Modal.Body>
                          <Modal.Footer style={{ backgroundColor: '#4da8da' }}>
                            <Button onClick={() => this.setState({ openDetails: '' })} variant="secondary">CLOSE</Button>
                          </Modal.Footer>
                        </Modal.Dialog>
                    </>,
                  });
                  const updateCountNews = {
                    countNews: res.data.data.length,
                  };
                  Axios.patch(`http://localhost:5000/api/v2/topic/${id}`, updateCountNews, config)
                    .then((res) => {
                    })
                    .catch((err) => {
                      if (err.response) { console.log(err.response.data); }
                    });
                })
                .catch((err) => {
                  if (err.response.data) {
                    this.setState({ errors: 'This topic has not yet used, Had never added to any news' });

                    setTimeout(() => this.setState({ errors: ' ' }), 4000);
                  }
                })
            );

            render() {
              return (
        <div>
            <Row >
            <LogoutHeader />
                <Col lg={2} md={3} xs={12} style={{ height: 'auto', background: '#0d47a1' }}>
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
                <Col lg={10} md={9} xs={12} style={{ height: 'auto', padding: '5% 5%' }}>
                <div style={{ position: 'fixed', top: 5, left: 10, right: 10, zIndex: 2 }}> {this.state.openDetails}</div>
                <div style={{ textAlign: 'center', fontSize: '1.3rem', backgroundColor: '#B73225', color: 'white', position: 'fixed', top: 10, left: 10, right: 10, zIndex: 2 }}> {this.state.errors} </div>
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.confirmDeleteModel}</div>
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.confirmDeleteDeactivate}</div>
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.showMessage}</div>
                    <div className="mb-2">
                        <Button action href="/ManageTopics" variant='primary' size="md">
                        Manage Activated Topics
                        </Button>
                    </div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '1.3', overflow: 'hidden', padding: '10px', backgroundColor: '#757575', color: 'white' }}> DEACTIVATED TOPICS</h2>
                    <Table responsive style={{ borderCollapse: 'collapse', fontSize: '1.1rem', borderBottom: '1px solid #d3d3d3' }}>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Topic</th>
                        <th>No.News</th>
                        <th>IsActived</th>
                        <th colSpan="2" style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.topics.map((topic) => (
                        <tr>
                            <td >{topic.id}</td>
                            <td>{topic.topic}</td>
                            <td>{'('} {topic.countnews} {')'}</td>
                            <td>{topic.activated}</td>
                            <td><Button id={topic.id} onClick={(e) => this.handleViewNews(topic.topic, topic.id, e)} style={{ background: 'none', color: 'blue', border: 'none' }} > Details </Button></td>
                            <td><Button onClick={(e) => this.handleConfirmDeactivate(topic.id, e)} style={{ background: 'none', color: 'green', border: 'none' }} >activate</Button></td>
                            <td><Button id={topic.id} onClick={(e) => this.handleConfirmDelete(topic.id, e)} style={{ background: 'none', color: 'red', border: 'none' }} >Delete</Button></td>
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

export default ManageDiactivatedTopics;
