import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Catagories from './components/pages/Catagories';
import SingleArticles from './components/pages/SingleAritical';
import Contact from './components/pages/Contact';
import Register from './components/pages/Register';
import Login from './components/pages/Login';

import ManagePosts from './components/pages/admin/ManagePosts';
import CreatePost from './components/pages/admin/CreatePost';
import ManageTopics from './components/pages/admin/ManageTopics';
import CreateTopic from './components/pages/admin/CreateTopic';
import ManageUsers from './components/pages/admin/ManageUsers';
import CreateUser from './components/pages/admin/CreateUser';
import './app.css';


class App extends React.Component {
 

  render() {
    return (
      <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/Catagories" component={Catagories}></Route>
          <Route path="/SingleArticles" component={SingleArticles}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Register" component={Register}></Route>
          <Route path="/Login" component={Login}></Route>

          <Route path="/ManagePosts" component={ManagePosts}></Route>
          <Route path="/CreatePost" component={CreatePost}></Route>
          <Route path="/ManageTopics" component={ManageTopics}></Route>
          <Route path="/CreateTopic" component={CreateTopic}></Route>
          <Route path="/ManageUsers" component={ManageUsers}></Route>
          <Route path="/CreateUser" component={CreateUser}></Route>
      </Router>
    );
  }
}

export default App;
