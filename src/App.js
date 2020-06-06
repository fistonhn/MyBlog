import React from 'react'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Catagories from './components/pages/Catagories';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import SingleAritical from './components/pages/SingleAritical';

import UnpublishedPosts from './components/pages/admin/UnpublishedPosts';
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
      <Router >
          <Route exact path="/" component={Home}></Route>
          <Route path="/Catagories/:id" component={Catagories}></Route>
          <Route path="/About" component={About}></Route>
          <Route path="/Contact" component={Contact}></Route>
          <Route path="/Login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/SingleArticles/:id" component={SingleAritical}></Route>

          <Route path="/UnpublishedPosts" component={UnpublishedPosts}></Route>
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
