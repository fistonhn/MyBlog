import React from 'react'
import Axios from 'axios';
import LogoutHeader from '../../layout/LogoutHeader'
import Footer from '../../layout/Footer'
import { Col, Row, ListGroup, Button, Form } from 'react-bootstrap';
import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}


class EditPost extends React.Component {
    
    state = {
        title: '',
        description: '',
        author: '',
        isPublished: null,
        success: false,
        responseMessage:''
      }
    
      onPatchTitle = e => {
        this.setState({ 

            title: e.target.value, 
        });
      }   


      onPatchDescription = (value) => {
        this.setState({description:value})
    }

      
      onPatchAuthor = e => {
        this.setState({ 

            author: e.target.value, 
        });
      }   
    
      dataSubmit = id => {

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                
                Authorization: token
            }
        }
        

        const news = {
            title: this.state.title,
            description: this.state.description,
            author: this.state.author,
            isPublished: this.state.isPublished,
          }
      

        Axios.patch(`http://localhost:5000/api/v2/news/${this.props.editSpecificNews.id}`, news, config)
          .then(res => {
              console.log(res.data)
            if(res.data.status === 200) {
                this.setState({ success: true, responseMessage:res.data.message })
              }
            
          })
          .catch(err => {
              if(err.response) {
               
                console.log(err.response.data)
              }
          });
      }

      jodit;
	setRef = jodit => this.jodit = jodit;

      config = {
		readonly: false 
	}

  render() { 
   

    if(this.state.success) {
        window.location.reload();
    }
    return (
        <div>
            <LogoutHeader /> 
            <Row>
                <Col lg={3} md={3} xs={12}  style={{height:'auto', background:'#0d47a1'}}>
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
                <Col  lg={9} md={9} xs={12} style={{height:'auto', padding:'5% 8%',}}>
                    <div className="mb-3">
                        <Button action href="/CreatePost" variant="primary" size="md">
                        Add post
                        </Button>{' '}
                        <Button action href="/ManagePosts" variant="primary" size="md">
                        Manage posts
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center', fontFamily:"roboto", fontSize:'2rem', overflow:'hidden', padding:'10px'}}>Create post</h2>
                    <Form.Group id={ this.props.editSpecificNews.id}>
                        <Form.Label><h6 style={{ fontFamily:"roboto",  overflow:'hidden',}}>Title</h6></Form.Label>
                        <Form.Control defaultValue={this.props.editSpecificNews.title} onChange={this.onPatchTitle} />
                        <div className="App">
                            <h6 style={{ fontFamily:"roboto",  overflow:'hidden',}}>Body</h6>

                            <JoditEditor
                                editorRef={this.setRef}
                                value={this.props.editSpecificNews.description}
                                config={this.config}
                                onChange={this.onPatchDescription}
                            />
                        </div>
                        <Form.Label><h6 style={{ fontFamily:"roboto",  overflow:'hidden',}}>Author</h6></Form.Label>
                        <Form.Control defaultValue={this.props.editSpecificNews.author} onChange={this.onPatchAuthor} />
                        <Button onClick={this.dataSubmit} type="submit" style={{marginTop:'15px'}} variant="primary" size="md">
                        Update post
                        </Button>
                    </Form.Group>
                </Col>
            </Row>
            <Footer />  
        </div>
    );
  }
}

export default EditPost
