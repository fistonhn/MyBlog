import React from 'react'
import Header from '../layout/Header'
import Tab from '../layout/Tab'
import Footer from '../layout/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

class Home extends React.Component {

    state = {
        articles: []
      }
      componentDidMount() {
        Axios.get('http://jsonplaceholder.typicode.com/todos')
        .then(res => this.setState({ articles: res.data }))
        
      }

  render() {
  console.log(this.state.title)
    return (
         <React.Fragment>    
            <Header />   
            <Tab />  
            <div>
            {this.state.articles.map((article) => (
            <h2>{article.title}</h2>
            ))}   
            </div>
            <Footer />     
        </React.Fragment>
    );   
}
}


export default Home

