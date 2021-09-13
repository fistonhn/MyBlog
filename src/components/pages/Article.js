import React from 'react';
import Axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import moment from 'moment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

import { Card, Image, Form, Button, Media, Row, Col, Nav, ListGroup, Modal, CardColumns, Badge } from 'react-bootstrap';
import ADSphotographer from '../pictures/ADSphotographer.gif';
import Header from '../layout/Header';
import ScrollTopButton from '../layout/ScrollTopButton';
import SmallTab from '../layout/SmallTab';
import Tab from '../layout/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../layout/Footer';

// advert
import addresiya from '../pictures/advert/addresiya_web.gif';
import startimesSMALL from '../pictures/advert/startimesSMALL.gif';
import police from '../pictures/advert/police.gif';
import MKENYA from '../pictures/advert/MKENYA.jpg';
import aitel from '../pictures/advert/aitel-rwanda.gif';
import corona from '../pictures/advert/corona.gif';
import RIBguhohotera from '../pictures/advert/RIBguhohotera.gif';
import Euronews from '../pictures/advert/Euronews.gif';
import fourG from '../pictures/advert/4g.webp';
import mtnyoba from '../pictures/advert/mtnyoba.gif';
import KBCwesternUNION from '../pictures/advert/KBCwesternUNION.gif';

const part3Style = {
  borderBottom: '1px solid #d0d5d8',
  padding: '20px 0',

};

class SingleAritical extends React.Component {
  state = {
    news: [],
    bestNews: [],
    udushya: [],
    comments: [],
    sameTopicNews: [],
    nyamukuru: [],
    mainSport: [],
    sport: [],
    mainUtuntuNutundi: [],
    viewsUtuntuNutundi: [],
    utuntuNutundi: [],
    name: '',
    email: '',
    comment: '',
    errorMessage: '',
    successMessage: '',
    topic: '',
    newsTitle: '',
  };

    reloadLocation = (e) => {
      window.location.reload();
    }

