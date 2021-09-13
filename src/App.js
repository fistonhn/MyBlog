import React from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Catagories from './components/pages/Catagories';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Article from './components/pages/Article';

import UnpublishedPosts from './components/pages/admin/UnpublishedPosts';
import UnpublishedComments from './components/pages/admin/UnpublishedComments';
import ManagePosts from './components/pages/admin/ManagePosts';
import CreatePost from './components/pages/admin/CreatePost';
import ManageTopics from './components/pages/admin/ManageTopics';
import ManageDiactivatedTopics from './components/pages/admin/ManageDiactivatedTopics';
import ManageComments from './components/pages/admin/ManageComments';
import ManageUsers from './components/pages/admin/ManageUsers';
import CreateUser from './components/pages/admin/CreateUser';
import './app.css';

class App extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Router >
          <Route exact path="/" component={Home}></Route>
          <Route path="/Catagories/:id" component={Catagories}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/Article/:topic/:id/:title" component={Article}></Route>

          <Route path="/UnpublishedPosts" component={UnpublishedPosts}></Route>
          <Route path="/UnpublishedComments" component={UnpublishedComments}></Route>
          <Route path="/ManagePosts" component={ManagePosts}></Route>
          <Route path="/CreatePost" component={CreatePost}></Route>
          <Route path="/ManageTopics" component={ManageTopics}></Route>
          <Route path="/ManageDiactivatedTopics" component={ManageDiactivatedTopics}></Route>
          <Route path="/ManageComments" component={ManageComments}></Route>
          <Route path="/ManageUsers" component={ManageUsers}></Route>
          <Route path="/CreateUser" component={CreateUser}></Route>
      </Router>
    );
  }
}

export default App;
