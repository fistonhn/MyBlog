import React from 'react';
import { Redirect } from 'react-router';
import { Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import igihango from '../pictures/igihango.png';

function LogoutHeader() {
  const logoutUser = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  if (localStorage.getItem('token') === null) {
    return <Redirect to={'/Login'}/>;
  }

  return (
    <div style={{ padding: '10px', background: '#f8f9fa' }}>
        <a href="/">
            <img style={{ marginLeft: '20px', float: 'left' }}
              src={igihango}
              width="130px"
              height="80px"
              alt="AHAZAZA.COM"
            />
        </a>
        <Button style={{ float: 'right', marginRight: '25px', marginTop: '30px', overflow: 'hidden' }} onClick = {logoutUser} color="inherit" >Logout</Button>
    </div>
  );
}

export default LogoutHeader;