    componentDidMount() {
      console.log(this.props.match);

      Axios.get(`http://localhost:5000/api/v2/news/${this.props.match.params.id}`)
        .then((res) => {
          this.setState({
            news: res.data.data,
            newsId: res.data.data.id,
            newsTitle: res.data.data.title,
            topic: res.data.data.topic,
          });
        });

      Axios.get(`http://localhost:5000/api/v2/comments/newsId?newsId=${this.props.match.params.id}`)
        .then((res) => this.setState({ comments: res.data.data }));

      Axios.get('http://localhost:5000/api/v2/articles/bestNews6')
        .then((res) => {
          this.setState({
            bestNews: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });

      Axios.get('http://localhost:5000/api/v2/articles/inkuruNyamukuru8')
        .then((res) => {
          this.setState({
            nyamukuru: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });

      Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundi1')
        .then((res) => {
          this.setState({
            mainUtuntuNutundi: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });

      Axios.get('http://localhost:5000/api/v2/articles/sport1')
        .then((res) => {
          this.setState({
            mainSport: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });

      Axios.get('http://localhost:5000/api/v2/articles/sport5')
        .then((res) => {
          this.setState({
            sport: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });

      Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundiMostViews6')
        .then((res) => {
          this.setState({
            viewsUtuntuNutundi: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });

      Axios.get('http://localhost:5000/api/v2/articles/utuntuNutundi3')
        .then((res) => {
          this.setState({
            utuntuNutundi: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });
      Axios.get('http://localhost:5000/api/v2/articles/udushya5')
        .then((res) => {
          this.setState({
            udushya: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });

      Axios.get(`http://localhost:5000/api/v2/articles/topic?topic=${this.props.match.params.topic}`)
        .then((res) => {
          this.setState({
            sameTopicNews: [...res.data.data.filter((news) => news.title !== this.props.match.params.title)],
          });
        });
    }

    onCreateName = (e) => { this.setState({ name: e.target.value }); }

    onCreateEmail = (e) => { this.setState({ email: e.target.value }); }

    onCreateComment = (e) => { this.setState({ comment: e.target.value }); }

    dataSubmit = (e) => {
      e.preventDefault();

      const comment = {
        newsId: this.state.newsId,
        newsTitle: this.state.newsTitle,
        name: this.state.name,
        email: this.state.email,
        comment: this.state.comment,
        isPublished: false,
      };

      Axios.post('http://localhost:5000/api/v2/comment', comment)
        .then((res) => {
          if (res.data.status === 201) {
            this.setState({ comment: ' ', email: ' ', name: ' ', successMessage: 'Igitekerezo cyawe kigaragara nyuma yi isuzuma rikorwa na AHAZAZA.com, Murakoze!' });
            setTimeout(() => this.setState({ successMessage: ' ' }), 5000);
          } else if (res.data.error) {
            this.setState({
              errorMessage: 'Uzuza neza ahabugenewe hose mbere yo kohereza',
            });
            setTimeout(() => this.setState({ errorMessage: ' ' }), 5000);
          }
        })
        .catch((err) => {
          if (err.response) {
            this.setState({
              errorMessage: 'Uzuza neza ahabugenewe hose mbere yo kohereza',
            });
            setTimeout(() => this.setState({ errorMessage: ' ' }), 4000);
          }
        });
    }

    openRulesModel = () => (
      this.setState({
        rulesModel:
        <>
          <Modal.Dialog>
            <Modal.Header style={{ textAlign: 'center', fontSize: '0.9rem' }}>
              <Modal.Title> AMATEGEKO AGENGA IYANDIKA RY'IGITEKEREZO CYAWE</Modal.Title>
            </Modal.Header>

            <Modal.Body style={{ textAlign: 'center', fontSize: '0.8rem' }}>
              <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>
              Witandukira kubijyanye n'iyi nkuru; wikwandika ibisebanya, ibyamamaza cyangwa bivangura;
              wikwandika ibiteye isoni, Wifuza kubona byihuse ibivugwa/ibisubizo ku gitekerezo cyawe,
              andika email yawe ahabugenewe. Ibi bidakurikijwe igitekerezo cyanyu gishobora kutagaragara hano cyangwa kigasibwa.

              Igitekerezo cyawe kigaragara nyuma y'isuzuma rikorwa na AHAZAZA.com , Murakoze!
              </p>
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={() => this.setState({ rulesModel: '' })} variant="secondary">Funga</Button>
            </Modal.Footer>
          </Modal.Dialog>
      </>,
      })
    );

    render() {
      return (
        <div>
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
            <ScrollTopButton />

            <Row className="generalRow" style={{ padding: '1.2% 7% 7%', borderTop: '1px solid #d0d5d8' }} >
              <Col lg={9} md={12} xs={12} >
              <div style={{ position: 'fixed', top: 50, left: 0, right: 0, zIndex: 5 }}> {this.state.rulesModel}</div>

              <Card style={{ border: 'none' }}>
              <Card.Title style={{ textAlign: 'center', border: 'none' }} className="s1title" >
              <h1 className="phoneDisplayNone" style={{ fontWeight: '1000', color: 'black', fontSize: '250%', lineHeight: '117%', textAlignLast: 'center', borderBottom: '1px solid #d0d5d8e' }}>
              {this.state.news.title}
              </h1>
              <h1 className="phoneDisplay" style={{ fontWeight: '1000', color: 'black', fontSize: '1.4rem', lineHeight: '117%', textAlignLast: 'center', borderBottom: '1px solid #d0d5d8e' }}>
              {this.state.news.title}
              </h1>

            </Card.Title>
                    <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
                        <Image src={`http://localhost:5000/${this.state.news.urltoimage}`} fluid/>
                    </div>
                    <Card.Text style={{ paddingTop: '10px', padding: '2%' }}>
                    { ReactHtmlParser(this.state.news.description) }

                    </Card.Text>
                    <div style={{ fontStyle: 'oblique' }}>
                      <div><medium className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'roboto' }} ><i style={{ fontSize: '0.7rem' }} class="material-icons">visibility</i> yarebwe inshuro <Badge style={{ fontSize: '0.5rem', backgroundColor: '#0d47a1' }} >{this.state.news.views}</Badge>  |  <i style={{ fontSize: '0.7rem' }} class="material-icons">access_alarm</i> { moment(this.state.news.createdon).fromNow() }</medium></div>
                      <div><medium className="text-muted" style={{ fontSize: '0.8rem', fontFamily: 'roboto' }} ><i style={{ fontSize: '0.7em' }} class="material-icons">person</i> yanditswe na <Badge style={{ fontSize: '0.5rem', backgroundColor: '#0d47a1' }} >{this.state.news.author}</Badge> </medium></div>
                    </div>
                  </Card>
                  <div className="phoneDisplayNone" style={{ padding: '10px' }}>
                    <span style={{ color: '#4267B2' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
                    <span style={{ color: '#FF0000', padding: '10px' }}><FontAwesomeIcon icon={faYoutube} size="2x" /></span>
                    <span style={{ color: '#0077b5' }}><FontAwesomeIcon icon={faLinkedin} size="2x" /></span>
                    <span style={{ color: '#bc2a8d', padding: '10px' }}><FontAwesomeIcon icon={faInstagram} size="2x" /></span>
                    <span style={{ color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></span>
                  </div>

                  <div className="phoneDisplay" style={{ padding: '10px' }}>
                    <span style={{ color: '#4267B2' }}><FontAwesomeIcon icon={faFacebook} size="1x" /></span>
                    <span style={{ color: '#FF0000', padding: '10px' }}><FontAwesomeIcon icon={faYoutube} size="1x" /></span>
                    <span style={{ color: '#0077b5' }}><FontAwesomeIcon icon={faLinkedin} size="1x" /></span>
                    <span style={{ color: '#bc2a8d', padding: '10px' }}><FontAwesomeIcon icon={faInstagram} size="1x" /></span>
                    <span style={{ color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitterSquare} size="1x" /></span>
                  </div>

                  <div className="phoneDisplayNone">
                  {this.state.sameTopicNews.map((news) => (
                    <Nav.Link style={{ marginLeft: '8%', marginRight: '8%' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>
                      <ol style={{ listStyleType: 'square', fontSize: '1rem', marginLeft: '20%', cursor: 'pointer', padding: '0', margin: '0' }}>
                        <li style={{ textDecoration: 'underline', textDecorationColor: 'blue', textDecorationStyle: 'solid', textDecorationThickness: '2px', fontWeight: 'bold', fontFamily: 'Helmet,Freesans,Helvetica,Arial,sans-serif', fontStyle: 'italic', color: 'black' }}>
                           <p className="hoveringTitle">{news.title}</p>
                        </li>
                      </ol>
                    </Nav.Link>

                  ))}
                  </div>

                  <div className="phoneDisplay">
                  {this.state.sameTopicNews.map((news) => (
                    <Nav.Link href={`/Article/${news.topic}/${news.id}/${news.title}`}>
                      <ol style={{ listStyleType: 'square', cursor: 'pointer', padding: '0', margin: '0' }}>
                        <li key={news.key} style={{ fontWeight: 450, fontSize: '0.7rem', textDecoration: 'underline', textDecorationColor: '#0d47a1', textDecorationStyle: 'solid', textDecorationThickness: '2px', fontStyle: 'italic', color: 'black' }}>
                           {news.title}
                        </li>
                      </ol>
                    </Nav.Link>

                  ))}
                  <img className="phoneDisplay"
                        src={ADSphotographer}
                        width="100%"
                        height="100%"
                      />
                  </div>

                  <Form>
                        <h4 style={{ padding: '7px', backgroundColor: '#0d47a1', overflow: 'hidden', color: '#fff', fontWeight: '700', fontSize: '120%', fontFamily: 'roboto' }}>TANGA IGITEKEREZO</h4>
                        <div style={{ textAlign: 'center', lineHeight: 1.1, fontSize: '120%', backgroundColor: '#B73225', color: 'white' }}> {this.state.errorMessage} </div>
                        <div style={{ textAlign: 'center', lineHeight: 1.1, fontSize: '120%', backgroundColor: '#42ba96', color: 'white' }}> {this.state.successMessage} </div>
                        <Row md={2} xs={1}>
                          <Col>
                              <Form.Control placeholder="Andika amazina yawe hano" value={this.state.name} onChange={this.onCreateName} />
                          </Col>
                          <Col>
                             <Form.Control placeholder="Andika email yawe hano" value={this.state.email} onChange={this.onCreateEmail}/>
                          </Col>
                        </Row>
                        <Form.Control placeholder="Andika igitekerezo cyawe hano" value={this.state.comment} onChange={this.onCreateComment} style={{ marginTop: '2%', width: '100%' }} as="textarea" rows="3" />
                        <Row md={2} xs={1}>
                          <Col>
                              <Button onClick={this.dataSubmit} style={{ marginTop: '2%', marginBottom: '10%' }} variant="primary"><i style={{ fontSize: '1.3rem', marginTop: '5px' }} class="material-icons">mail_outline</i> Ohereza</Button>
                          </Col>
                          <Col>
                             <h4 onClick={this.openRulesModel} style={{ cursor: 'pointer', color: 'blue', fontStyle: 'italic', fontSize: '0.8rem', fontFamily: 'roboto', paddingTop: '3px', paddingBottom: '5px' }}>AMATEGEKO AGENGA IYANDIKA RY'IGITEKEREZO CYAWE</h4>
                          </Col>
                        </Row>
                    </Form>
                    {this.state.comments.map((comment) => (
                      <ListGroup style={{ marginBottom: '20px', borderBottom: 'solid 2px gray' }}>
                          <ListGroup.Item style={{ paddingRight: '20px', paddingLeft: '10px', width: '450px', float: 'left', borderRadius: '0px 50px 0px 0px', background: '#DCDCDC', fontFamily: 'roboto', fontWeight: '500', fontSize: '1.2rem', color: 'black' }}>
                              {comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}
                          </ListGroup.Item>
                          <div style={{ paddingLeft: '10px', paddingRight: '20px', border: 'solid 1px gray' }}>
                            <p style={{ color: '#242526', wordBreak: 'break-all' }}>{comment.comment}</p>
                            <p style={{ float: 'right' }}> <medium style={{ fontSize: '0.7rem', fontFamily: 'roboto' }} className="text-muted">  <i style={{ fontSize: '0.6rem' }} class="material-icons">access_alarm</i> { moment(comment.createdon).fromNow() }</medium></p>
                          </div>
                    </ListGroup>

                    ))}
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
                                    <medium style={{ fontSize: '0.75rem', fontFamily: 'roboto' }} className="text-muted"> <i style={{ fontSize: '0.6rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()} <i style={{ fontSize: '0.6rem' }} class="material-icons">visibility</i> <Badge style={{ backgroundColor: '#0d47a1', color: 'white' }} >{news.views}</Badge> <span style={{ fontSize: '0.75rem' }} className="phoneDisplayNone">views</span></medium>
                                  </Card.Text>
                              </a>
                            </Card>
                        </Col>
                    ))}
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
                          <Card key={news.id} style={{ borderTop: '1px solid #eee', border: 'none' }}>
                            <Nav.Link style={{ color: 'black' }} href={`/Article/${news.topic}/${news.id}/${news.title}`}>

                                <Card.Title style={{ lineHeight: 1.6, maxHeight: '150px', minHeight: '100px', fontSize: '18px', fontWeight: '500' }} className="hoveringTitle"> {news.title} </Card.Title>
                                <Card.Text style={{ borderBottom: '1px solid #d0d5d8', paddingBottom: '5px', width: '100%' }}>
                                  <medium style={{ fontSize: '0.75rem', fontFamily: 'roboto' }} className="text-muted"><Badge style={{ fontSize: '0.75rem', fontFamily: 'roboto', backgroundColor: '#0d47a1' }} variant="primary">{news.category}</Badge> |  <i style={{ fontSize: '0.6rem' }} class="material-icons">access_alarm</i> {moment(news.createdon).fromNow()}</medium>
                                </Card.Text>
                            </Nav.Link>
                          </Card>
                      </Col>
                  ))}

                  {/* ----------------phone display-------------- */}
                  {this.state.viewsUtuntuNutundi.map((news) => (
                      <Col className="phoneDisplay">
                          <Card key={news.id} style={{ borderTop: '1px solid #eee', border: 'none' }}>
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

      {/* advertising  */}

           <div className="advert" style={{ padding: '20px', textAlign: 'center' }}>
              <Image alt="airtel" src={aitel}/>
            </div>

              </Col>
        {/* Part 2 Advertising and hit news */}
          <Col lg={3} md={12} xs={12}>
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
              <img
                src={ADSphotographer}
                width="100%"
                height="100%"
              />
              </div>
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
              <div className="advert" style={{ paddingTop: '20px' }}>
              <img
                src={ADSphotographer}
                width="100%"
                height="100%"
              />
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
        </div>
      );
    }
}

export default SingleAritical;
