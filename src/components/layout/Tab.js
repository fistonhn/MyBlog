import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFacebook, faInstagram, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { Navbar, Nav, Dropdown, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import igihango from '../pictures/igihango.png';
import ADSphotographer from '../pictures/ADSphotographer.gif';

function Tab() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    // eslint-disable-next-line no-use-before-define
    <div style={dropdownStyle}
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
    >
    {children}
    &#x25bc;
    </div>
  ));

  const dropdownStyle = {
    backgroundColor: '#0d47a1',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    lineHeight: '1.3',
    fontSize: '1.1rem',
  };

  const navBarStyle = {
    paddingLeft: '7%',
    paddingRight: '7%',
    backgroundColor: '#0d47a1',
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  };
  const navStyle = {
    padding: '10px 15px',
    color: '#fff',
    lineHeight: '1.3',
    fontSize: '1rem',
  };

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 1, fontSize: '14px' }}>
      {/* phone display log and social media */}
          <Nav.Link href="/" className="phoneDisplay">
            <div style={{ float: 'left' }}>
              <img
                src={igihango}
                width="35%"
                height="35%"
                float= 'left'
                alt="AHAZAZA.COM"
              />
              <div style={{ float: 'right', overflow: 'hidden' }}>
                  <span style={{ color: '#0077b5' }}><FontAwesomeIcon icon={faLinkedin} size="1x" /></span>
                  <span style={{ color: '#FF0000', padding: '10px' }}><FontAwesomeIcon icon={faYoutube} size="1x" /></span>
                  <span style={{ color: '#4267B2' }}><FontAwesomeIcon icon={faFacebook} size="2x" /></span>
                  <span style={{ color: '#bc2a8d', padding: '10px' }}><FontAwesomeIcon icon={faInstagram} size="1x" /></span>
                  <span style={{ color: '#1DA1F2' }}><FontAwesomeIcon icon={faTwitterSquare} size="1x" /></span>
              </div>

            </div>
          </Nav.Link>
          <Navbar sticky="top" collapseOnSelect expand="lg" className="tabStyle" style={navBarStyle}>
              <div style={{ margin: -7, float: 'left' }}>
              <img className="phoneDisplay"
                src={ADSphotographer}
                width="26%"
                height="26%"
              />
            <Navbar.Toggle style={{ backgroundColor: 'white', marginTop: '7px', position: 'sticky', border: 'none', color: '#fff', float: 'right' }} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav defaultActiveKey="/home" as="ul" className="mr-auto">
                    <Nav.Link className="hovering" style={navStyle} href="/">Ahabanza </Nav.Link>
                    <Dropdown className="hovering" id="collasible-nav-dropdown">
                        <Dropdown.Toggle className="hovering" as={CustomToggle} id="collasible-nav-dropdown">
                            Serivisi
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="hovering">
                            <Dropdown.Item>Video Production</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item >Photography</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item >Wedding coverage</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item>Web Development</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Imyidagaduro">Imyidagaduro</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Siporo">Imikino</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Politiki">Politiki</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Ubukungu">Ubukungu</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Tekinologi">Tekinologi</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Ubuzima">Ubuzima</Nav.Link>

                    <Nav.Link style={navStyle}> |</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/about"> ABOUT</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/contact">CONTACT</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    </div>

  );
}

export default Tab;
