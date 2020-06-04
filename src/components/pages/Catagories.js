import React from 'react'
import Axios from 'axios';

import Header from '../layout/Header'
import Tab from '../layout/Tab'
import { Card, Image, Form, Button, Badge, Media, Row, Col, Carousel, CardColumns, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../layout/Footer'
import igihango2 from '../pictures/DSC_8437.JPG'

// ADVERT
import addresiya from '../pictures/advert/addresiya_web.gif'
import startimesSMALL from '../pictures/advert/startimesSMALL.gif'
import police from '../pictures/advert/police.gif'
import MKENYA from '../pictures/advert/MKENYA.jpg'
import unicafBIG from '../pictures/advert/unicafBIG.jpg'
import aitel from '../pictures/advert/aitel-rwanda.gif'
import KBCwesternUNION from '../pictures/advert/KBCwesternUNION.gif'
import cucinaRESTAURENT from '../pictures/advert/cucinaRESTAURENT.gif'



const part3Style= {
    borderBottom:'1px solid #d0d5d8',
    padding:'20px 0',
  
  }

class Catagories extends React.Component {
 

    state = {

        articles:[],
        bestNews:[],
        mainArticle:[]
      }


      componentDidMount() {
          Axios.all([
            Axios.get(`http://localhost:5000/api/v2/articles/topic/main?topic=${this.props.match.params.id}`),
            Axios.get(`http://localhost:5000/api/v2/articles/topic?topic=${this.props.match.params.id}`),
            Axios.get('http://localhost:5000/api/v2/articles/bestNews'),
          ])
          .then(res => {
            this.setState({ mainArticle: res[0].data.data, articles: res[1].data.data, bestNews: res[2].data.data,  });    
     
          })

          .catch(err => {
            if(err.response) {
             
              console.log(err.response.data)
            }
        });
            
      }
    

 render() { 

    
    return (
        <div>
            <div className="advert">
               <img style={{width:'100%'}} alt="addresiya" src={addresiya}/>
            </div> 
            <Header /> 
            <Tab /> 
            
           
            <Row className="generalRow" style={{padding:'1.2% 3% 3%', borderTop:'1px solid #d0d5d8',}} >
              <Col md={12} lg={9} xs={12}>

             

              {this.state.mainArticle.map((news) => (

              

                   

                             <Nav.Link href={`/SingleArticles/${news.id}/${news.title}`}>
                                    <Card style={{ width: '100%',border:'none',textAlign:'center', padding:'2% 0%', maxHeight:'52rem', overflow:'hidden'}}>
                                          <Card.Title className="s1title" ><h1 style={{fontWeight:'1000',color:'black', fontSize:'250%', lineHeight:'117%', textAlignLast:'center', borderBottom:'1px solid #d0d5d8e',}}>
                                                {news.title}
                                          </h1></Card.Title>
                                              <Card.Body>
                                              <div className="s1subPragraph0" style={{fontStyle: 'oblique' }}>
                                              <h6 > <i style={{ fontSize: '1rem'}} class="material-icons">visibility</i> yarebwe inshuro {news.views}  |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</h6> 
                                              </div>
                                              <div style={{ width: '100%', height:'auto', overflow:'hidden', float:'right',marginLeft:'10px'}}>
                                              <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                                              </div>            
                                      
                                              <p className="s1Pragraph">
                                              
                                              {news.description}
                                              </p>
                                              </Card.Body>
                                              <div className="s1subPragraph" style={{fontStyle: 'oblique' }}>
                                              <h6 > <medium className="text-muted"> <i style={{ fontSize: '1rem'}} class="material-icons">visibility</i> {news.views} views |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</medium></h6> 
                                              <h6 > yanditswe na <i style={{ fontSize: '1rem'}} class="material-icons">person</i> {news.author}</h6> 
                                              </div>
                                        </Card>
                              </Nav.Link>
                        
                                
                           ))}  


                    <div  className="advert" style={{padding:'50px', textAlign:'center',}}>
                    <img alt="unicaf" src={unicafBIG}/>
                    </div>



                {/* section 2 which contain MAIN NEWS */}
                <h5 style={{borderBottom:'1px solid black', padding:'2px 10px', margin:'1% 0px 0px', fontFamily:"roboto", background:'#f8f9fa', fontStyle:'italic'}}>IZINDI NKURU</h5>  
                    <CardColumns className="s2Cardcol" style={{ marginTop: '30px', columnGap: '0.75rem'}}>

                    {this.state.articles.map((news) => (
                        

                        <Card  key={news.id} style={{border:'none',borderRadius:'0px', maxHeight:'auto'}}>
                        <Nav.Link  style={{ color: 'black', fontFamily:"PeriodicoDisplay-Bd" }} href={`/SingleArticles/${news.id}/${news.title}`}>
                            <div style={{ width: '110%', height:'auto', overflow:'hidden'}}>
                              <Card.Img  src={`http://localhost:5000/${news.urltoimage}`} />
                            </div>
                               <Card.Title className="hoveringTitle"> {news.title} </Card.Title>
                          <Card.Text style={{ paddingBottom: '5px', width:'100%'}}>
                               <medium className="text-muted"><Badge  style={{fontSize:'0.90rem',}} variant="primary">{news.topic}</Badge> | {news.createdon}</medium>
                            </Card.Text>
                        </Nav.Link>
                      </Card>
                     ))}  

                    </CardColumns>



            {/* tv section  */}

                <div className="advert" style={{padding:'20px', textAlign:'center',}}>
                    <Image alt="airtel" src={aitel}/>
                    </div>
                
                    <h2 style={{overflow:'hidden', boxSizing:'border-box',fontFamily:'impact', height:'auto', textShadow: '4px -2px LightGray',letterSpacing:'5px', fontSize:'350%', color:'#02031c', background:'#fff', marginTop: '20px', marginBottom: '-4px', textAlign:'center',padding:'10px'}}>IGIHANGO TV</h2>
                
                    
                    <Row style={{ background:'#02031c', height: 'auto'}}>
                        <Col style={{ padding: '5% 2% 5% 2%'}} md={12} lg={4} xs={12}>
                            <Carousel style={{height: 'auto', overflow:'hidden'}}>
                                <Carousel.Item style={{overflow:'hidden'}} >
                                <Image src={igihango2} fluid />
                                <Carousel.Caption>
                                    <Button action href="#"style={{background:'#ee002d', border:'none', width:'60px', marginBottom:'17%', height:'auto' }} >
                                    <i style={{marginTop:'0px'}}  class="material-icons">play_arrow</i>
                                    </Button>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item style={{overflow:'hidden'}} >
                                <Image src={igihango2} fluid />
                                <Carousel.Caption>
                                    <Button action href="#" style={{background:'#ee002d', border:'none', width:'60px', marginBottom:'17%', height:'auto'}} size="md">
                                    <i style={{marginTop:'0px'}} class="material-icons">play_arrow</i>
                                    </Button>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>

                        <Col style={{ padding: '5% 2% 5% 2%'}} md={6} lg={4} xs={12}>
                            <Carousel style={{height: 'auto', overflow:'hidden'}}>
                                <Carousel.Item style={{overflow:'hidden'}} >
                                <Image src={igihango2} fluid/>
                                <Carousel.Caption>
                                    <Button action href="#" style={{background:'#ee002d', border:'none', width:'60px', marginBottom:'17%', height:'auto'}} size="md">
                                    <i style={{marginTop:'0px'}} class="material-icons">play_arrow</i>
                                    </Button>
                                </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item style={{overflow:'hidden'}} >
                                <Image src={igihango2} fluid/>
                                <Carousel.Caption>
                                    <Button action href="#" style={{background:'#ee002d', border:'none', width:'60px', marginBottom:'17%', height:'auto'}} size="md">
                                    <i style={{marginTop:'0px'}} class="material-icons">play_arrow</i>
                                    </Button>
                                </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>

                        <Col style={{ padding: '5% 2% 5% 2%'}} md={6} lg={4} xs={12}>
                            <Carousel style={{height: 'auto', overflow:'hidden'}}>
                            <Carousel.Item style={{overflow:'hidden'}} >
                                <Image src={igihango2} fluid />
                                <Carousel.Caption>
                                <Button action href="#" style={{background:'#ee002d', border:'none', width:'60px', marginBottom:'17%', height:'auto'}} size="md">
                                    <i style={{marginTop:'0px'}} class="material-icons">play_arrow</i>
                                </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item style={{overflow:'hidden'}} >
                                <Image src={igihango2} fluid/>
                                <Carousel.Caption>
                                <Button action href="#" style={{background:'#ee002d', border:'none', width:'60px', marginBottom:'17%', height:'auto'}} size="md">
                                    <i style={{marginTop:'0px'}} class="material-icons">play_arrow</i>
                                </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>

              </Col>
   
        {/* Part 2 Advertising and hit news */}
          <Col md={12} lg={3} xs={12}>

             <div style={{paddingTop:'20px'}}>
                  <img alt="startimesSMALL" src={startimesSMALL}/>
                </div>
              <h4 style ={{fontFamily:'roboto', fontStyle:'italic', whiteSpace:'nowrap', margin:'10px', borderBottom:'1px solid black'}} >INKURU ZIGEZWEHO</h4>

              {this.state.bestNews.map((news) => (
                
            
                    <Nav.Link  href={`/SingleArticles/${news.id}/${news.title}`}>

                        <Media  style={part3Style}>
                            <Media.Body>
                              <h6 className="hoveringTitle" style={{fontSize:'1.05rem', paddingRight:'5px'}}>{news.title}</h6>    
                              <medium className="text-muted"><Badge  style={{fontSize:'0.90rem',}} variant="primary">{news.topic}</Badge> | {news.createdon}</medium>            
                            </Media.Body>
                            <div style={{ width: '35%', height:'auto', overflow:'hidden'}}>
                              <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                            </div>                     
                        </Media>
                    </Nav.Link>
              

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
                <div className="advert" style={{paddingTop:'20px'}}>
                   <img alt="KBCwesternUNION" src={KBCwesternUNION}/>
                </div>
                <div style={{paddingTop:'20px'}}>
                   <img alt="cucinaRESTAURENT" src={cucinaRESTAURENT}/>
                </div>
              </Col>   
            </Row>
            <div className="advert" style={{padding:'5px 100px 0px', width:'300%'}}>
              <img alt="mount kenya" src={MKENYA}/>
            </div> 
            <Footer />  
        </div>
    )
}
}

export default Catagories
