import React, {Component} from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';


export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

      <div>
        <Header/>
        {this.props.children}
        <Footer/>


      </div>
    );
  }
}
