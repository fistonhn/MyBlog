import React from 'react';
import Axios from 'axios';
import { Col, Row, ListGroup, Button, Table, Modal, Card } from 'react-bootstrap';
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
      comments: [],
      singleComment: [],
      isPublished: '',
      showMessage: '',
      confirmDeleteModel: '',
    }

    componentDidMount() {
      Axios.get('http://localhost:5000/api/v2/comments', config)
        .then((res) => this.setState({ comments: res.data.data }))
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
              <Modal.Title> Want To Delete This Comment... sure ?</Modal.Title>
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
        Axios.delete(`http://localhost:5000/api/v2/comment/${id}`, config)
          .then((res) => {
            this.setState({
              showMessage:
            <>
            <Modal.Dialog >
              <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
                <Modal.Title> Comment Successfully Deleted</Modal.Title>
              </Modal.Header>
            </Modal.Dialog>
        </>,
              confirmDeleteModel: '',
              comments: [...this.state.comments.filter((comment) => comment.id !== id)],
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

      async handlePublish(id) {
        await Axios.get(`http://localhost:5000/api/v2/comment/${id}`, config)
          .then((res) => {
            this.setState({
              singleComment: res.data,
            });
          })
          .catch((err) => {
            if (err.response) {
              console.log(err.response.data);
            }
          });

        if (this.state.singleComment.data.ispublished === 'false') {
          this.setState({

            isPublished: 'true',
          });
        } else {
          this.setState({

            isPublished: 'false',
          });
        }

        const oneComment = {
          isPublished: this.state.isPublished,
        };

        Axios.patch(`http://localhost:5000/api/v2/comment/${id}`, oneComment, config)
          .then((res) => {
            this.setState({
              showMessage:
              <>
                <Modal.Dialog >
                  <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
                    <Modal.Title> Comment Successfully UnPublished </Modal.Title>
                  </Modal.Header>
                </Modal.Dialog>
              </>,
              comments: [...this.state.comments.filter((comment) => comment.id !== id)],
            });
            setTimeout(() => this.setState({ showMessage: ' ' }), 3000);
          })
          .catch((err) => {
            if (err.response) { console.log(err.response.data); }
          });
      }

      render() {
        return (
        <div>
            <Row >
            <LogoutHeader />
                <Col lg={2} md={2} xs={12} style={{ height: 'auto', background: '#0d47a1' }}>
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
                <Col lg={10} md={10} xs={12} style={{ height: 'auto', padding: '5% 3%' }}>
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.confirmDeleteModel}</div>
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.showMessage}</div>
                    <div className="mb-2">
                    <Button action href="/UnpublishedComments" size="md" style={{ backgroundColor: '#B73225', color: 'white', fontFamily: 'roboto', border: '#B73225' }}>
                      UnPublished comments
                    </Button>
                    </div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '150%', overflow: 'hidden', padding: '10px', backgroundColor: '#4da8da', color: 'white' }}>PUBLISHED COMMENTS</h2>
                    <Row lg={3} md={2} xs={1}>
                        {this.state.comments.map((comment) => (
                             <Col style={{ background: '#eee' }}>
                                <Card style={{ marginTop: '10px' }}>
                                  <Modal.Title style={{ textAlign: 'center', paddingTop: '10px', fontSize: '0.9rem', borderBottom: '5px solid #eee' }}>{comment.name} {' | '} {comment.email}</Modal.Title>
                                  <Modal.Body>
                                  <p style={{ fontFamily: 'roboto', lineHeight: 1.3, fontSize: '1rem', fontWeight: 'bold', wordBreak: 'break-all' }}>{comment.comment}</p>
                                  <p style={{ fontFamily: 'roboto', lineHeight: 1.3, fontSize: '0.9rem', fontStyle: 'italic' }}>{comment.newstitle}</p>
                                  <div>
                                    <Button onClick={(e) => this.handlePublish(comment.id, e)} style={{ background: 'green', color: 'white', border: 'none' }} size="sm" >UnPublish</Button> {' '}
                                    <Button id={comment.id} onClick={(e) => this.handleConfirmDelete(comment.id, e)} style={{ background: 'red', color: 'white', border: 'none' }} size="sm" >Delete</Button>
                                  </div>
                                  </Modal.Body>
                                </Card>
                            </Col>

                        ))}
                    </Row>
                </Col>
            </Row>
            <Footer />
        </div>
        );
      }
}

export default ManageUsers;
