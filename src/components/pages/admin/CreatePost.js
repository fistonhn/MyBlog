import React from 'react';
import Axios from 'axios';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Redirect } from 'react-router';
import LogoutHeader from '../../layout/LogoutHeader';
import Footer from '../../layout/Footer';
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


class CreatePost extends React.Component {
    
    state = {
        title: '',
        description: '',
        urlToImage: '',
        author: '',
        topic: '',
        isPublished: 'Publish',
        place: 'inkuruNyamukuru8',
        fireRedirect: false,
        errors: '',
      }
    
      onCreateTitle = e => {
        this.setState({ 

            title: e.target.value, 
        });
      }
   
    //   onCreateDescription = (value) => {
    //     this.setState({description:value.getData()})
    // }

    onCreateDescription = (value) => {
        this.setState({description:value})
    }

       onCreateUrlToImage = e => {
        this.setState({ 
   
            urlToImage: e.target.files[0], 
        });
      } 
      
      onCreateAuthor = e => {
        this.setState({ 

            author: e.target.value, 
        });
      }   
      
      onCreateTopic = e => {
        this.setState({ 
            topic: e.target.value,
        });
      }
    
      dataSubmit = e => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        const config = {
            headers: {
                
                Authorization: token
            }
        }
        

        const data = new FormData() 
        
        data.append('title', this.state.title)
        data.append('description', this.state.description)
        data.append('urlToImage', this.state.urlToImage)
        data.append('author', this.state.author)
        data.append('topic', this.state.topic)
        data.append('isPublished', this.state.isPublished)
        data.append('place', this.state.place)


        Axios.post(`http://localhost:5000/api/v2/news`, data, config)
          .then(res => {
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
               
                console.log(err.response.data)
              }
          });
      }

      config = {
		readonly: false 
	}

  render() { 
    if(this.state.fireRedirect) {
        return <Redirect to={'/ManagePosts'}/>
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
                <Col lg={9} md={9} xs={12}  style={{height:'auto', padding:'5% 8%',}} >
                    <div className="mb-3">
                        <Button action href="/CreatePost" variant="primary" size="md">
                        Add post
                        </Button>{' '}
                        <Button action href="/ManagePosts" variant="primary" size="md">
                        Manage posts
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center', fontFamily:"roboto", fontSize:'2rem', overflow:'hidden'}}>CREATE POST</h2>
                    <Form.Group >
                        <Form.Label><h6 style={{marginBottom:'1px', fontFamily:"roboto"}}>Title</h6></Form.Label>
                        <Form.Control placeholder="Title" type="text" name="title" onChange={this.onCreateTitle} />
                        <div className="App">
                            <h6 style={{marginTop:'15px', fontFamily:"roboto"}}>Body</h6>
                           

                            <JoditEditor
                                editorRef={this.setRef}
                                value={this.state.content}
                                config={this.config}
                                onChange={this.onCreateDescription}
                            />

                                                       
                             <CKEditor
                                config={ {
                                    enterMode : CKEditor.ENTER_BR
                                } }

                                editor={ ClassicEditor }
                                onChange={ ( event, editor ) => {
                                    this.onCreateDescription(editor)

                                } }           
                            /> 
                        </div>
                        <Row>
                            <Col>
                                <div className="mb-3">
                                    <Form.File id="formcheck-api-regular">
                                        <Form.File.Label><h6 style={{marginTop:'15px', marginBottom:'1px', fontFamily:"roboto"}}>Image</h6></Form.File.Label>
                                        <Form.File onChange={this.onCreateUrlToImage}/>
                                    </Form.File>
                                </div>
                            </Col>
                            <Col>
                            <Form.Label><h6 style={{marginTop:'15px', marginBottom:'1px', fontFamily:"roboto"}}>Author</h6></Form.Label>
                            <Form.Control onChange={this.onCreateAuthor} placeholder="Author" />
                            </Col>
                        </Row>
                        <Form.Label><h6 style={{marginBottom:'1px', fontFamily:"roboto"}}>Topic</h6></Form.Label>
                        <Form.Control size="lg" onChange={this.onCreateTopic} as="select" custom> 
                            <option>-------------</option>
                            <option>Imyidagaduro</option>
                            <option>Siporo</option>
                            <option>Politiki</option>
                            <option>Ubukungu</option>                           
                            <option>Tekinologi</option>
                            <option>Ubuzima</option>
                        </Form.Control>
                        <Button onClick={this.dataSubmit} type="submit" style={{marginTop:'15px'}} variant="primary" size="md">
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

export default CreatePost
