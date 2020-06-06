import React from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import Header from '../layout/Header'
import Tab from '../layout/Tab'
import Footer from '../layout/Footer';
import { Col, Row, Media, Card, Carousel, Image, Button, CardColumns, Badge, Form, Nav  } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import igihango2 from '../pictures/DSC_8437.JPG'
import addresiya from '../pictures/advert/addresiya_web.gif'
import AyobaBig from '../pictures/advert/mtn-banner-04-20.gif'
import unicafBIG from '../pictures/advert/unicafBIG.jpg'
import aitel from '../pictures/advert/aitel-rwanda.gif'
import corona from '../pictures/advert/corona.gif'
import RIBguhohotera from '../pictures/advert/RIBguhohotera.gif'
import Euronews from '../pictures/advert/Euronews.gif'
import police from '../pictures/advert/police.gif'
import fourG from '../pictures/advert/4g.webp'
import mtnyoba from '../pictures/advert/mtnyoba.gif'
import startimesSMALL from '../pictures/advert/startimesSMALL.gif'
import MKENYA from '../pictures/advert/MKENYA.jpg'
import KBCwesternUNION from '../pictures/advert/KBCwesternUNION.gif'


const part3Style= {
  borderBottom:'1px solid #d0d5d8',
  padding:'20px 15px',
  background :'#fff',

}

// nyamukuru news
function getMainNyamukuru() {
  return Axios.get('http://localhost:5000/api/v2/articles/nyamukuru/main');
}

function getNyamukuru() {
  return Axios.get('http://localhost:5000/api/v2/articles/nyamukuru');
}


// sport news
function getMainSport() {
  return Axios.get('http://localhost:5000/api/v2/articles/sport/main');
}

function getSport() {
  return Axios.get('http://localhost:5000/api/v2/articles/sport');
}


 // utuntu nutundi news
 function getMainUtuntuNutundi() {
  return Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundi/main');
}

function getViewsUtuntuNutundi() {
  return Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundi/views');
}

function getUtuntuNutundi() {
  return Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundi');
}


// bestNews & udushya
function bestNews() {
  return Axios.get('http://localhost:5000/api/v2/articles/bestNews');
}

function udushya() {
  return Axios.get('http://localhost:5000/api/v2/articles/udushya');
}



class Home extends React.Component {

  state = {
    mainNyamukuru: [],
    nyamukuru:[],

    mainSport:[],
    sport:[],

    mainUtuntuNutundi:[],
    viewsUtuntuNutundi:[],
    utuntuNutundi:[],

    bestNews:[],
    udushya:[],
    
    news:[],
    showNews: false
  }

  componentDidMount() {

  Promise.all([getMainNyamukuru(), getNyamukuru(), getMainSport(), getSport(), getMainUtuntuNutundi(),
     getViewsUtuntuNutundi(), getUtuntuNutundi(), bestNews(), udushya() ])

    .then(Axios.spread((...res) => {
      this.setState({ 
        mainNyamukuru: res[0].data.data, nyamukuru: res[1].data.data, 
        mainSport: res[2].data.data, sport: res[3].data.data,
        mainUtuntuNutundi: res[4].data.data, viewsUtuntuNutundi: res[5].data.data, utuntuNutundi: res[6].data.data,
        bestNews: res[7].data.data, udushya: res[8].data.data

        })
           
    }))
    .catch(err => {
      if(err.response) {
       
        console.log(err.response.data)
      }
  });
}
      

