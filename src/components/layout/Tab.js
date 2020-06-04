import React from 'react'
import { Navbar, Nav,Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import igihango from '../pictures/igihango.png';

function Tab() {
    

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
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

const dropdownStyle={
    backgroundColor:'#0d47a1',
    color:'#fff',
    border:'none',
    padding: '10px 15px',
    lineHeight: '1.3',
    fontSize: '1.1rem',
}

const navBarStyle={
    paddingLeft:'7%',
    paddingRight:'7%',
    backgroundColor:'#0d47a1',
    fontFamily:'"Comic Sans MS", cursive, sans-serif'
}
const navStyle={
    padding: '10px 15px',
    color:'#fff',
    lineHeight: '1.3',
    fontSize: '1.1rem',
}

    return (
       
        <Navbar sticky="top" collapseOnSelect expand="lg"  className="tabStyle" style={navBarStyle}>
            <Nav.Link   href="/" className="imgStyle">
            <img
            src={igihango}
            width="160"
            height="65.8"
            className="responsive-navbar-nav"
            alt="IGIHANGO.RW"
            />
            </Nav.Link>
            <Navbar.Toggle style={{backgroundColor:'#0d47a1', position: 'sticky', border:'none', color:'#fff'}} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav  defaultActiveKey="/home" as="ul" className="mr-auto">
                    <Nav.Link className="hovering" style={navStyle}  href="/">Ahabanza </Nav.Link>
                    <Dropdown className="hovering" id="collasible-nav-dropdown">
                        <Dropdown.Toggle className="hovering" as={CustomToggle} id="collasible-nav-dropdown">
                            Serivisi Dutanga
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
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Siporo">Siporo</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Politiki">Politiki</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Ubukungu">Ubukungu</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Tekinologi">Tekinologi</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/Catagories/Ubuzima">Ubuzima</Nav.Link>
                    <Nav.Link className="hovering" style={navStyle} href="/https://www.youtube.com/channel/UC-WsxVRz2IhgBSQ_oSxlhXQ/videos?view_as=subscriber">Igihango TV</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default Tab
