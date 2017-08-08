import React, {Component} from 'react';

export default class Home extends Component {

  render() {
    let homeStyle = {
      "textAlign": "center",
      "height": "30vw",
      "color": "#fff",
      "backgroundImage": "url(https://static.pexels.com/photos/14287/pexels-photo-14287.jpeg)",
      "backgroundPosition": "center",
      "backgroundSize": "cover",
      "backgroundRepeat": "none"
    }
    return (
      <div className="container">
         <div className="col-lg-12 header" style={homeStyle}>
         </div>
       </div>
      );
  }
}