  render() {

 
    return (
         <React.Fragment>   
            <div className="advert">
                <img style={{width:'100%'}} alt="addresiya" src={addresiya}/>
            </div> 
            <Header />   
            <Tab /> 

            <div  className="advert" style={{padding:'5px', textAlign:'center', width:'100%', height:'auto'}}>
              <img alt="MTN-AYOBA" src={AyobaBig}/>
            </div>

            <Row className="generalRow" style={{padding:'1.2% 3% 3%', borderTop:'1px solid #d0d5d8'}} >
              <Col lg={9} xs={12}   style={{ background: '#eee',}}>
                  
              {this.state.mainNyamukuru.map((news) => (

               <Nav.Link href={`/SingleArticles/${news.id}/${news.title}`}>
  
                  <Card  style={{ width: '100%',border:'none',textAlign:'center', padding:'2% 0%', maxHeight:'59rem', overflow:'hidden'}}>
                      <Card.Title className="s1title" ><h1 style={{fontWeight:'1000',color:'black', fontSize:'250%', lineHeight:'117%', textAlignLast:'center', borderBottom:'1px solid #d0d5d8e',}}>
                         {news.title}
                      </h1></Card.Title> 
                        <Card.Body>
                        <div className="s1subPragraph0" style={{fontStyle: 'oblique' }}>
                          <h6 style={{ fontSize: '1rem', fontFamily:'roboto'}}  > <i style={{ fontSize: '1rem',}} class="material-icons">visibility</i> yarebwe inshuro {news.views}  |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</h6> 
                        </div>
                        <div style={{ width: '100%', height:'auto', overflow:'hidden', float:'right',marginLeft:'10px'}}>
                          <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                        </div>            
                  
                          <p className="s1Pragraph">
                          { ReactHtmlParser(news.description) }                
                          </p>
                        </Card.Body>                                                     
                        <div className="s1subPragraph" style={{fontStyle: 'oblique' }}>
                        <h6 style={{ fontSize: '1rem', fontFamily:'roboto'}}  > <i style={{ fontSize: '1rem',}} class="material-icons">visibility</i> yarebwe inshuro {news.views}  |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</h6> 
                        <h6 > yanditswe na <i style={{ fontSize: '1rem'}} class="material-icons">person</i> {news.author}</h6>  
                        </div>

                    </Card>
                </Nav.Link>
                   

                     ))}  


            <div  className="advert" style={{padding:'50px', textAlign:'center',}}>
              <img alt="unicaf" src={unicafBIG}/>
            </div>



        {/* section 2 which contain MAIN NEWS */}
        <h5 style={{borderBottom:'1px solid black', padding:'2px 10px', margin:'1% 0px 0px', fontFamily:"roboto", background:'#f8f9fa', fontStyle:'italic'}}>Inkuru nyamukuru</h5>  
              <CardColumns className="s2Cardcol" style={{ marginTop: '30px', columnGap: '0.75rem'}}>

           {this.state.nyamukuru.map((news) => (

            

                <Card  key={news.id} style={{border:'none',borderRadius:'0px', maxHeight:'auto'}}>
                  <Nav.Link  style={{ color: 'black', fontFamily:"PeriodicoDisplay-Bd", }} href={`/SingleArticles/${news.id}/${news.title}`}>

                      <div style={{ width: '100%', height:'auto', overflow:'hidden' }}>
                        <Card.Img fluid src={`http://localhost:5000/${news.urltoimage}`} />
                      </div>
                      <Card.Title style={{ maxHeight:'72px', overflow:'hidden', minHeight:'72px',}} className="hoveringTitle"> {news.title} </Card.Title>
                      <Card.Text style={{ paddingBottom: '5px', width:'100%'}}>
                        <medium  style={{fontSize:'0.90rem', fontFamily:'roboto'}} className="text-muted"><Badge  style={{fontSize:'0.90rem', fontFamily:'roboto'}} variant="primary">{news.topic}</Badge> |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</medium>
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
           

        {/* section 3 which contain SPORT NEWS */}

        <h5 style={{borderBottom:'1px solid black', padding:'2px 10px', margin:'50px 0px 0px', fontFamily:"roboto", background:'#f8f9fa', fontStyle:'italic'}}>Amakuru ya Siporo</h5>    
                <Row >        
                  <Col lg={5} md={5} xs={12} >
                  {this.state.sport.map((news) => (
                   
                        <Nav.Link  style={{ color: 'black', fontFamily:"PeriodicoDisplay-Bd", padding:'0px' }} href={`/SingleArticles/${news.id}/${news.title}`}>

                            <Media style={part3Style}>                     
                                  <Media.Body>
                                    <h5 style={{maxHeight:'80px', overflow:'hidden', minHeight:'80px', fontSize:'1.2rem', fontWeight:'700', letterSpacing:'.2px', lineHeight: '25px'}} className="hoveringTitle">{news.title} </h5>    
                                    <medium style={{ fontFamily:'roboto'}} className="text-muted"><i style={{ fontSize: '1rem',}} class="material-icons">visibility</i> {news.views} views |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon} </medium>             
                                  </Media.Body>
                                  <div style={{ width: '130px', height:'100px', overflow:'hidden'}}>
                                    <Image  src={`http://localhost:5000/${news.urltoimage}`}  fluid/>
                                  </div>                      
                            </Media>
                        </Nav.Link>
                   
                  ))}  
                  </Col>

                  <Col lg={7} md={7} xs={12}>

                {this.state.mainSport.map((news) => (

                  <Card style={{ border:'none', padding:'20px 2px', overflow:'hidden' }}>
                      <Nav.Link  style={{ color: 'black', fontFamily:"PeriodicoDisplay-Bd", }} href={`/SingleArticles/${news.id}/${news.title}`}>

                        <div style={{ width: '100%', height:'auto', overflow:'hidden', }}>
                            <Image  src={`http://localhost:5000/${news.urltoimage}`}  fluid/>
                        </div>
                        <Card.Title className="hoveringTitle" style={{ paddingTop:'5px', fontSize:'2rem', fontWeight:'700' }}>{news.title}</Card.Title>
                        <medium  style={{fontSize:'0.90rem', fontFamily:'roboto'}} className="text-muted"><Badge  style={{fontSize:'0.90rem', fontFamily:'roboto'}} variant="primary">{news.topic}</Badge> |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</medium>               
                        <Card.Text  style={{ maxHeight:'182px',overflow: 'hidden', paddingTop:'10px' }}>
                        { ReactHtmlParser(news.description) }
                        </Card.Text>
                    </Nav.Link>
                  </Card>
                ))}  

                  </Col>
                </Row>


                <div className="advert" style={{padding:'5px 100px 0px', width:'300%'}}>
                  <img alt="IRINDE CORONA" src={corona}/>
                </div>


       {/* section 4 which contain UTUNTU NUTUNDI */}

        <h5 style={{borderBottom:'1px solid black', padding:'2px 10px', margin:'50px 0px 0px', fontFamily:"roboto", background:'#f8f9fa', fontStyle:'italic'}}>Utuntu nutundi</h5>    
                <Row >        
                  <Col lg={4} md={5} xs={12}>  
                  {this.state.utuntuNutundi.map((news) => (   

                      <Card style={{border:'none',padding:'20px 0', overflow:'hidden' ,borderBottom:'1px solid #d0d5d8', borderRadius:'0px'}}>
                        
                        <Nav.Link style={{ color: 'black', fontFamily:"PeriodicoDisplay-Bd", }} href={`/SingleArticles/${news.id}/${news.title}`}>

                            <div style={{ width: '100%', height:'auto', overflow:'hidden'}}>
                              <Card.Img src={`http://localhost:5000/${news.urltoimage}`} />
                            </div>
                            <Card.Title className="hoveringTitle" style={{ overflow:'hidden', maxHeight:'83px', minHeight:'83px',paddingTop: '10px', fontSize:'1.3rem', fontWeight:'700', letterSpacing:'.2px', lineHeight: '25px'}}>{news.title}</Card.Title>
                            <Card.Text style={{ paddingBottom: '5px'}}>
                            <medium  style={{fontSize:'0.90rem', fontFamily:'roboto'}} className="text-muted"><Badge  style={{fontSize:'0.90rem', fontFamily:'roboto'}} variant="primary">{news.topic}</Badge> |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</medium> 
                            </Card.Text>
                        </Nav.Link>
                      </Card>
                 ))}   
                 
                  </Col>

                  <Col  lg={8} md={7} xs={12}>

                {this.state.mainUtuntuNutundi.map((news) => (       

                  <Card className="s1title"  style={{border:'none',padding:'20px 0',textAlign:'center', overflow:'hidden'}}>

                    <Nav.Link  style={{ color: 'black', fontFamily:"PeriodicoDisplay-Bd" }} href={`/SingleArticles/${news.id}/${news.title}`}>
                        <Card.Title className="s1title" ><h1 style={{fontWeight:'1000',color:'black', fontSize:'250%', lineHeight:'117%', textAlignLast:'center', borderBottom:'1px solid #d0d5d8e',}}>
                        {news.title}</h1>
                        </Card.Title>
                        <Card.Text style={{ paddingBottom: '5px',  textAlign:'center',}}>
                        <medium  style={{fontSize:'0.90rem', fontFamily:'roboto'}} className="text-muted"><Badge  style={{fontSize:'0.90rem', fontFamily:'roboto'}} variant="primary">{news.topic}</Badge> |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</medium> 
                        </Card.Text>
                        <div style={{ width: '100%', height:'auto', overflow:'hidden'}}>
                          <Card.Img src={`http://localhost:5000/${news.urltoimage}`}/>
                        </div>
                    </Nav.Link>
                  </Card>
                ))} 

                  <CardColumns style={{ marginTop: '20px', columnCount:'2', columnGap: '0.75rem'}}>

                  {this.state.viewsUtuntuNutundi.map((news) => (  
                      <Card style={{border:'none' ,borderRight:'1px solid #828282', borderRadius:'0px', maxHeight:'300px', }}>
                          <Nav.Link style={{ color: 'black', fontFamily:"PeriodicoDisplay-Bd" }} href={`/SingleArticles/${news.id}/${news.title}`}>

                              <h6 className="hoveringTitle" style={{fontSize:'1.3rem', paddingRight:'5px', maxHeight:'101px', minHeight:'101px', overflow:'hidden', textOverflow: 'ellipsis'}}>{news.title}</h6>
                              <Card.Text  style={{ paddingBottom: '5px'}}>
                              <medium  style={{fontSize:'0.90rem', fontFamily:'roboto'}} className="text-muted"><i style={{ fontSize: '1rem'}} class="material-icons">visibility</i> {news.views} views |  <i style={{ fontSize: '1rem'}} class="material-icons">access_alarm</i> {news.createdon}</medium> 
                              </Card.Text>
                          </Nav.Link>
                      </Card>
                    ))} 
                    
                  
                  </CardColumns>
                </Col>
              </Row>
              </Col>
   
        {/* Part 2 Advertising and hit news */}

          <Col md={12} lg={3} xs={12}>

            <div className="advert" style={{paddingTop:'20px'}}>
                <img alt="RIB" src={RIBguhohotera}/>
            </div>
              <h4 style ={{fontFamily:'roboto', fontStyle:'italic', whiteSpace:'nowrap', margin:'10px', borderBottom:'1px solid black'}} >INKURU ZIGEZWEHO</h4>

              {this.state.bestNews.map((news) => ( 
                
                <Nav.Link  style={{ padding:'0px'}}  href={`/SingleArticles/${news.id}/${news.title}`}>

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

              ))} 

  
                <div style={{paddingTop:'20px'}}>
                   <img alt="Euronews" src={Euronews}/>
                </div>
                <div  style={{paddingTop:'20px'}}>
                   <img alt="police" src={police}/>
                </div>
                <div className="advert" style={{paddingTop:'20px'}}>
                   <img alt="4G squqre" src={fourG}/>
                </div>
                <div style={{paddingTop:'20px'}}>
                   <img alt="mtnyoba" src={mtnyoba}/>
                </div>
                <div className="advert" style={{paddingTop:'20px'}}>
                   <img alt="startimesSMALL" src={startimesSMALL}/>
                </div>

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

                <div className="advert" style={{paddingTop:'20px'}}>
                   <img alt="KBCwesternUNION" src={KBCwesternUNION}/>
                </div>

                <h4 style ={{fontFamily:'roboto', fontStyle:'italic', whiteSpace:'nowrap', margin:'10px', borderBottom:'1px solid black'}} >UDUSHYA</h4>

                {this.state.udushya.map((news) => (  

                    <Nav.Link style={{ padding:'0px'}} href={`/SingleArticles/${news.id}/${news.title}`}>

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
                ))} 

               
              </Col>   
            </Row>
        
        <div className="advert" style={{padding:'5px 100px 0px', width:'300%'}}>
          <img alt="mount kenya" src={MKENYA}/>
        </div> 
            <Footer />     
        </React.Fragment>
    );   
}
}


export default Home

