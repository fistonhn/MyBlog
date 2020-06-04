import React from 'react'
import { Button,Form,ListGroup,Col,Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import igihango from '../pictures/igihango.png';

export default function Footer() {

      
    const listStyle={
        overflow:'hidden',
        color:'#fff',
        backgroundColor:'#0d47a1',
        borderBottom: '2px dotted #fff',
        width:'100%',

    }

    return (
        <div>
        <Row  style={{backgroundColor:'#0d47a1', padding:'3%', textAlign:'center', overflow:'hidden'}}>
        <Col  style={{ background:'#0d47a1'}} lg={4} md={4} xs={12}>
            <ListGroup variant="flush">
                <ListGroup.Item action href="/" style={{backgroundColor:'#0d47a1',overflow:'hidden', marginTop:'-19px'}}>
                <img
                    src={igihango}
                    width="100%"
                    height="auto"
                    alt="IGIHANGO.RW"
                    />
                </ListGroup.Item>
                <ListGroup.Item style={{backgroundColor:'#0d47a1',color:'#fff',textAlign:'center',marginLeft:'-15px', marginTop:'-30px'}}>
                    <div style={{color:'#fff'}}> <i style={{ fontSize: '1rem'}} class="material-icons">phone</i> &nbsp; +250788239598/ +250784277345 </div>
                    <div  style={{color:'#fff'}}> <i class="fa fa-google"></i> ericseba2016@gmail.com </div>
                    <div  style={{color:'#fff'}}> <i class="fa fa-google"></i> fistonhn@gmail.com </div>
                    <div  style={{color:'#fff', fontSize:'2rem'}}> <i class="fa fa-facebook"></i> <i class="fa fa-youtube"></i> <i class="fa fa-instagram"></i></div>
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col lg={4} md={4} xs={12} style={{background:'#0d47a1'}}>
            <ListGroup variant="flush" >
                <ListGroup.Item style={listStyle}>
                    <h4 style={{overflow:'hidden',color:'#fff', fontWeight:'700', fontSize:'2rem', fontFamily:'roboto', paddingTop:'15px', paddingBottom:'5px'}}>Serivisi Dutanga</h4>
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                    - Video Production
                </ListGroup.Item>
                <ListGroup.Item  style={listStyle}>
                    - Photography
                </ListGroup.Item>
                <ListGroup.Item style={listStyle}>
                    - Web Development
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col lg={4} md={4} xs={12} style={{background:'#0d47a1'}}>
        <ListGroup variant="flush" >
            <Form  >
            <ListGroup.Item style={{backgroundColor:'#0d47a1', paddingTop:'3%', }}>
                <h4 style={{overflow:'hidden',color:'#fff', fontWeight:'700', fontSize:'2rem', fontFamily:'roboto', paddingTop:'15px', paddingBottom:'5px'}}>Twandikire</h4>
            </ListGroup.Item>
                <Form.Control style={{ width:'100%'}}  type="email" placeholder="Andika Email yawe hano" />
                <Form.Control style={{ marginTop:'2%', width:'100%'}} as="textarea" placeholder="Andika Message yawe hano" rows="3" />
                <Button  style={{marginTop:'2%', marginBottom:'10%'}} variant="primary" type="submit"><i style={{ fontSize: '1.3rem', marginTop:'5px'}} class="material-icons">mail_outline</i> Ohereza</Button>
            </Form>
        </ListGroup>
        </Col>
    </Row>
    <p style={{ fontFamily:'roboto',textAlign:'center', background:'rgb(0, 96, 172)',color:'#fff', padding:'10px',marginBottom:'0px', fontSize: '1rem', fontStyle:'italic', width:'inherit'}}>&copy; 2020 | Designed by HN~Fiston</p></div>


    )
 
}
 
