import React from 'react';
import Axios from 'axios';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';

import { Col, Row, Media, Card, Image, Button, Badge, Form, Nav } from 'react-bootstrap';
import Header from '../layout/Header';
import Tab from '../layout/Tab';
import SmallTab from '../layout/SmallTab';
import Footer from '../layout/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import ADSphotographer from '../pictures/ADSphotographer.gif';

import addresiya from '../pictures/advert/addresiya_web.gif';
import AyobaBig from '../pictures/advert/mtn-banner-04-20.gif';
import unicafBIG from '../pictures/advert/unicafBIG.jpg';
import aitel from '../pictures/advert/aitel-rwanda.gif';
import corona from '../pictures/advert/corona.gif';
import RIBguhohotera from '../pictures/advert/RIBguhohotera.gif';
import Euronews from '../pictures/advert/Euronews.gif';
import police from '../pictures/advert/police.gif';
import fourG from '../pictures/advert/4g.webp';
import startimesSMALL from '../pictures/advert/startimesSMALL.gif';
import MKENYA from '../pictures/advert/MKENYA.jpg';

const part3Style = {
  borderBottom: '1px solid #d0d5d8',
  padding: '20px 15px',
  background: '#fff',

};

class Home extends React.Component {
  state = {
    mainNyamukuru: [],
    nyamukuru: [],

    mainSport: [],
    sport: [],

    mainUtuntuNutundi: [],
    viewsUtuntuNutundi: [],
    utuntuNutundi: [],

    bestNews: [],
    udushya: [],

    news: [],
    showNews: false,
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/api/v2/articles/inkuruNyamukuru1')
      .then((res) => this.setState({ mainNyamukuru: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/inkuruNyamukuru8')
      .then((res) => this.setState({ nyamukuru: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/sport1')
      .then((res) => this.setState({ mainSport: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/sport5')
      .then((res) => this.setState({ sport: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundi1')
      .then((res) => this.setState({ mainUtuntuNutundi: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundiMostViews6')
      .then((res) => this.setState({ viewsUtuntuNutundi: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundi3')
      .then((res) => this.setState({ utuntuNutundi: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/bestNews6')
      .then((res) => this.setState({ bestNews: res.data.data }));

    Axios.get('http://localhost:5000/api/v2/articles/udushya5')
      .then((res) => this.setState({ udushya: res.data.data }));
  }

  render() {
    return (
         <React.Fragment>
            <div className="phoneDisplayNone">
                <img style={{ width: '100%' }} alt="addresiya" src={addresiya}/>
            </div>
           <div className="phoneDisplayNone">
           <SmallTab />
           </div>
            <div className="phoneDisplayNone">
            <Header />
           </div>
            <Tab />

            <div className="advert" style={{ padding: '5px', textAlign: 'center', width: '100%', height: 'auto' }}>
              <img alt="MTN-AYOBA" src={AyobaBig}/>
            </div>

            <Row className="generalRow" style={{ padding: '1.2% 3% 3%', borderTop: '1px solid #d0d5d8' }} >
              <Col lg={9} xs={12} style={{ background: '#eee' }}>
              <div className="phoneDisplayNone">
              {this.state.mainNyamukuru.map((news) => (

                  <Nav.Link href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                    <Card style={{ width: '100%', border: 'none', padding: '2%', paddingBottom: '100px', maxHeight: '40rem', borderBottom: '35px solid white', overflowX: 'hidden' }}>
                        <Card.Title className="s1title" >
                          <h1 className="hoveringTitle" style={{ fontWeight: '1000', cursor: 'pointer', color: 'black', fontSize: '250%', lineHeight: '117%', textAlignLast: 'center', paddingBottom: '20px' }}>
                            {news.title}
                          </h1>
                          </Card.Title>
                          <Card.Body>
                          <div className="s1subPragraph0" style={{ fontStyle: 'oblique' }}>
                            <medium style={{ fontSize: '1rem' }} className="text-muted"> <i style={{ fontSize: '1rem' }} class="material-icons">visibility</i> yarebwe inshuro <Badge style={{ backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> |  <i style={{ fontSize: '1rem' }} class="material-icons">access_alarm</i> { moment(news.createdon).fromNow() }</medium>
                          </div>
                          <div style={{ width: '70%', height: 'auto', overflow: 'hidden', float: 'left', marginRight: '10px' }}>
                            <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                          </div>

                              <p style={{ maxHeight: '100px', overflow: 'hiden' }} className="s1Pragraph">
                              { ReactHtmlParser(news.description) }
                              </p>

                          </Card.Body>
                          <div className="s1subPragraph" style={{ fontStyle: 'oblique' }}>
                          <h6 style={{ fontSize: '1rem' }} > <i style={{ fontSize: '1rem' }} class="material-icons">visibility</i> yarebwe inshuro {news.views}  |  <i style={{ fontSize: '1rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</h6>
                          <h6 > yanditswe na <i style={{ fontSize: '1rem' }} class="material-icons">person</i> {news.author}</h6>
                          </div>

                      </Card>
                  </Nav.Link>

              ))}
              </div>

              {/* phone display */}
              <div className="phoneDisplay">
              {this.state.mainNyamukuru.map((news) => (
                  <Col>
                      <Card key={news.id} style={{ border: 'none', borderRadius: '0px', maxHeight: '100%' }}>
                        <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>
                          <Card.Title style={{ overflow: 'hidden', textAlign: 'center' }}>
                          <h1 className="hoveringTitle" style={{ fontWeight: '1000', color: 'black', fontSize: '1.4rem', lineHeight: '117%', textAlignLast: 'center', borderBottom: '1px solid #d0d5d8e' }}>
                          {news.title}
                          </h1>
                          </Card.Title>
                            <Card.Text style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                              <Card.Img fluid src={`http://localhost:5000/${news.urltoimage}`} />
                            </Card.Text>
                            <Card.Text style={{ width: '100%' }}>
                              <div>
                                <i style={{ fontSize: '0.6rem' }} class="material-icons">visibility</i> <medium style={{ fontStyle: 'oblique', fontSize: '0.75rem', fontFamily: 'roboto' }} className="text-muted"> yarebwe inshuro <Badge style={{ backgroundColor: '#0d47a1', marginTop: '10px', fontSize: '0.65remm' }} >{news.views}</Badge> |  <i style={{ fontSize: '0.6rem', color: 'black' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()} </medium>
                              </div>
                              <div style={{ marginTop: '-5px' }}>
                                <i style={{ fontSize: '0.6rem' }} class="material-icons">person</i><medium style={{ fontStyle: 'oblique', fontSize: '0.75rem', fontFamily: 'roboto' }} className="text-muted"> yanditswe na <Badge style={{ backgroundColor: '#0d47a1' }} >{news.author}</Badge> </medium>
                              </div>
                            </Card.Text>
                        </Nav.Link>
                      </Card>
                  </Col>
              ))}
              </div>

            <div className="advert" style={{ padding: '50px', textAlign: 'center' }}>
              <img alt="unicaf" src={unicafBIG}/>
            </div>

        {/* section 2 which contain MAIN NEWS */}
        <h5 style={{ borderTop: '5px solid #eee', borderBottom: '1px solid black', padding: '2px 10px', margin: '1% 0px 0px', fontFamily: 'roboto', background: '#f8f9fa', fontStyle: 'italic' }}>AMAKURU AGEZWEHO</h5>
        <Row xs={2} md={2} lg={4} className="g-2" style={{ paddingTop: '5px' }}>
        {this.state.nyamukuru.map((news) => (
            <Col style={{ background: '#fff' }}>
                <Card key={news.id} style={{ border: 'none', borderRadius: '0px' }}>
                  <a style={{ color: 'black', textDecoration: 'none', padding: '4px' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                      <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                        <Card.Img fluid src={`http://localhost:5000/${news.urltoimage}`} />
                      </div>
                      <Card.Title style={{ overflow: 'hidden', lineHeight: 1.2, fontSize: '16px', fontWeight: 450 }} className="hoveringTitle"> {news.title} </Card.Title>
                      <Card.Text style={{ paddingBottom: '5px', width: '100%' }}>
                        <medium style={{ fontSize: '0.75rem', fontFamily: 'roboto' }} className="text-muted"> <i style={{ fontSize: '0.75rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()} <i style={{ fontSize: '0.75rem' }} class="material-icons">visibility</i> <Badge style={{ backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> <span style={{ fontSize: '0.75rem' }} className="phoneDisplayNone">views</span></medium>
                      </Card.Text>
                  </a>
                </Card>
            </Col>
        ))}
        </Row>

      {/* advertising  */}

           <div className="advert" style={{ padding: '20px', textAlign: 'center' }}>
              <Image alt="airtel" src={aitel}/>
            </div>

        {/* section 3 which contain SPORT NEWS */}

        <h5 style={{ borderBottom: '1px solid black', padding: '2px 10px', margin: '15px 0px 0px', fontFamily: 'roboto', background: '#f8f9fa', fontStyle: 'italic' }}>AMAKURU YA SPORT</h5>
                <Row >
                  <Col lg={5} md={7} xs={12} className="phoneDisplayNone">
                  {this.state.sport.map((news) => (

                        <Nav.Link style={{ color: 'black', padding: '0px' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                            <Media style={part3Style}>
                            <Media.Body>
                              <div style={{ paddingRight: '10px', width: '37%', height: 'auto', overflow: 'hidden', float: 'left' }}>
                                <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                              </div>
                              <h6 className="hoveringTitle" style={{ lineHeight: 1.6, paddingRight: '5px' }}> {news.title} </h6>
                              <medium style={{ fontSize: '0.90rem', fontFamily: 'roboto' }} className="text-muted"><i style={{ fontSize: '0.7rem' }} class="material-icons">visibility</i> <Badge style={{ backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> views |  <i style={{ fontSize: '0.7rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                          </Media.Body>
                            </Media>
                        </Nav.Link>
                  ))}
                  </Col>

                  <Col lg={7} md={12} xs={12}>

                {this.state.mainSport.map((news) => (

                  <Card style={{ border: 'none', padding: '20px 2px', overflow: 'hidden' }}>
                      <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                        <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                            <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                        </div>
                        <Card.Title className="hoveringTitle phoneDisplayNone" style={{ paddingTop: '5px', textAlign: 'center', fontSize: '1.9rem', lineHeight: 1.3, fontWeight: '700' }}>{news.title}</Card.Title>
                        <Card.Title className="hoveringTitle phoneDisplay" style={{ paddingTop: '5px', textAlign: 'center', fontSize: '1.2rem', lineHeight: 1.3, fontWeight: '700' }}>{news.title}</Card.Title>
                        <medium style={{ fontSize: '0.90rem', fontFamily: 'roboto' }} className="text-muted"><i style={{ fontSize: '0.75rem' }} class="material-icons">visibility</i> <Badge style={{ backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> views |  <i style={{ fontSize: '0.75rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                        <Card.Text className="phoneDisplayNone" style={{ maxHeight: '250px', overflowX: 'hidden', paddingTop: '10px' }}>
                        { ReactHtmlParser(news.description) }
                        </Card.Text>
                    </Nav.Link>
                    <img className="phoneDisplay"
                        src={ADSphotographer}
                        width="100%"
                        height="100%"
                      />
                  </Card>
                ))}

                {/* phone display */}
                <div style={{ borderTop: '10px solid #eee' }}>
                {this.state.sport.map((news) => (

                  <Nav.Link className="phoneDisplay" style={{ color: 'black', padding: '0px' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                      <Media style={part3Style}>
                      <Media.Body>
                        <div style={{ paddingRight: '10px', width: '37%', height: 'auto', overflow: 'hidden', float: 'left' }}>
                          <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                        </div>
                        <h6 className="hoveringTitle" style={{ lineHeight: 1.6, paddingRight: '5px' }}> {news.title} </h6>
                        <medium className="text-muted" ><i style={{ fontSize: '0.75rem' }} class="material-icons">visibility</i> <Badge style={{ fontSize: '0.6rem', backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> views |  <i style={{ fontSize: '0.75rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()} </medium>
                    </Media.Body>
                      </Media>
                  </Nav.Link>
                ))}
                </div>
                  </Col>
                </Row>

                <div className="advert" style={{ padding: '5px 100px 0px', width: '300%' }}>
                  <img alt="IRINDE CORONA" src={corona}/>
                </div>

       {/* section 4 which contain UTUNTU NUTUNDI */}

        <h5 style={{ borderBottom: '1px solid black', padding: '2px 10px', margin: '15px 0px 0px', fontFamily: 'roboto', background: '#f8f9fa', fontStyle: 'italic' }}>UTUNTU N'UTUNDI</h5>
        <Row >
                  <Col lg={4} md={12} xs={12}>

         {/* ----------------phone display-------------- */}
                  {this.state.mainUtuntuNutundi.map((news) => (

                   <Card className="s1title phoneDisplay" style={{ border: 'none', padding: '20px 0', textAlign: 'center', overflow: 'hidden' }}>

                    <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>
                        <Card.Title ><h1 style={{ fontWeight: '700', color: 'black', fontSize: '24px', lineHeight: 1.4, textAlignLast: 'center', borderBottom: '1px solid #d0d5d8e' }}>
                        {news.title}</h1>
                        </Card.Title>
                        <Card.Text style={{ paddingBottom: '5px', textAlign: 'center' }}>
                        <medium style={{ fontSize: '0.90rem', fontFamily: 'roboto' }} className="text-muted"><Badge style={{ fontSize: '0.90rem', backgroundColor: '#0d47a1', fontFamily: 'roboto' }} variant="primary">{news.category}</Badge> |  <i style={{ fontSize: '0.8rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                        </Card.Text>
                        <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                          <Card.Img src={`http://localhost:5000/${news.urltoimage}`}/>
                        </div>
                        <div style={{ borderBottom: '5px solid #eee', fontStyle: 'oblique' }}>
                          <div><medium className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'roboto' }} ><i style={{ fontSize: '0.75rem' }} class="material-icons">visibility</i> yarebwe inshuro <Badge style={{ backgroundColor: '#0d47a1' }} >{news.views}</Badge>  |  <i style={{ fontSize: '0.75rem' }} class="material-icons">access_alarm</i> { moment(news.createdon).fromNow() }</medium></div>
                          <div><medium className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'roboto' }} ><i style={{ fontSize: '0.75rem' }} class="material-icons">person</i> yanditswe na <Badge style={{ backgroundColor: '#0d47a1' }} >{news.author}</Badge> </medium></div>
                        </div>
                    </Nav.Link>
                  </Card>
                  ))}
                  {this.state.utuntuNutundi.map((news) => (

                      <Card style={{ border: 'none', padding: '20px 0', overflow: 'hidden', borderBottom: '1px solid #d0d5d8', borderRadius: '0px' }}>

                        <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                            <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                              <Card.Img src={`http://localhost:5000/${news.urltoimage}`} />
                            </div>
                            <Card.Title className="hoveringTitle" style={{ lineHeight: 1.6, overflow: 'hidden', paddingTop: '10px', fontSize: '18px', fontWeight: '500' }}>{news.title}</Card.Title>
                            <Card.Text style={{ paddingBottom: '5px' }}>
                            <medium style={{ fontSize: '0.90rem', fontFamily: 'roboto' }} className="text-muted"><Badge style={{ fontSize: '0.80rem', fontFamily: 'roboto', backgroundColor: '#0d47a1' }} >{news.category}</Badge> |  <i style={{ fontSize: '0.7rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                            </Card.Text>
                        </Nav.Link>
                      </Card>
                  ))}

                  </Col>

                  <Col lg={8} md={12} xs={12}>

                {this.state.mainUtuntuNutundi.map((news) => (

                  <Card className="s1title phoneDisplayNone" style={{ border: 'none', padding: '20px 0', textAlign: 'center', overflow: 'hidden' }}>

                    <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>
                        <Card.Title ><h1 style={{ fontWeight: '700', color: 'black', fontSize: '30px', lineHeight: 1.4, textAlignLast: 'center', borderBottom: '1px solid #d0d5d8e' }}>
                        {news.title}</h1>
                        </Card.Title>
                        <Card.Text style={{ paddingBottom: '5px', textAlign: 'center' }}>
                        <medium style={{ fontSize: '0.90rem', fontFamily: 'roboto' }} className="text-muted"><Badge style={{ fontSize: '0.60rem', backgroundColor: '#0d47a1', fontFamily: 'roboto' }} variant="primary">{news.category}</Badge> |  <i style={{ fontSize: '0.6rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                        </Card.Text>
                        <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                          <Card.Img src={`http://localhost:5000/${news.urltoimage}`}/>
                        </div>
                        <div style={{ fontStyle: 'oblique' }}>
                          <div><medium className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'roboto' }} ><i style={{ fontSize: '0.7rem' }} class="material-icons">visibility</i> yarebwe inshuro <Badge style={{ backgroundColor: '#0d47a1' }} >{news.views}</Badge>  |  <i style={{ fontSize: '0.7rem' }} class="material-icons">access_alarm</i> { moment(news.createdon).fromNow() }</medium></div>
                          <div><medium className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'roboto' }} ><i style={{ fontSize: '0.7rem' }} class="material-icons">person</i> yanditswe na <Badge style={{ backgroundColor: '#0d47a1' }} >{news.author}</Badge> </medium></div>
                        </div>
                    </Nav.Link>
                  </Card>
                ))}
                  <Row xs={1} md={12} lg={2} className="g-2" style={{ borderTop: '15px solid #eee' }}>
                  {this.state.viewsUtuntuNutundi.map((news) => (
                      <Col className="phoneDisplayNone">
                          <Card key={news.id} style={{ border: 'none' }}>
                            <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                                <Card.Title style={{ lineHeight: 1.6, maxHeight: '150px', minHeight: '100px', fontSize: '18px', fontWeight: '500' }} className="hoveringTitle"> {news.title} </Card.Title>
                                <Card.Text style={{ paddingBottom: '5px', width: '100%' }}>
                                  <medium style={{ fontSize: '0.75rem', fontFamily: 'roboto' }} className="text-muted"><Badge style={{ fontSize: '0.75rem', fontFamily: 'roboto', backgroundColor: '#0d47a1' }} variant="primary">{news.category}</Badge> |  <i style={{ fontSize: '0.6rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                                </Card.Text>
                            </Nav.Link>
                          </Card>
                      </Col>
                  ))}

                  {/* ----------------phone display-------------- */}
                  {this.state.viewsUtuntuNutundi.map((news) => (
                      <Col className="phoneDisplay">
                          <Card key={news.id} style={{ border: 'none' }}>
                            <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                                <Card.Title style={{ lineHeight: 1.6, fontSize: '18px', fontWeight: '500' }} className="hoveringTitle"> {news.title} </Card.Title>
                                <Card.Text style={{ paddingBottom: '5px', width: '100%' }}>
                                  <medium style={{ fontSize: '0.70rem', fontFamily: 'roboto' }} className="text-muted"><Badge style={{ fontSize: '0.7rem', fontFamily: 'roboto', backgroundColor: '#0d47a1' }} variant="primary">{news.category}</Badge> |  <i style={{ fontSize: '0.7rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                                </Card.Text>
                            </Nav.Link>
                          </Card>
                      </Col>
                  ))}
              <img className="phoneDisplay"
                src={ADSphotographer}
                width="26%"
                height="26%"
              />
                  </Row>
                </Col>
        </Row>
              </Col>

        {/* Part 2 Advertising and hit news */}

          <Col md={6} lg={3} xs={12} style ={{ borderTop: '10px solid #eee' }}>

            <div className="advert" style={{ paddingTop: '20px' }}>
                <img alt="RIB" src={RIBguhohotera}/>
            </div>
              <h4 style ={{ fontFamily: 'roboto', fontStyle: 'italic', whiteSpace: 'nowrap', margin: '10px', borderBottom: '1px solid black' }} >INKURU ZIKUNZWE</h4>

              {this.state.bestNews.map((news) => (

                <Nav.Link style={{ color: 'black', padding: '0px' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                  <Media style={part3Style}>
                    <Media.Body>
                      <div style={{ paddingRight: '10px', width: '40%', height: 'auto', float: 'left' }}>
                        <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                      </div>
                      <div>
                        <h6 className="hoveringTitle" style={{ lineHeight: 1.5, paddingRight: '5px', fontSize: '0.9rem' }}> {news.title} </h6>
                        <medium className="text-muted" style={{ fontSize: '0.75rem' }}><i style={{ fontSize: '0.6rem' }} class="material-icons">visibility</i> <Badge style={{ backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> views |  <i style={{ fontSize: '0.6rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()} </medium>
                      </div>
                    </Media.Body>
                  </Media>
                </Nav.Link>

              ))}

                <div className="advert" style={{ paddingTop: '20px' }}>
                   <img alt="Euronews" src={Euronews}/>
                </div>
                <div className="advert" style={{ paddingTop: '20px' }}>
                   <img alt="police" src={police}/>
                </div>
                <div className="advert" style={{ paddingTop: '20px' }}>
                   <img alt="4G squqre" src={fourG}/>
                </div>
                <div className="advert" style={{ paddingTop: '20px' }}>
                   <img alt="startimesSMALL" src={startimesSMALL}/>
                </div>

                         {/* subscribe section */}
                <div style={{ background: '#02031c', width: '103%', border: '2px solid red', marginTop: '20px' }}>
                <Form style={{ padding: '5px 10px', paddingRight: '30px' }}>
                    <h5 style={{ color: 'red', fontFamily: 'roboto', margin: '20px 10px', textAlign: 'center' }}> IYANDIKISHE</h5>
                    <p style={{ color: '#fff', textAlign: 'center', fontStyle: 'italic', margin: '15px', fontFamily: 'roboto' }}>
                      Uzuza imyirondoro yawe inkuru zose zijye zikugeraho kugihe</p>
                    <Form.Control style={{ margin: '15px', width: '95%' }} type="text" placeholder="Uzuza Amazina yawe hano" />
                    <Form.Control style={{ margin: '15px', width: '95%' }} type="email" placeholder="Uzuza Email yawe hano" />
                    <Form.Text style={{ margin: '15px' }} className="text-muted">
                      Ntamuntu tuzigera dusangiza imyirondoro yawe.
                    </Form.Text>
                    <Button style={{ width: '95%', margin: '10px' }} variant="primary" type="submit">Subscribe</Button>
                </Form>
                </div>
                <h4 style ={{ fontFamily: 'roboto', fontStyle: 'italic', whiteSpace: 'nowrap', margin: '10px', borderBottom: '1px solid black' }} >UDUSHYA</h4>

                {this.state.udushya.map((news) => (

                  <Nav.Link style={{ color: 'black', padding: '0px' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                  <Media style={part3Style}>
                    <Media.Body>
                      <div style={{ paddingRight: '10px', width: '40%', height: 'auto', float: 'left' }}>
                        <Image src={`http://localhost:5000/${news.urltoimage}`} fluid/>
                      </div>
                      <div>
                        <h6 className="hoveringTitle" style={{ lineHeight: 1.5, paddingRight: '5px', fontSize: '0.9rem' }}> {news.title} </h6>
                        <medium className="text-muted" style={{ fontSize: '0.75rem' }}><i style={{ fontSize: '0.6rem' }} class="material-icons">visibility</i> <Badge style={{ backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> views |  <i style={{ fontSize: '0.6rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()} </medium>
                      </div>
                    </Media.Body>
                  </Media>
                  </Nav.Link>
                ))}

              </Col>
              <div className="advert" style={{ padding: '5px', width: '100%' }}>
                <img alt="mount kenya" src={MKENYA}/>
              </div>
              <img className="phoneDisplay"
                src={ADSphotographer}
                width="26%"
                height="26%"
              />
            </Row>
            <Footer />
        </React.Fragment>
    );
  }
}

export default Home;
