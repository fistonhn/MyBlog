import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router';
import { Col, Row, ListGroup, Button, Form, Modal } from 'react-bootstrap';
import LogoutHeader from '../../layout/LogoutHeader';
import Footer from '../../layout/Footer';
import QuillEditor from './Editor/QuillEditor';

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

// eslint-disable-next-line no-underscore-dangle

class CreatePost extends React.Component {
  state = {
    title: '',
    description: '',
    urlToImage: '',
    author: '',
    topic: '',
    category: '',
    isPublished: 'false',
    place: 'inkuruNyamukuru8',
    fireRedirect: false,
    errors: '',
    topics: [],
    openCreateTopicForm: '',
    newTopic: '',
    countNews: 0,
    activated: 'true',
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

    onCreateTitle = (e) => {
      this.setState({

        title: e.target.value,
      });
    }

     onCreateUrlToImage = (e) => {
       this.setState({

         urlToImage: e.target.files[0],
       });
     }

    onCreateAuthor = (e) => {
      this.setState({

        author: e.target.value,
      });
    }

    onGetTopic = (e) => {
      this.setState({
        topic: e.target.value,
      });
    }

    onCreateCategory = (e) => {
      this.setState({
        category: e.target.value,
      });
    }

    dataSubmit = (e) => {
      e.preventDefault();

      let allData = new FormData();

      allData.append('topic', this.state.topic);
      allData.append('title', this.state.title);
      allData.append('description', this.state.description);
      allData.append('urlToImage', this.state.urlToImage);
      allData.append('author', this.state.author);
      allData.append('category', this.state.category);
      allData.append('isPublished', this.state.isPublished);
      allData.append('place', this.state.place);

      Axios.post('http://localhost:5000/api/v2/news', allData, config)
        .then((res) => {
          if (res.data.status === 201) {
            setTimeout(() => this.setState({ fireRedirect: true }), 3000);
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
          }
        });
    }

    // get all active topics
    componentDidMount() {
      Axios.get('http://localhost:5000/api/v2/topics/active', config)
        .then((res) => this.setState({ topics: res.data.data }))
        .catch((err) => {
          if (err.response) {
            this.setState({ errors: err.response.data.error });

            setTimeout(() => this.setState({ errors: ' ' }), 3000);
          }
        });
    }

    //   creating new topic

          handleOpenCreateTopicForm = () => (
            this.setState({
              openCreateTopicForm:
              <>
                <Modal.Dialog style={{ backgroundColor: '#4da8da' }}>
                  <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#4da8da' }}>
                        <Form>
                            <Form.Group style={{ width: '200%' }}>
                                <Form.Control onChange={this.onCreateTopic} placeholder="Enter New Topic" />
                            </Form.Group>
                        </Form>
                   </Modal.Header>

                  <Modal.Footer style={{ backgroundColor: '#4da8da' }}>
                    <Button onClick={() => this.setState({ openCreateTopicForm: '' })} variant="secondary">CANCEL</Button>
                    <Button onClick={() => this.handleCreateTopic()} variant="primary">SAVE TOPIC</Button>
                  </Modal.Footer>
                </Modal.Dialog>
            </>,
            })
          )

          onCreateTopic= (e) => {
            this.setState({
              newTopic: e.target.value,
            });
          }

          handleCreateTopic = () => {
            const topic = {
              countNews: 0,
              topic: this.state.newTopic,
              activated: 'true',
            };

            Axios.post('http://localhost:5000/api/v2/topic', topic, config)
              .then((res) => {
                if (res.data.status === 201) {
                  window.location.reload();
                } else if (res.data.error) {
                  this.setState({
                    errors: res.data.error,
                  });
                  setTimeout(() => this.setState({ errors: ' ' }), 3000);
                }
              })
              .catch((err) => {
                if (err.response) {
                  this.setState({ errors: err.response.data.error });

                  setTimeout(() => this.setState({ errors: ' ' }), 3000);
                }
              });
          }

          render() {
            if (this.state.fireRedirect) {
              return <Redirect to={'/UnpublishedPosts'}/>;
            }

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
              <Col lg={10} md={10} xs={12} style={{ height: 'auto', padding: '5% 5%' }} >
              <div style={{ textAlign: 'center', marginBottom: '10px', fontSize: '1.3rem', backgroundColor: '#B73225', position: 'fixed', top: 5, left: 5, right: 5, zIndex: 3 }}> {this.state.errors} </div>

                  <div className="mb-3">
                      <Button onClick={this.dataSubmit} type="submit" variant="primary" size="md">
                      Save post
                      </Button>{' '}
                      <Button action href="/UnpublishedPosts" size="md" style={{ backgroundColor: '#B73225', color: 'white', fontFamily: 'roboto', border: '#B73225' }}>
                          UnPublished Posts
                      </Button>
                  </div>
                  <h2 style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '2rem', overflow: 'hidden', padding: '10px', backgroundColor: '#4da8da', color: 'white' }}>CREATE POST</h2>
                  <Form.Group >
                      <div style={{ marginBottom: '1px' }}>
                          <Form.Label><h6 style={{ marginBottom: '1px', fontFamily: 'roboto' }}>Topics </h6></Form.Label>
                            <Form.Control onChange={this.onGetTopic} as="select" custom >
                              {this.state.topics.map((topic) => (
                                <option>{topic.topic}</option>
                              ))}
                            </Form.Control>
                            <Button onClick={() => this.handleOpenCreateTopicForm()} variant="primary" size="md">
                              Add New Topic
                            </Button>
                            <div style={{ zIndex: 2 }}> {this.state.openCreateTopicForm}</div>

                      </div>
                      <Form.Label><h6 style={{ marginBottom: '1px', fontFamily: 'roboto' }}>Title</h6></Form.Label>
                      <Form.Control placeholder="Title" type="text" name="title" onChange={this.onCreateTitle} />
                      <div className='editor'>
                          <h6 style={{ marginTop: '15px', fontFamily: 'roboto' }}>Body</h6>

                          <QuillEditor
                              placeholder={'Start Posting Something'}
                              onEditorChange={this.onEditorChange}
                              onFilesChange={this.onFilesChange}
                          />
                      </div>
                      <Row>
                          <Col>
                              <div className="mb-3">
                                  <Form.File id="formcheck-api-regular">
                                      <Form.File.Label><h6 style={{ marginTop: '15px', marginBottom: '1px', fontFamily: 'roboto' }}>Image</h6></Form.File.Label>
                                      <Form.File onChange={this.onCreateUrlToImage}/>
                                  </Form.File>
                              </div>
                          </Col>
                          <Col>
                          <Form.Label><h6 style={{ marginTop: '15px', marginBottom: '1px', fontFamily: 'roboto' }}>Author</h6></Form.Label>
                          <Form.Control onChange={this.onCreateAuthor} placeholder="Author" />
                          </Col>
                      </Row>
                      <Form.Label><h6 style={{ marginBottom: '1px', fontFamily: 'roboto' }}>Categories</h6></Form.Label>
                      <Form.Control size="lg" onChange={this.onCreateCategory} as="select" custom>
                          <option>-------------</option>
                          <option>Imyidagaduro</option>
                          <option>Siporo</option>
                          <option>Politiki</option>
                          <option>Ubukungu</option>
                          <option>Tekinologi</option>
                          <option>Ubuzima</option>
                      </Form.Control>
                      <Button onClick={this.dataSubmit} type="submit" style={{ marginTop: '15px' }} variant="primary" size="md">
                      Save post
                      </Button>
                  </Form.Group>
              </Col>
          </Row>
          <Footer />
      </div>
            );
          }
}

export default CreatePost;
