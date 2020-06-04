import React from 'react';
import { Redirect } from 'react-router'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import igihango from '../pictures/igihango.png';



export default function SearchAppBar() {

    
const logoutUser = ()=> {

    localStorage.removeItem('token');
    window.location.reload();

}


  if (localStorage.getItem("token") === null) {
    return <Redirect to={'/Login'}/>
  }

  return (

    <AppBar style={{backgroundColor:'#f8f9fa',  color:'#0d47a1', fontFamily: 'Roboto', fontWeight:'700'}} position="static">
    <Toolbar>

          <Typography variant="h6">
            <Link  href="/">
            <img
                    src={igihango}
                    width="243"
                    height="90.396"
                    className="responsive-navbar-nav"
                    alt="IGIHANGO.RW"
                  />
            </Link>
          </Typography>
          <Button onClick = {logoutUser} color="inherit" >Logout</Button>
          
        </Toolbar>
      </AppBar>
  );
}
