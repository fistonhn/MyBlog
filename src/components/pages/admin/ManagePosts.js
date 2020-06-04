import React from 'react'
import Axios from 'axios'
import LogoutHeader from '../../layout/LogoutHeader'
import Footer from '../../layout/Footer'
import { Col, Row, ListGroup, Button, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EditPost from './EditPost';

const listStyle={
    color:'#fff',
    backgroundColor:'inherit',
    paddingLeft:'5%',
    borderBottom: '2px dotted #02031c',
    width:'105%'
}

const token = localStorage.getItem('token');
const config = {
    headers: {
        
        Authorization: token
    }
}


class ManagePosts extends React.Component {
state = {

    articles: [],
    news:[],
    showNews: false,
    isPublished: '',
    place:''
  }
  

// display all post to admin page..........

  componentDidMount() {
    Axios.get('http://localhost:5000/api/v2/news', config)
    .then(res => this.setState({ articles: res.data.data }))
    .catch(err => {
        if(err.response) {
          console.log(err.response.data)
        }
    }); 
  }

// deleting a single post ................

  handleDelete = id => {

    Axios.delete(`http://localhost:5000/api/v2/news/${id}`, config)
    .then(res =>   this.setState({ articles: [...this.state.articles.filter(news => 
      news.id !== id)] }))

      .catch(err => {
        if(err.response) {
          console.log(err.response.data)
        }
    });
  }


  // editing single post ..........

  editSpesfic (id) {     
  
    Axios.get(`http://localhost:5000/api/v2/news/${id}`)
     .then(res => {
       this.setState({
        news: res.data,
        showNews: true
       });
     })
     .catch(err => {
        if(err.response) {
          console.log(err.response.data)
        }
    });
   }
  
   // placing the news .......................

   changePlace = e => {
    this.setState({ 

      place:  e.target.value,
  });   
  }  


   async choosePlace(id) {  
  
      
      const news = {
        place: this.state.place,
        isPublished: 'UnPublish',
      }
  
    
     Axios.patch(`http://localhost:5000/api/v2/news/${id}`, news, config)
      .then(res => {
    
      
      })
      .catch(err => {
          if(err.response) {
            console.log(err.response.data)
          }
      });
      window.location.reload();
  }






   // publish or unplish news ...................

  async handlePublish (id) {  
           
  await Axios.get(`http://localhost:5000/api/v2/news/${id}`)
     .then(res => {
       this.setState({
        news: res.data
       });
      
     })
     .catch(err => {
        if(err.response) {
          console.log(err.response.data)
        }
    })


    if(this.state.news.data.ispublished === 'UnPublish'){
        this.setState({ 

            isPublished: 'Publish' 
        });
    }
    else {
        this.setState({ 

            isPublished: 'UnPublish' 
        });
    }

    
          const news = {
            isPublished: this.state.isPublished
          } 
        
  
   Axios.patch(`http://localhost:5000/api/v2/news/${id}`, news, config)
    .then(res => {
        
      
    })
    .catch(err => {
        if(err.response) {
          console.log(err.response.data)
        }
    });
    window.location.reload();
}
    render() {
       
        if(this.state.showNews === true) {
            
            return <EditPost editSpecificNews={this.state.news.data} />
            
        }
        
      
    return (
        <div>
            <LogoutHeader /> 
            <Row >
                <Col lg={2} md={2} xs={12}  style={{height:'auto', background:'#0d47a1'}}>
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
                <Col lg={10} md={10} xs={12} style={{height:'auto', padding:'5% 4%',}} >
                    <div className="mb-2">
                        <Button action href="/CreatePost" variant="primary" size="md">
                        Add post
                        </Button>{' '}
                        <Button action href="/ManagePosts" variant="primary" size="md">
                        Manage posts
                        </Button>
                    </div>
                    <h2 style={{textAlign:'center', fontFamily:"roboto", fontSize:'2rem', overflow:'hidden', padding:'10px'}}>Manage posts</h2>
                    <Table responsive style={{borderCollapse:'collapse', fontSize:'1.1rem', borderBottom:'1px solid #d3d3d3'}}>
                    <thead >
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th  style={{textAlign:'center'}}>Place</th>
                        <th colSpan="3" style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.articles.map((news) => (
                        <tr id={news.id}>
                            <td >{news.id}</td>
                            <td>{news.title}</td>
                            <td>{news.author}</td>
                            <td>
                            <Form  >
                                <Form.Control   onChange={this.changePlace} size="lg" as="select" custom> 
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
                                <Button  onClick={(e) => this.choosePlace(news.id, e)} style={{ color:'white', border:'none'}} >Placing and Publish</Button>
                            </Form>
                            </td>
                                <td><Button onClick={(e) => this.handlePublish(news.id, e)} isPublished={news.ispublished} style={{background:'none', color:'blue', border:'none'}} >{news.ispublished}</Button></td>
                                <td><Button onClick={(e) => this.editSpesfic(news.id, e)} style={{background:'none', color:'green', border:'none'}} >Edit</Button></td>
                                <td><Button id={news.id} onClick={(e) => this.handleDelete(news.id, e)} style={{background:'none', color:'red', border:'none'}} >Delete</Button></td>                          
                            </tr>
                    ))}  
                    </tbody>
                    </Table>
                </Col>
            </Row>
            <Footer />  
        </div>
    )
 }
}

export default ManagePosts
