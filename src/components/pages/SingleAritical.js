import React from 'react'
import Axios from 'axios'
import ReactHtmlParser from 'react-html-parser';
import Header from '../layout/Header'
import Tab from '../layout/Tab'
import { Card, Image, Form, Button, Media, Row, Col, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../layout/Footer'

// advert
import addresiya from '../pictures/advert/addresiya_web.gif'
import startimesSMALL from '../pictures/advert/startimesSMALL.gif'
import police from '../pictures/advert/police.gif'
import MKENYA from '../pictures/advert/MKENYA.jpg'



const part3Style= {
    borderBottom:'1px solid #d0d5d8',
    padding:'20px 0',
  
  }

class SingleAritical extends React.Component {

  state = {
     news: [], 
     bestNews:[],
  
    };


    reloadLocation = e => {
      window.location.reload();
    }
  


    componentDidMount() {

      Axios.all([  
        Axios.get(`http://localhost:5000/api/v2/news/${this.props.match.params.id}`),
        Axios.get('http://localhost:5000/api/v2/articles/bestNews'),
        
      ])
        .then(Axios.spread((...res) => {
          this.setState({ 
            news: res[0].data.data,
            bestNews: res[1].data.data, 
    
            })
               
        }))
        .catch(err => {
          if(err.response) {
           
            console.log(err.response.data)
          }
      });
     
    }
      
 render() { 


    // window.scroll({
    //   top: 0, 
    //   left: 0, 
    //   behavior: 'smooth' 
    //  });
    
  
  
    
    return (
        <div>
            <div className="advert">
               <img style={{width:'100%'}} alt="addresiya" src={addresiya}/>
            </div> 
            <Header /> 
            <Tab /> 
            
           
            <Row className="generalRow" style={{padding:'1.2% 7% 7%', borderTop:'1px solid #d0d5d8',}} >
              <Col lg={9} md={12} xs={12}>

              <Card  style={{ border:'none', }}>
              <Card.Title style={{ textAlign:'center',border:'none', }} className="s1title" ><h1 style={{fontWeight:'1000',color:'black', fontSize:'250%', lineHeight:'117%', textAlignLast:'center', borderBottom:'1px solid #d0d5d8e',}}>

              {this.state.news.title}   
            
            </h1></Card.Title>
                    <div  style={{ width: '100%', height:'auto', overflow:'hidden'}}>
                        <Image src={`http://localhost:5000/${this.state.news.urltoimage}`} fluid/>
                    </div> 
                    <Card.Text  style={{  paddingTop:'10px', padding:'2%'}}>
                    { ReactHtmlParser(this.state.news.description) }
                    
                    </Card.Text>
                    <div style={{fontStyle: 'oblique', textAlign:'center', }}>
                       <h6 style={{ fontSize: '1rem', fontFamily:'roboto'}}  > <i style={{ fontSize: '1rem',}} class="material-icons">visibility</i> yarebwe inshuro {this.state.news.views}  |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {this.state.news.createdon}</h6> 
                       <h6 > yanditswe na <i style={{ fontSize: '1rem'}} class="material-icons">person</i> {this.state.news.author}</h6> 
                    </div>
                    <div  style={{color:'black', fontSize:'2rem', width:'100%', textAlign:'center',}}> <i class="fa fa-facebook"></i> <i class="fa fa-youtube"></i> <i class="fa fa-instagram"></i></div>
                  </Card>

              </Col>
   
        {/* Part 2 Advertising and hit news */}
          <Col lg={3} md={12} xs={12}>

             <div style={{paddingTop:'20px'}}>
                  <img alt="startimesSMALL" src={startimesSMALL}/>
                </div>
              <h4 style ={{fontFamily:'roboto', fontStyle:'italic', whiteSpace:'nowrap', margin:'10px', borderBottom:'1px solid black'}} >INKURU ZIGEZWEHO</h4>

              {this.state.bestNews.map((news) => (
                
                <div  onClick={this.reloadLocation}>
                    
                    <Nav.Link style={{ padding:'0px'}}   href={`/SingleArticles/${news.id}/${news.title}`}>
                        <Media style={part3Style}>
                            <Media.Body>
                              <h6 className="hoveringTitle" style={{fontSize:'1.05rem', paddingRight:'5px', maxHeight:'80px', minHeight:'80px', overflow:'hidden'}}> {news.title} </h6>    
                              <medium className="text-muted"><i style={{ fontSize: '1rem'}} class="material-icons">visibility</i> {news.views} views |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon} </medium>            
                            </Media.Body>
                            <div style={{ width: '37%', height:'auto', overflow:'hidden'}}>
                              <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                            </div>
                        </Media>
                    </Nav.Link>
                </div>

                  

              ))}  

             
                         {/* subscribe section */}
                <div style={{background:'#02031c',width:'103%', border:'2px solid red', marginTop:'20px'}}> 
                <Form style={{padding:'5px 10px', paddingRight:'30px'}}>
                    <h5  style={{color:'red', fontFamily:'roboto', margin:'20px 10px', textAlign:'center'}}> IYANDIKISHE</h5>
                    <p style={{color:'#fff', textAlign:'center', fontStyle:'italic', margin:'15px', fontFamily:'roboto'}}>
                      Uzuza imyirondoro yawe inkuru zose zijye zikugeraho kugihe</p>
                    <Form.Control style={{margin:'15px', width:'95%'}} type="text" placeholder="Uzuza Amazina yawe hano" />
                    <Form.Control style={{margin:'15px', width:'95%'}} type="email" placeholder="Uzuza Email yawe hano" />
                    <Form.Text style={{ margin:'15px'}} className="text-muted">
                      Ntamuntu tuzigera dusangiza imyirondoro yawe.
                    </Form.Text>
                    <Button  style={{width:'95%', margin:'10px'}} variant="primary" type="submit">Subscribe</Button>
                </Form>
                </div>

                <div style={{paddingTop:'20px'}}>
                   <img alt="police" src={police}/>
                </div>
              </Col>   
            </Row>
            <div className="advert" style={{padding:'5px 100px 0px', width:'300%'}}>
              <img alt="mount kenya" src={MKENYA}/>
            </div> 
            <Footer />  
        </div>
    );

}
}

export default SingleAritical



