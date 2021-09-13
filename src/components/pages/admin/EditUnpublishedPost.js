import React from 'react';
import Axios from 'axios';
import { Col, Row, ListGroup, Button, Form, Modal } from 'react-bootstrap';
import QuillEditor from './Editor/QuillEditor.updating';
import Footer from '../../layout/Footer';
import LogoutHeader from '../../layout/LogoutHeader';

const listStyle = {
  color: '#fff',
  backgroundColor: 'inherit',
  paddingLeft: '5%',
  borderBottom: '2px dotted #02031c',
  width: '105%',
  fontSize: '0.9rem',

};

class EditPost extends React.Component {
    state = {
      title: '',
      description: '',
      author: '',
      isPublished: null,
      success: false,
      responseMessage: '',
      showMessage: '',
    }

    onEditorChange = (value) => {
      this.setState({

        description: value,
      });
    }

  onFilesChange = (files) => {
    this.setState({

      urlToImage: files,
    });
  }

      onPatchTitle = (e) => {
        this.setState({

          title: e.target.value,
        });
      }

      onPatchAuthor = (e) => {
        this.setState({

          author: e.target.value,
        });
      }

      dataSubmit = (id) => {
        const token = localStorage.getItem('token');
        const config = {
          headers: {

            Authorization: token,
          },
        };

        const news = {
          title: this.state.title,
          description: this.state.description,
          author: this.state.author,
          isPublished: this.state.isPublished,
        };

        Axios.patch(`http://localhost:5000/api/v2/news/unpublished/${this.props.editSpecificNews.id}`, news, config)
          .then((res) => {
            this.setState({
              showMessage:
          <>
            <Modal.Dialog >
              <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
                <Modal.Title> News Successfully updated</Modal.Title>
              </Modal.Header>
            </Modal.Dialog>
          </>,
            });
            setTimeout(() => this.setState({ showMessage: ' ' }), 3000);
          })
          .catch((err) => {
            if (err.response) {
              console.log(err.response.data);
            }
          });
      }

      render() {
        return (
        <div>
            <Row>
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
                <Col lg={10} md={10} xs={12} style={{ height: 'auto', padding: '5% 5%' }}>
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.showMessage}</div>
                    <div className="mb-3">
                        <Button onClick={this.dataSubmit} type="submit" variant="primary" size="md">
                          Update post
                        </Button>{' '}
                        <Button action href="/UnpublishedPosts" size="md" style={{ backgroundColor: '#B73225', color: 'white', fontFamily: 'roboto', border: '#B73225' }}>
                          UnPublished Posts
                        </Button>
                    </div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '2rem', overflow: 'hidden', padding: '10px' }}>Create post</h2>
                    <Form.Group id={ this.props.editSpecificNews.id}>
                        <Form.Label><h6 style={{ fontFamily: 'roboto', overflow: 'hidden' }}>Title</h6></Form.Label>
                        <Form.Control defaultValue={this.props.editSpecificNews.title} onChange={this.onPatchTitle} />
                        <div className="App">
                            <h6 style={{ fontFamily: 'roboto', overflow: 'hidden' }}>Body</h6>

                            <QuillEditor
                              value={this.props.editSpecificNews.description}
                              onEditorChange={this.onEditorChange}
                              onFilesChange={this.onFilesChange}
                          />

                        </div>
                        <Form.Label><h6 style={{ fontFamily: 'roboto', overflow: 'hidden' }}>Author</h6></Form.Label>
                        <Form.Control defaultValue={this.props.editSpecificNews.author} onChange={this.onPatchAuthor} />
                        <Button onClick={this.dataSubmit} type="submit" style={{ marginTop: '15px' }} variant="primary" size="md">
                        Update post
                        </Button> {' '}
                        <Button action href="/ManagePosts" style={{ marginTop: '15px', backgroundColor: '#B73225', border: '#B73225' }} size="md">
                        Cancel
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
            <Footer />
        </div>
        );
      }
}

export default EditPost;
