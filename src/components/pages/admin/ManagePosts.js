import React from 'react';
import Axios from 'axios';
import { Col, Row, ListGroup, Button, Table, Form, Modal } from 'react-bootstrap';
import LogoutHeader from '../../layout/LogoutHeader';
import Footer from '../../layout/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditPost from './EditPost';
import ScrollTopButton from '../../layout/ScrollTopButton';

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

class ManagePosts extends React.Component {
state = {

  articles: [],
  news: [],
  isPublished: '',
  place: '',
  showMessage: '',
  confirmDeleteModel: '',
  noNewsFound: '',
}

// display all post to admin page..........

onDisplayByPlace = (e) => {
  if (e.target.value === 'AllNews') {
    Axios.get('http://localhost:5000/api/v2/articles/AllNews', config)
      .then((res) => {
        this.setState({
          articles: res.data.data,
        });
      });
  } else if (e.target.value === 'Display by news place') {
    Axios.get('http://localhost:5000/api/v2/articles/AllNews', config)
      .then((res) => {
        this.setState({
          articles: res.data.data,
        });
      });
  } else {
    Axios.get('http://localhost:5000/api/v2/articles/AllNews', config)
      .then((res) => {
        this.setState({
          articles: res.data.data.filter((element) => element.place == e.target.value),
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }
}

componentDidMount() {
  Axios.get('http://localhost:5000/api/v2/articles/AllNews', config)
    .then((res) => {
      this.setState({
        articles: res.data.data,
      });
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.data);
      }
    });
}

// deleting a single post ................

  handleConfirmDelete = (id) => (
    this.setState({
      confirmDeleteModel:
      <>
        <Modal.Dialog style={{ backgroundColor: '#B73225' }}>
          <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#B73225' }}>
            <Modal.Title> Want To Delete This News... sure ?</Modal.Title>
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
    Axios.delete(`http://localhost:5000/api/v2/news/${id}`, config)
      .then((res) => {
        this.setState({
          showMessage:
      <>
      <Modal.Dialog >
        <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
          <Modal.Title> News Successfully Deleted</Modal.Title>
        </Modal.Header>
      </Modal.Dialog>
  </>,
          confirmDeleteModel: '',
          articles: [...this.state.articles.filter((news) => news.id !== id)],
        });
        setTimeout(() => this.setState({ showMessage: ' ' }), 3000);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }

  // editing single post ..........

  editSpesfic(id) {
    Axios.get(`http://localhost:5000/api/v2/news/${id}`)
      .then((res) => {
        this.setState({
          news: res.data,
          showNews: true,
        });
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  }

  // placing the news .......................

   changePlace = (e) => {
     this.setState({

       place: e.target.value,
     });
   }

   async choosePlace(id) {
     const news = {
       place: this.state.place,
       isPublished: 'true',
     };

     Axios.patch(`http://localhost:5000/api/v2/news/${id}`, news, config)
       .then((res) => {
         this.setState({
           showMessage:
       <>
         <Modal.Dialog >
           <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
             <Modal.Title> News Place Successfully Changed</Modal.Title>
           </Modal.Header>
         </Modal.Dialog>
       </>,
         });
         setTimeout(() => this.setState({ showMessage: ' ' }), 3000);
         Axios.get('http://localhost:5000/api/v2/articles/AllNews', config)
           .then((res) => {
             this.setState({
               articles: res.data.data.filter((element) => element.place == this.state.place),
             });
           })
           .catch((err) => {
             if (err.response) {
               console.log(err.response.data);
             }
           });
       });
   }

   // publish or unplish news ...................

   async handlePublish(id) {
     const news = {
       isPublished: 'false',
     };

     Axios.patch(`http://localhost:5000/api/v2/news/${id}`, news, config)
       .then((res) => {
         this.setState({
           showMessage:
     <>
       <Modal.Dialog >
         <Modal.Header style={{ textAlign: 'center', color: 'white', fontSize: '2rem', backgroundColor: '#42ba96' }} >
           <Modal.Title> News Successfully UnPublished</Modal.Title>
         </Modal.Header>
       </Modal.Dialog>
     </>,
           articles: [...this.state.articles.filter((news) => news.id !== id)],
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
     if (this.state.showNews === true) {
       return <EditPost editSpecificNews={this.state.news.data} />;
     }

     return (
        <div>
            <Row >
            <LogoutHeader />
            <ScrollTopButton />
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
                <Col lg={10} md={10} xs={12} style={{ height: 'auto', padding: '5% 4%' }} >
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.confirmDeleteModel}</div>
                <div style={{ position: 'fixed', top: 5, left: 5, right: 5, zIndex: 2 }}> {this.state.showMessage}</div>
                    <div className="mb-2">
                        <Button action href="/CreatePost" variant="primary" size="md">
                        Add Post
                        </Button>{' '}

                        <Button action href="/UnpublishedPosts" size="md" style={{ backgroundColor: '#B73225', color: 'white', fontFamily: 'roboto', border: '#B73225' }}>
                          UnPublished Posts
                        </Button>

                    </div>
                    <Form.Label><h6 style={{ marginBottom: '1px', fontFamily: 'roboto' }}>FILTER: </h6></Form.Label>
                      <Form.Control size="lg" onChange={this.onDisplayByPlace} as="select" custom>
                          <option>Display by news place</option>
                          <option>AllNews</option>
                          <option>inkuruNyamukuru1</option>
                          <option>inkuruNyamukuru8</option>
                          <option>sport1</option>
                          <option>sport4</option>
                          <option>utuntuNutundi1</option>
                          <option>utuntuNutundi3</option>
                          <option>utuntuNutundiMostViews6</option>
                          <option>bestNews6</option>
                          <option>udushya5</option>
                      </Form.Control>
                    <h2 style={{ textAlign: 'center', fontFamily: 'roboto', fontSize: '1.3rem', overflow: 'hidden', padding: '10px', backgroundColor: '#4da8da', color: 'white' }}>ALL PUBLISHED POSTS</h2>
                    <Table responsive style={{ borderCollapse: 'collapse', fontSize: '1.1rem' }}>
                    <thead >
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th style={{ textAlign: 'center' }}>Place</th>
                        <th colSpan="3" style={{ textAlign: 'center' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.articles.map((news) => (
                        <tr id={news.id}>
                            <td style={{ maxHeight: '10px', fontSize: '0.9rem', overflow: 'hidden', borderBottom: '1px solid red' }} >{news.id}</td>
                            <td style={{ maxHeight: '100px', overflow: 'hidden', whiteSpace: 'nowarp', borderBottom: '1px solid red' }}>{news.title}</td>
                            <td>{news.author}</td>
                            <td>
                            <Form >
                                <Form.Control onChange={this.changePlace} size="lg" as="select" custom>
                                    <option selected>{news.place}</option>
                                    <option>inkuruNyamukuru1</option>
                                    <option>inkuruNyamukuru8</option>
                                    <option>sport1</option>
                                    <option>sport4</option>
                                    <option>utuntuNutundi1</option>
                                    <option>utuntuNutundi3</option>
                                    <option>utuntuNutundiMostViews6</option>
                                    <option>bestNews6</option>
                                    <option>udushya5</option>
                                </Form.Control>
                                <Button onClick={(e) => this.choosePlace(news.id, e)} style={{ color: 'white', border: 'none' }} >Change News Place</Button>
                            </Form>
                            </td>
                                <td><Button onClick={(e) => this.handlePublish(news.id, e)} isPublished={news.ispublished} style={{ background: 'none', color: 'blue', border: 'none' }} >UnPublish</Button></td>
                                <td><Button onClick={(e) => this.editSpesfic(news.id, e)} style={{ background: 'none', color: 'green', border: 'none' }} >Edit</Button></td>
                                <td><Button id={news.id} onClick={(e) => this.handleConfirmDelete(news.id, e)} style={{ background: 'none', color: 'red', border: 'none' }} >Delete</Button></td>
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

export default ManagePosts;
